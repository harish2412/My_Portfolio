"use client";
import dynamic from "next/dynamic";
import React from "react";

const ParticleBackground = dynamic(
  () => import("../Hero/ParticleBackground"),
  { ssr: false }
);

const About = () => {
  const features = [
    {
      title: "Data Engineering at Scale",
      emoji: "⚡",
      summary:
        "Designing real-time & batch pipelines with Airflow, AWS Glue, and distributed systems.",
    },
    {
      title: "Machine Learning Engineering",
      emoji: "🧠",
      summary:
        "Building and deploying ML models, from feature engineering to production inference.",
    },
    {
      title: "AI Systems & Analytics",
      emoji: "🤖",
      summary:
        "Leveraging AI to solve business problems—predictive analytics, NLP, and automation.",
    },
  ];


  return (
    <section id="About" className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <ParticleBackground />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-4 inline-block rounded bg-blue-600/20 px-3 py-1 text-xs font-semibold tracking-widest text-blue-300">
              ABOUT ME
            </span>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Engineering robust data & AI solutions for real-world impact
              </span>{" "}
              🚀
            </h2>

            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              Hi, I’m <span className="font-semibold text-white">Harish Padmanabhan</span> — a
              <span className="font-semibold text-cyan-300"> Data Engineer</span>,
              <span className="font-semibold text-cyan-300"> Machine Learning Engineer</span>, and
              aspiring <span className="font-semibold text-cyan-300">AI Engineer</span>. As an
              <span className="font-semibold text-white"> M.S. Data Analytics Engineering </span>
              student at Northeastern University (’26), I design scalable data architectures,
              develop machine learning models, and integrate AI-driven solutions into production.
              My toolkit includes <span className="font-semibold text-cyan-300">Airflow</span>,
              <span className="font-semibold text-cyan-300"> AWS</span>,
              <span className="font-semibold text-cyan-300"> SQL/NoSQL</span>, and
              <span className="font-semibold text-cyan-300"> Python ML frameworks</span>. I’m
              passionate about building pipelines, predictive systems, and AI applications that
              deliver measurable results.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <button
                  key={f.title}
                  type="button"
                  className="group relative select-none text-left cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-200 will-change-transform hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 active:-translate-y-2 active:border-cyan-400/60 active:shadow-xl active:shadow-cyan-500/20 active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-cyan-400/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-active:opacity-100" />
                  <div className="flex items-start gap-3">
                    <span className="text-lg">{f.emoji}</span>
                    <div>
                      <p className="font-semibold text-white">{f.title}</p>
                      <p className="mt-1 text-sm text-slate-200">{f.summary}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:padmanabhan.h@northeastern.edu"
                className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-500/30"
              >
                padmanabhan.h@northeastern.edu
              </a>
              <a
                href="https://www.linkedin.com/in/hp24"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 hover:bg-blue-500/30"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/harish2412"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/20"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="order-first justify-self-center md:order-none md:justify-self-end">
            <div className="relative h-56 w-56 rounded-full border-4 border-blue-600/40 bg-blue-500/10 md:h-64 md:w-64 lg:h-72 lg:w-72">
              <img
                src="/images/AboutMyPic.jpg"
                alt="Harish Padmanabhan portrait"
                className="h-full w-full rounded-full object-cover"
              />
              <div className="absolute -inset-1 -z-10 rounded-full bg-blue-500/20 blur-2xl" />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-300">
              <span className="rounded-full bg-white/5 px-2 py-1">
                Northeastern University — MS DAE ’26
              </span>
              <span className="hidden rounded-full bg-white/5 px-2 py-1 md:inline">
                Boston, MA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
