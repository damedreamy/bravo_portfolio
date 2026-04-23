"use client";

import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="min-h-screen px-6 md:px-20 py-24 bg-black text-white relative overflow-hidden">

      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-pink-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-cyan-400/20 blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            A collection of projects showcasing my skills in development, design, and problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[

            {
              title: "My First Portfolio",
              img: "/myPortfolio.jpg",
              desc: "A responsive portfolio built with Next.js and Tailwind CSS.",
              tech: "Next.js, Tailwind",
              problem: "Lacked experience structuring a full responsive site.",
              solution: "Built modular components with responsive layouts.",
              link: "https://bravo-nextjs-portfolio-h6mrsg0lc.vercel.app/",
            },

            {
              title: "Grocery Cart App",
              img: "/groceryApp.jpg",
              desc: "A mobile app for managing grocery lists.",
              tech: "Flutter, Firebase",
              problem: "Firebase integration issues for real-time syncing.",
              solution: "Implemented real-time database structure properly.",
              link: "https://flutlab.io/editor/9c5e9a06-0449-42ac-8f06-1cb2fc5532e9",
            },

            {
              title: "Cignal Database Project",
              img: "/cignaldb.jpg",
              desc: "SQL database design for a company system.",
              tech: "MySQL, SSMS",
              problem: "Data redundancy due to poor normalization.",
              solution: "Refactored schema using normalization principles.",
              link: "#",
            },

            {
              title: "Focus Planner App",
              img: "/focusPlannerApp.jpg",
              desc: "UI design for a productivity planner app.",
              tech: "Figma",
              problem: "Complex task flow design.",
              solution: "Simplified UX using clean hierarchy in Figma.",
              link: "https://github.com/damedreamy/Focus-Planner-Application.git",
            },

            {
              title: "Ghostly Adventure Game",
              img: "/mazeGame.jpg",
              desc: "A Python-based maze adventure game.",
              tech: "Python",
              problem: "Movement and collision logic bugs.",
              solution: "Debugged core game loop and collision system.",
              link: "https://github.com/damedreamy/Ghostly-Adventure-Game.git",
            },

          ].map((project, i) => (
            <div
              key={i}
              className="
                group relative bg-white/5 backdrop-blur-md
                border border-white/10 rounded-2xl overflow-hidden
                hover:scale-[1.02] transition duration-300
                hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]
              "
            >

              {/* IMAGE */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">

                <h3 className="text-xl font-semibold text-pink-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {project.desc}
                </p>

                <p className="text-xs text-cyan-300">
                  {project.tech}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="
                    mt-3 px-4 py-2 rounded-xl font-medium
                    bg-gradient-to-r from-pink-500 to-purple-600
                    hover:from-purple-600 hover:to-pink-500
                    transition
                    shadow-[0_0_15px_rgba(236,72,153,0.4)]
                  "
                >
                  Read More
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>


      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl max-w-lg w-full relative shadow-[0_0_40px_rgba(236,72,153,0.25)]">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-pink-400 mb-3">
              {selectedProject.title}
            </h2>

            <p className="text-gray-300 mb-4">
              {selectedProject.desc}
            </p>

            <p className="text-sm text-gray-400 mb-2">
              <span className="text-white font-semibold">Problem:</span>{" "}
              {selectedProject.problem}
            </p>

            <p className="text-sm text-gray-400 mb-4">
              <span className="text-white font-semibold">Solution:</span>{" "}
              {selectedProject.solution}
            </p>

            <p className="text-sm text-cyan-300 mb-6">
              Tech: {selectedProject.tech}
            </p>

            <a
              href={selectedProject.link}
              target="_blank"
              className="
                inline-block px-5 py-2 rounded-xl font-medium
                bg-gradient-to-r from-cyan-400 to-pink-500
                hover:from-pink-500 hover:to-cyan-400
                transition
                shadow-[0_0_20px_rgba(34,211,238,0.4)]
              "
            >
              View Project
            </a>
          </div>
        </div>
      )}

    </main>
  );
}