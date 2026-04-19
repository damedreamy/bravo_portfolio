import Image from 'next/image';

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-[#0f0f14] text-gray-200 px-6 py-12 flex justify-center">
      <div className="max-w-4xl w-full space-y-10">

        {/* Header */}
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-pink-500">
            So, who am I?
          </h2>

          <div className="flex justify-center">
            <Image
              src="/Bravo.jpg"
              alt="Rencess Dame Bravo"
              width={180}
              height={180}
              className="rounded-full border-4 border-pink-500 shadow-lg shadow-pink-500/30"
            />
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-4">
          <p>
            Hello World! I am <span className="text-pink-400 font-semibold">Rencess Dame Bravo</span>, a Full-Stack Developer focused
            on building fast, scalable, and user-friendly web applications.
          </p>

          <p>
            I specialize in modern web technologies like <span className="text-pink-400">Next.js JavaScript/TypeScript, and SQL.</span>,
            I create clean, responsive interfaces and design efficient backend systems.
          </p>

          <p>
            I also have experience in networking, system configuration, and foundational security practices including ethical hacking.
          </p>

          <p className="italic text-pink-300">
            Still learning. Still building. Always improving.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-6">
          <h3 className="text-2xl font-semibold text-pink-500">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <h4 className="text-pink-400 font-semibold mb-2">Frontend</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>HTML, CSS, JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>Next.js, React</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>

            <div>
              <h4 className="text-pink-400 font-semibold mb-2">Backend</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>Server-Side Rendering</li>
              </ul>
            </div>

            <div>
              <h4 className="text-pink-400 font-semibold mb-2">Database</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>MySQL / PostgreSQL</li>
                <li>Database Design</li>
                <li>Supabase</li>
              </ul>
            </div>

            <div>
              <h4 className="text-pink-400 font-semibold mb-2">Tools</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>Cloudflare Pages</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Skills */}
        <section className="bg-[#1a1a22] p-6 rounded-2xl shadow-md shadow-pink-500/10 space-y-6">
          <h3 className="text-2xl font-semibold text-pink-500">
            Other Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <h4 className="text-pink-400 font-semibold mb-2">
                Networking & Systems
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Cisco Configuration</li>
                <li>Network Troubleshooting</li>
                <li>System Administration</li>
              </ul>
            </div>

            <div>
              <h4 className="text-pink-400 font-semibold mb-2">
                Security
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Web Security Fundamentals</li>
                <li>Ethical Hacking Basics</li>
                <li>Kali Linux</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}