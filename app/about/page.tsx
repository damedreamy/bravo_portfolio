
import Image from "next/image";

export default function AboutMe() {
  return (
  
        
    <main id="about" className="min-h-screen text-gray-200 px-6 py-16 flex justify-center">

      <div className="max-w-5xl w-full space-y-16">

        {/* HEADER */}
        <section className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </section>

        {/* INTRO */}
        <section className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-5">

          <p>
            Hello World! I am{" "}
            <span className="text-pink-400 font-semibold">
              Rencess Dame Bravo
            </span>
            , a Full-Stack Developer based in the Philippines focused on building
            fast, scalable, and user-friendly web applications.
          </p>

          <p>
            I specialize in modern web technologies like{" "}
            <span className="text-pink-400">
              Next.js, TypeScript, and SQL
            </span>
            , creating clean interfaces and efficient backend systems.
          </p>

          <p>
            I also have experience in networking, system configuration, and foundational
            security practices including ethical hacking.
          </p>

          <p className="italic text-pink-300">
            Still learning. Still building. Always improving.
          </p>

        </section>

        {/* TECHNICAL SKILLS */}
        <section className="space-y-8">

          <h3 className="text-2xl font-semibold text-center text-white">
            My Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {/* FRONTEND */}
            <div className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-4 text-center">

              <h4 className="text-lg font-semibold text-white">
                Frontend
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "HTML/CSS",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "Next.js",
                  "Responsive Design",
                  "UI/UX Principles",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-pink-500/20 text-pink-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* BACKEND */}
            <div className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-4 text-center">

              <h4 className="text-lg font-semibold text-white">
                Backend
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Node.js",
                  "Python",
                  "PHP",
                  "REST APIs",
                  "Server-side Rendering",
                  "Authentication",
                  "Java",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-pink-500/20 text-pink-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>



          </div>
        </section>

        {/* OTHER SKILLS */}
        <section className="space-y-8">

          <h3 className="text-2xl font-semibold text-center text-white">
            Other Skills
          </h3>



          <div className="grid md:grid-cols-3 gap-6">


            {/* DATABASE */}
            <div className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-4 text-center">

              <h4 className="text-lg font-semibold text-white">
                Database
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {["MySQL", "Database Design"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-pink-500/20 text-pink-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* NETWORKING */}
            <div className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-4 text-center">

              <h4 className="text-lg font-semibold text-white">
                Networking
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Cisco Configuration",
                  "Network Troubleshooting",
                  "System Administration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-pink-500/20 text-pink-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

        

            {/* SECURITY */}
            <div className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-4 text-center">

              <h4 className="text-lg font-semibold text-white">
                Security
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Web Security Fundamentals",
                  "Ethical Hacking",
                  "Kali Linux",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-pink-500/20 text-pink-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-5">

          <p className="text-pink-500">
            Got a project in mind? Let’s make it happen.
          </p>

          <a
            href="/#contact"
            className="
              inline-block
              bg-pink-700/60 border border-pink-500
              px-6 py-3 rounded-xl text-white font-medium
              hover:bg-pink-700 transition shadow-md
            "
          >
            Contact Me
          </a>

        </section>

      </div>
    </main>

  );
}