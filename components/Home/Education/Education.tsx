"use client";

import Image from "next/image";
import { HiOutlineCalendarDays, HiOutlineMapPin } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import React from "react";
import ParticleBackground from "../Hero/ParticleBackground";

type Edu = {
  school: string;
  degree: string;
  period: string;
  location: string;
  logo: string; // e.g. "/images/neu.png"
  website: string;
  bullets: string[];
};

const EDUCATION: Edu[] = [
  {
    school: "Northeastern University",
    degree: "M.S. in Data Analytics Engineering (GPA: 3.81/4.00)",
    period: "Sep 2024 – May 2026",
    location: "Boston, MA, USA",
    logo: "/images/NEULOGO.png",
    website: "https://www.northeastern.edu/",
    bullets: [
      "Coursework: Foundations of Data Analytics, Data Management for Analytics, Computation & Visualization, Data Mining in Engineering, Large Language Models.",
      "Built batch & streaming data pipelines with Airflow/AWS Glue and modeled data in PostgreSQL/Redshift.",
      "Applied ML for NL2SQL, predictive analytics, and dashboarding in Python (Pandas, scikit‑learn) and Tableau/Power BI.",
    ],
  },
  {
    school: "Anna University",
    degree: "B.E. in Mechanical Engineering (GPA: 8.21/10.00)",
    period: "Aug 2018 – Apr 2022",
    location: "Chennai, TN, India",
    logo: "/images/AnnaUniLogo.png",
    website: "https://www.annauniv.edu/",
    bullets: [
      "Coursework: Python Programming, Statistics & Numerical Methods; foundations in data analysis and computation.",
      "Hands‑on projects emphasizing problem solving, quantitative analysis, and technical communication.",
      "Transitioned interests toward data engineering and ML applications through electives and projects.",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-16 md:py-24">
      {/* Optional background effect */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <ParticleBackground />
      </div>

      <div className="relative mx-auto w-[90%] max-w-7xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-white md:mb-14 md:text-5xl">
          Degrees <span className="text-cyan-400">Received</span>
        </h2>

        <div className="space-y-8 md:space-y-10">
          {EDUCATION.map((edu) => (
            <article key={edu.school} className="flex items-stretch gap-4 sm:gap-6">
              {/* Logo (left) */}
              <div className="shrink-0">
                <div className="relative h-20 w-20 rounded-full bg-white/10 p-2 ring-2 ring-white/10 transition-transform duration-200 hover:-translate-y-1 active:-translate-y-2 sm:h-24 sm:w-24 md:h-28 md:w-28 shadow-[0_10px_30px_rgba(34,211,238,0.25)]">
                  <Image
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Card (right) */}
              <div className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 active:-translate-y-2 focus-within:ring-2 focus-within:ring-cyan-400/50">
                {/* Header bar in cyan/blue gradient */}
                <div className="flex items-start justify-between rounded-t-2xl bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-3 text-white md:px-6 md:py-4">
                  <div className="pr-4">
                    <h3 className="text-base font-semibold sm:text-lg md:text-xl">{edu.school}</h3>
                    <p className="text-xs text-blue-100 sm:text-sm md:text-base">{edu.degree}</p>
                  </div>
                  <div className="mt-1 shrink-0 text-xs text-blue-100 sm:text-sm">
                    <div className="flex items-center gap-2">
                      <HiOutlineCalendarDays className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <HiOutlineMapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 px-4 py-5 md:px-6">
                  {edu.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-200">
                      <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                      <p className="text-sm leading-relaxed md:text-[15px]">{b}</p>
                    </li>
                  ))}
                </ul>

                {/* CTA button in blue */}
                <div className="flex justify-end px-4 pb-5 md:px-6">
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-800 hover:shadow-lg hover:shadow-cyan-500/20 active:translate-y-px active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    aria-label={`Visit ${edu.school} website`}
                  >
                    Visit Website
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* subtle cyan hover ring */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-cyan-400/30" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
