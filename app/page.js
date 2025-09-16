import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Mint your NFT{" "}
              <span className="text-indigo-400">professionally</span> —<br />
              ready for <span className="whitespace-nowrap">Farcaster.</span>
            </h1>

            <p className="mt-6 max-w-xl text-white/70">
              A simple, fast, and secure way to create on-chain collectibles
              across multiple EVM networks. Perfect for public mints and
              community drops.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#networks"
                className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Get Started
              </a>
              <a
                href="#why"
                className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Learn More
              </a>
            </div>

            <p className="mt-4 text-xs text-white/40">
              * Wallet connection and on-chain minting will be enabled in the
              next step.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/next.svg"
              alt="Next.js"
              width={360}
              height={120}
              className="opacity-90"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why section */}
      <section id="why" className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="mb-6 text-2xl font-semibold">Why this minter?</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold text-indigo-300">
              Multichain by design
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Mint on multiple EVM networks from a single interface.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold text-indigo-300">
              Farcaster-ready
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Optimized for Mini Apps and public mints in social feeds.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold text-indigo-300">IPFS-first</h3>
            <p className="mt-2 text-sm text-white/70">
              Metadata and media hosted on IPFS for permanence.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold text-indigo-300">Gas-aware UX</h3>
            <p className="mt-2 text-sm text-white/70">
              Clear costs, minimal prompts, and safe defaults.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold text-indigo-300">
              Flexible metadata
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Set name, description, attributes, supply, and royalties.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold text-indigo-300">
              Open-source workflow
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Clean stack with Next.js + Tailwind for easy iteration.
            </p>
          </div>
        </div>
      </section>

      {/* Networks */}
      <section id="networks" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="mb-6 text-2xl font-semibold">Supported networks</h2>
        <p className="mb-4 text-sm text-white/60">
          Start here. We’ll enable wallet connection and on-chain actions next.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { name: "Base" },
            { name: "Optimism" },
            { name: "Celo" },
            { name: "Soneium" },
            { name: "INK" },
            { name: "Unichain" },
          ].map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-medium">{c.name}</div>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/50">
                  Soon
                </span>
              </div>
              <p className="mt-2 text-sm text-white/60">
                Configure RPC, chain ID, and contracts to mint on {c.name}.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Prepare Mint Flow
          </a>
        </div>
      </section>

      {/* Footer credit (discreet & professional) */}
      <footer className="mt-16 border-t border-white/10 px-6 py-6">
        <div className="mx-auto max-w-6xl text-center text-xs text-white/50">
          Built by <span className="font-medium text-white/70">Dany Zly</span>
          <span className="mx-2">•</span>
          <a
            href="https://warpcast.com/danymdp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 underline underline-offset-4"
          >
            Farcaster: @danymdp
          </a>
          <span className="mx-2">•</span>
          <a
            href="https://x.com/danyzly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 underline underline-offset-4"
          >
            X (Twitter)
          </a>
          <span className="mx-2">•</span>
          <a
            href="https://t.me/danyzly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 underline underline-offset-4"
          >
            Telegram
          </a>
          <span className="mx-2">•</span>
          <a
            href="mailto:dany.cryptoia@gmail.com"
            className="hover:text-white/80 underline underline-offset-4"
          >
            dany.cryptoia@gmail.com
          </a>
          <span className="mx-2">•</span>
          <a
            href="https://github.com/danyzly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 underline underline-offset-4"
          >
            GitHub: danyzly
          </a>
        </div>
      </footer>
    </main>
  );
}
