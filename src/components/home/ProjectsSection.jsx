export default function ProjectsSection() {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
          <i className="ri-tools-fill"></i> Featured Projects
        </h2>
        <a href="/projects" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          View more
        </a>
      </div> <br />
      <div className="grid gap-2">
        <div className="border border-gray-200 bg-white rounded-xl sm:flex items-center transition-all hover:shadow-md">
          <div className="p-2">
            <img
              src="/assets/thumbnail01.png"
              alt="Personal Website Mockup"
              width={500}
              height={100}
              className="border border-gray-200 rounded-lg"
            />
          </div>
          <div className="p-3 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-[18px] text-gray-800 font-black">Personal Website</h1>
              <a
                target="_blank"
                href="https://fatkhurrhn.vercel.app/"
                className="border border-gray-200 bg-white hover:bg-gray-100 duration-200 px-5 py-2 flex items-center rounded-lg text-gray-800 gap-2"
              >
                <i className="ri-a-m" /> Preview
              </a>
            </div>
            <hr className="border-1 border-gray-200 border-dashed my-3" />
            <div className="flex items-center gap-5">
              <ul className="flex gap-2">
                <li className="text-sm bg-white border border-gray-200 rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                  # JavaScript
                </li>
                <li className="text-sm bg-white border border-gray-200 rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                  # Tailwindv3
                </li>
                <li className="text-sm bg-white border border-gray-200 rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                  # ReactJS
                </li>
              </ul>
            </div>
            <hr className="border-1 border-gray-200 border-dashed my-3 text-justify" />
            <p className="text-gray-800">
              Personal portfolio built with React.js and Tailwind, showcasing my skills, projects, and experience in front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}