import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-brand-navy text-white p-4 md:p-10 selection:bg-brand-green selection:text-brand-navy">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min md:auto-rows-[150px]">
        
        {/* BENTO A: THE HERO IMAGE */}
        {/* Mobile: takes top spot, fixed height. Desktop: span 8 cols, 4 rows */}
        <div className="order-1 md:col-span-8 md:row-span-4 h-[400px] md:h-auto relative overflow-hidden rounded-3xl border border-white/10 group">
          <Image
            src="/car-asset.png" 
            alt="Premium Detailed Car"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Gradients for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent md:via-brand-navy/20" />
          
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="px-3 py-1 bg-brand-green text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
              EST. 2026
            </span>
          </div>
        </div>

        {/* BENTO B: THE HEADLINE */}
        {/* Mobile: full width, flex-start. Desktop: flex-end */}
        <div className="order-2 md:col-span-4 md:row-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-center md:justify-end">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter italic font-heading">
            ZILAS <br />
            <span className="text-brand-green">CENT.</span>
          </h1>
          <p className="mt-4 text-white/50 text-sm md:text-base leading-relaxed max-w-[280px] md:max-w-none">
            Precision-engineered reflections for the modern automotive enthusiast.
          </p>
        </div>

        {/* BENTO C: THE "TRUST" BOX */}
        {/* Mobile: Stacks naturally. Desktop: span 4 cols, 2 rows */}
        <div className="order-3 md:col-span-4 md:row-span-2 bg-brand-orange rounded-3xl p-6 md:p-8 flex flex-row md:flex-col justify-between items-center md:items-stretch">
          <div className="flex flex-row md:flex-col md:justify-between items-center md:items-start gap-4 md:gap-0">
            <div className="h-14 w-14 rounded-full border-2 border-white/30 flex items-center justify-center font-black text-xl">
              99%
            </div>
            <div className="md:mt-4">
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Gloss Meter</p>
              <p className="text-xl md:text-2xl font-black italic">CERTIFIED</p>
            </div>
          </div>
          <p className="hidden md:block text-[10px] font-bold uppercase tracking-widest leading-tight">
            Scientific Grade <br /> Polish Finish
          </p>
        </div>

        {/* BENTO D: SERVICES & CTA */}
        {/* Mobile: Stacks items vertically. Desktop: Horizontal row */}
        <div className="order-4 md:col-span-8 md:row-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 md:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 md:gap-0 hover:border-brand-green/30 transition-all duration-500">
          <div className="flex justify-between md:justify-start gap-0 md:gap-12">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mb-1">Service 01</p>
              <p className="text-base md:text-lg font-bold tracking-tight">Pro Polish</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10 my-auto" />
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mb-1 text-right md:text-left">Service 02</p>
              <p className="text-base md:text-lg font-bold tracking-tight text-right md:text-left">Boosters</p>
            </div>
          </div>
          
          <button className="w-full md:w-auto bg-brand-green text-brand-navy px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-glow">
            Book Service
          </button>
        </div>

      </div>
    </main>
  );
}