import Image from "next/image";
import Link from "next/link";
import { business, services, trustSignals } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/transparent-logo.png"
              alt="Perth Concrete Care logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <div>
              <div className="font-bold text-white">{business.name}</div>
              <div className="text-xs text-stone-400">ABN: {business.abn}</div>
            </div>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-6 text-stone-400">
            Concrete grinding, honing, polishing, epoxy floors and surface preparation across Perth north of the river. Service area only, no showroom.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-stone-300"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="font-bold text-white">Services</div>
          <ul className="mt-3 text-sm space-y-2 text-stone-300">
            {services.map((service) => (
              <li key={`${service.url}-${service.serviceType}`}>
                <Link href={new URL(service.url).pathname} className="hover:text-emerald-300 transition-colors">
                  {service.serviceType}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="font-bold text-white">Service area</div>
          <p className="mt-3 text-sm leading-6 text-stone-400">
            {business.serviceAreaLong}
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="font-bold text-white">Contact</div>
          <ul className="mt-3 text-sm space-y-2 text-stone-300">
            <li>
              <a href={`tel:${business.phoneHref}`} className="hover:text-emerald-300 transition-colors">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-emerald-300 transition-colors break-all">
                {business.email}
              </a>
            </li>
            <li>{business.hoursDisplay}</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-3 py-1 text-stone-300 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
            >
              Instagram
            </a>
            <a
              href={business.pinterestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-3 py-1 text-stone-300 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
            >
              Pinterest
            </a>
            <a
              href={business.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-3 py-1 text-stone-300 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
            >
              Google Profile
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-stone-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-emerald-300 transition-colors" href={business.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              Leave a Google review
            </a>
            <a className="hover:text-emerald-300 transition-colors" href="#">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
