import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const {
      name,
      email,
      phone,
      suburb,
      service,
      area,
      details,
    } = data as Record<string, string>

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

    console.log('[SMTP DEBUG]', { host, port, user, passLen: pass.length })

    const transporter = nodemailer.createTransport({
      host,
      port,          // 465 from env
      secure: true,  // SSL/TLS on 465
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
