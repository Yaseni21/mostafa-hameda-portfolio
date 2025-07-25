import React from 'react';

const projects = [
  {
    title: 'My Tutor App',
    date: 'Jun 2023 – Sep 2023',
    description:
      'A Flutter mobile app that helps students find and book tutors in the West Bank. Built with Firebase and real-time data features. Includes classification by subject and user rating system.',
    tech: ['Flutter', 'Firebase', 'Dart'],
  },
  {
    title: 'Car Rental Website',
    date: 'Jul 2022 – Sep 2022',
    description:
      'Developed a full-featured Laravel website that allows users to browse and rent cars, and gives administrators full control over listings and reservations via a secure dashboard.',
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-24 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-6 md:p-8 rounded-2xl border border-gray-700 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 italic mb-4">{project.date}</p>
            <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="text-sm px-3 py-1 rounded-full border border-gray-600 bg-gray-800 text-gray-200 hover:border-cyan-400 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
