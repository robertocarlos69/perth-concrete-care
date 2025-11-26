import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    // ---- Check required env vars ----
    const requiredEnv = [
      'TITAN_SMTP_HOST',
      'TITAN_SMTP_PORT',
      'TITAN_SMTP_USER',
      'TITAN_SMTP_PASS',
      'CONTACT_FROM',
      'CONTACT_TO',
    ] as const

    const missing = requiredEnv.filter((k) => !process.env[k])
    if (missing.length) {
      console.error('❌ Missing env vars for contact API:', missing)
      return NextResponse.json(
        { ok: false, error: 'MISSING_ENV', missing },
        { status: 500 },
      )
    }

    const host = process.env.TITAN_SMTP_HOST!
    const port = Number(process.env.TITAN_SMTP_PORT)
    const user = process.env.TITAN_SMTP_USER!
    const pass = process.env.TITAN_SMTP_PASS!
    const from = process.env.CONTACT_FROM!
    const to = process.env.CONTACT_TO!

    const contentType = req.headers.get('content-type') || ''

    let name = ''
    let email = ''
    let phone = ''
    let suburb = ''
    let service = ''
    let area = ''
    let details = ''
    let attachments: {
      filename: string
      content: Buffer
      contentType: string
    }[] = []

    // ---------- A) multipart/form-data (with photos) ----------
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      const get = (key: string) => (formData.get(key)?.toString() || '').trim()

      name = get('name')
      email = get('email')
      phone = get('phone')
      suburb = get('suburb')
      service = get('service')
      area = get('area')
      details = get('details')

      const MAX_FILES = 5
      const MAX_SIZE = 2 * 1024 * 1024 // 2 MB

      const allPhotos = formData.getAll('photos')
      const files = allPhotos.filter((v): v is File => v instanceof File)

      const limited = files.slice(0, MAX_FILES).filter((f) => f.size <= MAX_SIZE)

      attachments = await Promise.all(
        limited.map(async (file, idx) => {
          const arrayBuf = await file.arrayBuffer()
          return {
            filename: file.name || `photo-${idx + 1}.jpg`,
            content: Buffer.from(arrayBuf),
            contentType: file.type || 'application/octet-stream',
          }
        }),
      )
    }
    // ---------- B) JSON fallback (old behaviour / no files) ----------
    else if (contentType.includes('application/json')) {
      const data = await req.json()
      name = (data.name || '').toString()
      email = (data.email || '').toString()
      phone = (data.phone || '').toString()
      suburb = (data.suburb || '').toString()
      service = (data.service || '').toString()
      area = (data.area || '').toString()
      details = (data.details || '').toString()
    }
    // ---------- C) Unsupported content type ----------
    else {
      console.error('❌ Unsupported content type:', contentType)
      return NextResponse.json(
        { ok: false, error: 'UNSUPPORTED_CONTENT_TYPE', contentType },
        { status: 400 },
      )
    }

    console.log('[CONTACT PAYLOAD]', { name, email, phone, suburb, service, area })
    console.log('[SMTP DEBUG]', { host, port, user })

    const transporter = nodemailer.createTransport({
      host,
      port,         // e.g. 465 from env
      secure: port === 465, // true for SSL/TLS on 465
      auth: { user, pass },
    })

    const plain = `
New enquiry from Perth Concrete Care website

Name:   ${name || '-'}
Email:  ${email || '-'}
Phone:  ${phone || '-'}
Suburb: ${suburb || '-'}
Service: ${service || '-'}
Area (m²): ${area || '-'}

Details:
${details || '-'}
`.trim()

    const info = await transporter.sendMail({
      from,
      to,
      subject: `New enquiry from ${name || 'website visitor'}`,
      replyTo: email || undefined,
      text: plain,
      html: plain.replace(/\n/g, '<br />'),
      attachments: attachments.length ? attachments : undefined,
    })

    console.log('✅ Contact email sent, id:', info.messageId)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('❌ Email send failed', err)
    return NextResponse.json(
      { ok: false, error: 'EMAIL_FAILED' },
      { status: 500 },
    )
  }
}
