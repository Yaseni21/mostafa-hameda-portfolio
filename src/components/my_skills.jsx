const skills = [
  { name: "Dart" },
  { name: "Flutter" },
  { name: "Firebase" },
  { name: "JavaScript" },
  { name: "Laravel" },
  { name: "MySQL" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-24 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="w-28 h-24 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-gray-700 border border-gray-600 shadow-xl text-white font-semibold text-md hover:scale-105 hover:border-cyan-400 transition duration-300"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
