import Image from "next/image";

export default function Hero() {
  return (
    <main id="hero" className="text-white">
      <section className="w-full min-h-screen py-24 bg-black relative overflow-hidden flex items-center">

        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-cyan-400 opacity-20 blur-[150px] rounded-full"></div>

        <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-16 relative z-10">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 max-w-[550px] animate-fadeIn">

            <h3 className="font-medium text-sm tracking-widest text-pink-400 uppercase">
              Welcome to My Portfolio ⚡
            </h3>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.7)]">
                Dame
              </span>
            </h1>

            <p className="text-gray-300 text-base leading-relaxed">
              Full Stack Developer · Mobile Developer · Database Designer · UI/UX Designer
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-4 flex-wrap">

              <a
                href="/#projects"
                className="
                  relative px-6 py-3 rounded-xl font-medium
                  bg-gradient-to-r from-purple-600 to-pink-500
                  hover:from-pink-500 hover:to-purple-600
                  transition-all duration-300
                  shadow-[0_0_20px_rgba(168,85,247,0.6)]
                  hover:shadow-[0_0_30px_rgba(236,72,153,0.9)]
                "
              >
                See my Projects
              </a>

              <a
                href="/DAME'S_CV.pdf"
                download
                className="
                  px-6 py-3 rounded-xl font-medium
                  border border-white/20
                  backdrop-blur-md bg-white/5
                  hover:bg-white/10
                  transition-all duration-300
                  shadow-[0_0_15px_rgba(255,255,255,0.2)]
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                "
              >
                Download CV
              </a>

            </div>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="relative animate-fadeUp w-[220px] md:w-[340px] flex justify-center">

  
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 blur-2xl opacity-60 animate-pulse"></div>

            <Image
              src="/Bravo.jpg"
              width={420}
              height={420}
              alt="Dame's Profile"
              className="
                relative z-10 rounded-full object-cover
                border border-white/20
                shadow-[0_0_40px_rgba(236,72,153,0.6)]
                transition-transform duration-500 hover:scale-105
              "
            />
          </div>

        </div>
      </section>
    </main>
  );
}