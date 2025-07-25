import React from 'react';

const contactInfo = [
  {
    type: 'LinkedIn',
    value: 'Mostafa Hameda',
    link: 'https://www.linkedin.com/in/mostafa-hameda-25467a239/',
  },
  {
    type: 'E-mail',
    value: 'mostafaxd12@gmail.com',
    link: 'mailto:mostafaxd12@gmail.com',
  },
  {
    type: 'Phone',
    value: '+972-598893219',
    link: 'tel:+972598893219',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-24 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
      <div className="space-y-6 max-w-xl mx-auto">
        {contactInfo.map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-6 md:p-8 rounded-2xl border border-gray-700 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.type}</h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline break-words"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
