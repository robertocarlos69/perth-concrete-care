import type { Metadata } from "next";
import Link from "next/link";
import { business, siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Perth Concrete Care collects, uses and protects the personal information you provide through our quote form, email and phone enquiries.",
  alternates: { canonical: `${siteUrl}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-stone-100">
      <section className="mx-auto max-w-3xl px-4 pt-14 pb-20">
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>›</span>
          <span className="text-stone-900">Privacy Policy</span>
        </div>

        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-stone-500">Last updated: June 2026</p>

        <div className="mt-8 space-y-8 text-stone-700 leading-relaxed">
          <p>
            {business.name} (ABN {business.abn}) respects your privacy. This
            policy explains what personal information we collect when you contact
            us, how we use it, and the choices you have. We handle personal
            information in line with the Australian Privacy Principles under the{" "}
            <em>Privacy Act 1988</em> (Cth).
          </p>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              What we collect
            </h2>
            <p className="mt-3">
              We only collect the information you choose to give us so we can
              quote and carry out your work. This typically includes your name,
              phone number, email address, suburb, project details and any
              photos you upload through our quote form. We do not collect
              sensitive information, and we never ask for payment details through
              the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              How we use your information
            </h2>
            <p className="mt-3">
              Information you provide is used to respond to your enquiry, prepare
              a quote, schedule and complete your job, and follow up about the
              work. We may keep records of completed jobs for warranty and
              business purposes. We do not sell, rent or share your details with
              third parties for marketing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Analytics &amp; cookies
            </h2>
            <p className="mt-3">
              This website uses Google Analytics to understand how visitors use
              the site so we can improve it. Google may set cookies and collect
              anonymised usage data such as pages viewed and approximate
              location. This data is aggregated and is not used to personally
              identify you. You can block cookies in your browser settings
              without affecting your ability to request a quote by phone or
              email.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Photos you send us
            </h2>
            <p className="mt-3">
              Photos you upload or email are used to assess and quote your floor.
              With your permission we may showcase finished work in our gallery
              or on social media — we will ask first, and you can decline at any
              time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Storage &amp; security
            </h2>
            <p className="mt-3">
              Enquiries reach us by email and are stored on reputable
              business platforms. We take reasonable steps to protect your
              information from misuse, loss and unauthorised access, and we keep
              it only as long as needed for the purposes above or as required by
              law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Access, correction &amp; contact
            </h2>
            <p className="mt-3">
              You can ask us what personal information we hold about you, request
              a correction, or ask us to delete it. Contact us at{" "}
              <a
                className="text-emerald-700 underline"
                href={`mailto:${business.email}`}
              >
                {business.email}
              </a>{" "}
              or{" "}
              <a
                className="text-emerald-700 underline"
                href={`tel:${business.phoneHref}`}
              >
                {business.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. The latest version
              will always be available on this page.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
