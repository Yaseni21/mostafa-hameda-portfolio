const experiences = [
  {
    title: "Flutter Developer (Full-time)",
    company: "Al-Andalus, Ramallah",
    period: "Aug 2023 – Present",
    details: [
      "Developed Android, Web, and Desktop apps using Flutter.",
      "Worked with Firebase, MVC/MVVM, and Business Intelligence systems.",
    ],
  },
  {
    title: "Full-Stack Intern",
    company: "Ivas Communications",
    period: "Jul 2022 – Sep 2022",
    details: [
      "Built a car rental website using Laravel and Bootstrap.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#111] text-white px-6 md:px-24 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-4 border-white pl-6">
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400 italic">{exp.company} — {exp.period}</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              {exp.details.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
