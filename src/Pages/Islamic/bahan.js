function Sample() {
  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <div className="mx-auto max-w-[850px] px-4 pb-6 pt-6 text-lg sm:px-12 md:px-16">






        {/* atas */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex items-center justify-between gap-5 bg-zinc-800 px-5 text-base sm:px-5 py-1">
            <div className="relative block sm:hidden">
                <button type="button" className="flex items-center gap-2 py-3 text-sm transition-colors hover:text-zinc-300 sm:hidden sm:text-base" onClick={() => window.history.back()}>
                    <i class="ri-arrow-left-line"></i>Jadwal Sholat
                </button>
            </div>
        </div>
                
                
         {/* bawah */}
        <div className="bg-transparent p-4 mt-6 rounded-lg border border-zinc-500/50 shadow-lg w-full flex items-center justify-center text-center">
            <p className="text-[17px] text-zinc-300 flex items-center gap-2">
                <i className="ri-hand-heart-line"></i> Dukung kami untuk terus berkembang
            </p>
        </div>










      </div>
    </div>
  );
}

export default Sample;