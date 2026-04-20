"use client";

import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main
      id="projects"
      className="min-h-screen px-6 md:px-20 py-20 text-white"
    >

      <div className="max-w-4xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          My Projects
        </h2>
        <p className="text-gray-300">
          Here are some of the projects I’ve worked on.
        </p>
      </div>


      <div className="grid md:grid-cols-2 gap-8">

        {/* PROJECT 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition">

          <div className="relative w-full h-52">
            <Image
              src="/myPortfolio.jpg"
              alt="My First Portfolio"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5 space-y-3">
            <h3 className="text-xl font-semibold text-blue-400">
              My First Portfolio
            </h3>

            <p className="text-gray-300 text-sm">
              A responsive portfolio website built with Next.js and Tailwind CSS.
            </p>

            <p className="text-xs text-gray-400">
              Languages: Next.js, Tailwind
            </p>

            <button
              onClick={() =>
                setSelectedProject({
                  title: "My First Portfolio",
                  description:
                    "A responsive portfolio website built with Next.js and Tailwind CSS.",
                  problem: "Needed a personal website to showcase skills.",
                  solution:
                    "Built using Next.js and Tailwind with responsive design.",
                  tech: "Next.js, Tailwind",
                  link:
                    "https://bravo-nextjs-portfolio-h6mrsg0lc.vercel.app/",
                })
              }
              className="mt-3 bg-pink-600 px-4 py-2 rounded hover:bg-pink-700"
            >
              Read More
            </button>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition">

          <div className="relative w-full h-52">
            <Image
              src="/groceryApp.jpg"
              alt="Grocery App"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5 space-y-3">
            <h3 className="text-xl font-semibold text-blue-400">
              Grocery Cart App
            </h3>

            <p className="text-gray-300 text-sm">
              A mobile app for managing grocery lists.
            </p>

            <p className="text-xs text-gray-400">
              Flutter, Firebase
            </p>

            <button
              onClick={() =>
                setSelectedProject({
                  title: "Grocery Cart App",
                  description:
                    "A mobile app for managing grocery lists.",
                  problem: "Needed a simple grocery list manager.",
                  solution: "Built using Flutter and Firebase.",
                  tech: "Flutter, Firebase",
                  link:
                    "https://flutlab.io/editor/9c5e9a06-0449-42ac-8f06-1cb2fc5532e9",
                })
              }
              className="mt-3 bg-pink-600 px-4 py-2 rounded hover:bg-pink-700"
            >
              Read More
            </button>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition">

          <div className="relative w-full h-52">
            <Image
              src="/cignaldb.jpg"
              alt="Database Project"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5 space-y-3">
            <h3 className="text-xl font-semibold text-blue-400">
              Cignal Database Project
            </h3>

            <p className="text-gray-300 text-sm">
              A SQL database design and implementation project for a company.
            </p>

            <p className="text-xs text-gray-400">
              MySQL, SQL Server Management Studio
            </p>

            <button
              onClick={() =>
                setSelectedProject({
                  title: "Cignal Database Project",
                  description:
                    "A SQL database design and implementation project for a company.",
                  problem: "Needed a robust database solution.",
                  solution:
                    "Designed and implemented using MySQL and SQL Server Management Studio.",
                  tech: "MySQL, SQL Server Management Studio",
                  link: "#",
                })
              }
              className="mt-3 bg-pink-600 px-4 py-2 rounded hover:bg-pink-700"
            >
              Read More
            </button>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition">

          <div className="relative w-full h-52">
            <Image
              src="/mazeGame.jpg"
              alt="Maze Game"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5 space-y-3">
            <h3 className="text-xl font-semibold text-blue-400">
              Ghostly Adventure Game
            </h3>

            <p className="text-gray-300 text-sm">
              A simple Python console-based maze game.
            </p>

            <p className="text-xs text-gray-400">
              Python
            </p>

            <button
              onClick={() =>
                setSelectedProject({
                  title: "Ghostly Adventure Game",
                  description:
                    "A simple Python console-based maze game.",
                  problem: "Needed a fun and engaging game for users.",
                  solution:
                    "Built using Python and simple game logic.",
                  tech: "Python",
                  link:
                    "https://github.com/damedreamy/Ghostly-Adventure-Game.git",
                })
              }
              className="mt-3 bg-pink-600 px-4 py-2 rounded hover:bg-pink-700"
            >
              Read More
            </button>
          </div>
        </div>

      </div>


      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-lg w-full relative">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-blue-400 mb-2">
              {selectedProject.title}
            </h2>

            <p className="text-gray-300 mb-3">
              {selectedProject.description}
            </p>

            <p className="text-sm text-gray-400 mb-2">
              <strong>Problem:</strong> {selectedProject.problem}
            </p>

            <p className="text-sm text-gray-400 mb-2">
              <strong>Solution:</strong> {selectedProject.solution}
            </p>

            <p className="text-sm text-gray-400 mb-4">
              <strong>Tech:</strong> {selectedProject.tech}
            </p>

            <a
              href={selectedProject.link}
              target="_blank"
              className="inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        </div>
      )}

      
    </main>
  );
}