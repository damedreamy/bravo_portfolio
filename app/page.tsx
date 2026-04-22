import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#1a0b2e] to-[#020617] text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h3 className="text-sm tracking-wide text-pink-400">
            Welcome to my portfolio!
          </h3>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, my name’s{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Rencess
            </span>
            .
          </h1>

          <p className="text-gray-300">
            Web Developer · Mobile App Developer · Dat  abase Designer · UI/UX
            Designer · Network Administrator · Ethical Hacker
          </p>


          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
              hover:opacity-90 transition shadow-lg shadow-purple-500/30"
            >
              Download CV
            </a>

            <a
              href="/projects"
              className="px-6 py-3 rounded-full border border-purple-400 text-purple-300 
              hover:bg-purple-500/10 transition"
            >
              View Projects →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Glow ring */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-30"></div>

          <div className="relative rounded-2xl p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            <div className="bg-[#020617] rounded-2xl p-2">
              <Image
                src="/Bravo.jpg"
                alt="Rencess' Profile Photo"
                width={300}
                height={300}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}