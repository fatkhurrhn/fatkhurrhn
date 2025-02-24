
export default function Navbar() {
    return (
        <>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex items-center justify-between gap-5 bg-zinc-800 px-5 text-base sm:px-5 py-1">
                <div className="relative block sm:hidden">
                    <button type="button" className="flex items-center gap-2 py-3 text-sm transition-colors hover:text-zinc-300 sm:hidden sm:text-base" onClick={() => window.history.back()}>
                        <i class="ri-arrow-left-line"></i>Jadwal Sholat
                    </button>
                </div>
            </div>
        </>
    );
}
