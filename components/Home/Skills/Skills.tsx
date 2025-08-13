'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { FaAws } from 'react-icons/fa';
import { BiBarChart } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import {
  SiPython, SiReact, SiNodedotjs,
  SiTableau, SiPytorch, SiScikitlearn, SiHuggingface, SiApacheairflow,
  SiGooglecloud, SiDocker, SiGithubactions, SiLinux, SiOpenai,
  SiMongodb, SiMysql, SiAmazons3, SiApachekafka,
  SiJupyter, SiGooglecolab, SiSqlite
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });

// — Focus: only skills used across Harish's projects and core stack —
const skills = [
  { id: 'python', name: 'Python', icon: <SiPython /> },
  { id: 'sql', name: 'SQL', icon: <TbSql /> },
  { id: 'pytorch', name: 'PyTorch', icon: <SiPytorch /> },
  { id: 'sklearn', name: 'scikit-learn', icon: <SiScikitlearn /> },
  { id: 'huggingface', name: 'Transformers (HF)', icon: <SiHuggingface /> },
  { id: 'airflow', name: 'Apache Airflow', icon: <SiApacheairflow /> },
  { id: 'aws', name: 'AWS', icon: <FaAws /> },
  { id: 'gcp', name: 'GCP', icon: <SiGooglecloud /> },
  { id: 'docker', name: 'Docker', icon: <SiDocker /> },
  { id: 'linux', name: 'Linux / Shell', icon: <SiLinux /> },
  { id: 'react', name: 'React (UI)', icon: <SiReact /> },
  { id: 'node', name: 'Node.js (APIs)', icon: <SiNodedotjs /> },
];

const tools = [
  { id: 'mysql', name: 'MySQL', icon: <SiMysql /> },
  { id: 'sqlserver', name: 'SQL Server', icon: <DiMsqlServer /> },
  { id: 'sqlite', name: 'SQLite', icon: <SiSqlite /> },
  { id: 'mongodb', name: 'MongoDB', icon: <SiMongodb /> },
  { id: 's3', name: 'Amazon S3', icon: <SiAmazons3 /> },
  { id: 'kafka', name: 'Apache Kafka', icon: <SiApachekafka /> },
  { id: 'tableau', name: 'Tableau', icon: <SiTableau /> },
  { id: 'powerbi', name: 'Power BI', icon: <BiBarChart /> },
  { id: 'gha', name: 'GitHub Actions', icon: <SiGithubactions /> },
  { id: 'jupyter', name: 'Jupyter Notebook', icon: <SiJupyter /> },
  { id: 'colab', name: 'Google Colab', icon: <SiGooglecolab /> },
  
  { id: 'openai', name: 'OpenAI API', icon: <SiOpenai /> },
];

function Tile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="h-40 w-full rounded-3xl bg-white/5 backdrop-blur-sm
                    flex flex-col items-center justify-center text-center
                    shadow-lg transition-transform duration-200">
      <div className="mb-4 text-4xl sm:text-5xl text-gray-300">{icon}</div>
      <p className="px-2 text-cyan-300 text-sm font-medium leading-snug">{label}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h1 className="text-white text-center text-2xl md:text-4xl xl:text-5xl font-bold">
          My <span className="text-cyan-300">Data · ML · AI</span> Stack
        </h1>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s) => (
            <Tilt
              key={s.id}
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              scale={1.06}
              transitionSpeed={400}
              glareEnable
              glareMaxOpacity={0.12}
              glareColor="#22d3ee"
              glareBorderRadius="24px"
              gyroscope
              className="will-change-transform"
            >
              <Tile icon={s.icon} label={s.name} />
            </Tilt>
          ))}
        </div>

        <h2 className="mt-20 text-white text-center text-2xl md:text-4xl xl:text-5xl font-bold">
          Tools I <span className="text-cyan-300">Use</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((t) => (
            <Tilt
              key={t.id}
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              scale={1.06}
              transitionSpeed={400}
              glareEnable
              glareMaxOpacity={0.12}
              glareColor="#22d3ee"
              glareBorderRadius="24px"
              gyroscope
              className="will-change-transform"
            >
              <Tile icon={t.icon} label={t.name} />
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
