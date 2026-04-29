import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";

export default function Hero() {
  return (
    <main id="hero" className="text-white">

      <Vortex className="min-h-screen flex items-center justify-center px-6">

<section className="w-full max-w-[1250px] flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
          {/* LEFT CONTENT */}
          <div className="relative max-w-[550px]">

            {/* GLASS BACKGROUND */}
<div className="absolute inset-0 -m-6 rounded-3xl bg-black/20 backdrop-blur-md">


  <div className="pointer-events-none absolute inset-0 rounded-3xl p-[1px] 
    bg-gradient-to-r from-transparent via-white/10 to-transparent 
    [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] 
    [mask-composite:exclude]">
  </div>

</div>
            {/* CONTENT ON TOP */}
            <div className="relative flex flex-col gap-6 p-6 md:p-10">

              <h3 className="font-medium text-sm tracking-widest uppercase text-cyan-400 drop-shadow-[0_0_8px_#00f5ff]">
                Welcome to My Portfolio ⚡
              </h3>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Dame
                </span>
              </h1>

              <p className="text-gray-300">
                Full Stack Developer · Mobile Developer · Database Designer · UI/UX Designer
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-4 flex-wrap">

                <a
                  href="/#projects"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 
                  shadow-[0_0_15px_rgba(0,255,255,0.6)] 
                  hover:shadow-[0_0_30px_rgba(0,255,255,1)] 
                  transition duration-300"
                >
                  See my Projects
                </a>

                <a
                  href="/DAME'S_CV.pdf"
                  download
                  className="px-6 py-3 rounded-xl border border-cyan-400 
                  shadow-[0_0_10px_rgba(0,255,255,0.4)] 
                  hover:shadow-[0_0_25px_rgba(0,255,255,0.9)] 
                  hover:bg-cyan-400/10 transition duration-300"
                >
                  Download CV
                </a>

              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-[220px] md:w-[340px] flex justify-center">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-60"></div>

            <div className="absolute inset-2 rounded-full border border-white/10 backdrop-blur-md"></div>

            <Image
              src="/Bravo.jpg"
              width={420}
              height={420}
              alt="Profile"
              className="relative z-10 rounded-full object-cover border border-white/10"
            />
          </div>

        </section>

      </Vortex>

    </main>
  );
}