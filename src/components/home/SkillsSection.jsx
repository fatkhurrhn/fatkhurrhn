export default function SkillsSection() {
  return (
    <div>
      <h2 className="text-[18px] font-bold text-gray-800 mb-4 flex items-center gap-2">
        <i className="ri-code-s-slash-line"></i> Skills & Technologies
      </h2>
      <div className="max-w-4xl text-center mb-10">
        <ul className="flex flex-wrap justify-center gap-2 text-lg list-none p-0">
          {['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS',
            'Bootstrap', 'Git/Github', 'Canva', 'Figma', 'Capcut'].map(skill => (
              <li
                key={skill}
                className="bg-white text-gray-700 border border-gray-200 rounded-lg py-1 px-4 hover:bg-gray-50 transition-colors shadow-sm"
              >
                {skill}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}