export default function BlogSection() {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
          <i className="ri-article-fill"></i> Latest Articles
        </h2>
        <a href="/frontdev/blogs" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          View more
        </a>
      </div>

      {/* Single Blog Card (Full Width) */}
      <div className="w-full mt-5">
        <div className="border border-gray-200 bg-white p-5 rounded-xl">
          <div className="flex flex-col sm:flex-row justify-between gap-5">
            {/* Left Side (Icon + Info) */}
            <div className="flex gap-3">
              <div className="mt-1">
                <a href="/frontdev/writings/tailwind-ui-is-now-tailwind-plus" className="text-lg text-gray-800 font-black flex gap-2">
                  Tailwind UI is now Tailwind Plus
                </a>
                <ul className="text-zinc-400 flex items-center gap-2 text-sm">
                  <li>2 min read</li>
                  <div className="bg-zinc-400 rounded-full h-[3px] w-[3px] aspect-square"></div>
                  <li>28 Jan 2025</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}