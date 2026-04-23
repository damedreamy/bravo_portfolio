"use client";

export default function Contact() {
  return (
    <main className="min-h-screen px-6 md:px-20 py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-pink-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-cyan-400/20 blur-[150px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Want to collaborate, build something amazing, or just say hello?  
            I’m always open to opportunities and ideas.
          </p>
        </div>

        {/* FORM CARD */}
        <form
          className="
            max-w-2xl mx-auto space-y-5
            bg-white/5 backdrop-blur-md
            border border-white/10
            p-8 rounded-2xl
            shadow-[0_0_30px_rgba(236,72,153,0.15)]
          "
        >

          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full p-3 rounded-xl
              bg-black/40 border border-white/10
              focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40
              outline-none transition
            "
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
              w-full p-3 rounded-xl
              bg-black/40 border border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40
              outline-none transition
            "
          />

          <input
            type="text"
            placeholder="Subject"
            className="
              w-full p-3 rounded-xl
              bg-black/40 border border-white/10
              focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40
              outline-none transition
            "
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="
              w-full p-3 rounded-xl
              bg-black/40 border border-white/10
              focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40
              outline-none transition resize-none
            "
          />

          <button
            type="submit"
            className="
              w-full py-3 rounded-xl font-medium
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:from-purple-600 hover:to-pink-500
              transition
              shadow-[0_0_25px_rgba(236,72,153,0.5)]
              hover:shadow-[0_0_35px_rgba(168,85,247,0.8)]
            "
          >
            Send Message ⚡
          </button>

        </form>

        {/* GET IN TOUCH PANEL */}
        <div className="max-w-2xl mx-auto text-center space-y-6">

          <h2 className="text-2xl font-semibold text-white">
            Get in Touch
          </h2>

          <p className="text-gray-400">
            You can also reach me through these platforms:
          </p>

          <div className="flex justify-center gap-6 flex-wrap text-sm">

            <a
              href="https://www.linkedin.com/in/rencess-dame-bravo-085337404/"
              target="_blank"
              className="text-cyan-300 hover:text-cyan-400 transition"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://github.com/damedreamy"
              target="_blank"
              className="text-pink-300 hover:text-pink-400 transition"
            >
              🔗 GitHub
            </a>

            <a
              href="mailto:rencessdame18@gmail.com"
              className="text-purple-300 hover:text-purple-400 transition"
            >
              📧 Email
            </a>

          </div>
        </div>

      </div>
    </main>
  );
}