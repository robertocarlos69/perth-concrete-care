import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-slate-900 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white text-neutral-900 flex items-center justify-center font-bold">
              PCC
            </div>
            <div className="font-semibold">Perth Concrete Care</div>
          </div>

          <p className="mt-3 text-sm text-neutral-400">
            Concrete grinding, honing, polishing, epoxy floors, and surface prep across Perth Metro. Indoor &amp; outdoor.
          </p>

          <div className="mt-3 text-sm">ABN: 63 775 263 307</div>
        </div>

        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 text-sm space-y-1">
            <li>
              <Link href="/concrete-grinding-perth" className="hover:underline">
                Concrete Grinding &amp; Sealing
              </Link>
            </li>
            <li>
              <Link href="/honed-concrete-perth" className="hover:underline">
                Honing &amp; Seal Concrete Floors
              </Link>
            </li>
            <li>
              <Link href="/concrete-polishing-perth" className="hover:underline">
                Polished Concrete
              </Link>
            </li>
            <li>
              <Link href="/epoxy-flake-flooring-perth" className="hover:underline">
                Epoxy Flake Floors
              </Link>
            </li>
            <li>
              <Link href="/metallic-epoxy-flooring-perth" className="hover:underline">
                Metallic Epoxy Floors
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 text-sm space-y-1">
            <li>
              <a href="mailto:sales@perthconcretecare.com.au" className="hover:underline">
                sales@perthconcretecare.com.au
              </a>
            </li>
            <li>
              <a href="tel:+61448483226" className="hover:underline">
                0448 483 226
              </a>
            </li>
            <li>Mon–Sat 7:00–18:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-neutral-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Perth Concrete Care. All rights reserved.</span>
          <a className="hover:underline" href="#">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
