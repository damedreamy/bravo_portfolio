import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div>
        <h3>Welcome to my portfolio!</h3>
        <h1>Hello, my name's Rencess.</h1>

        <p>
          Web Developer · Mobile App Developer · Database Designer · UI/UX Designer · Network Administrator
        </p>

        <p>
          Skilled in web development, networking, and database management.
          Experienced with Next.js, SQL, web and app development, Cisco configuration,
          modern UI design, and ethical hacking.
        </p>

        <div>
          <a href="/cv.pdf" download>
            Download CV
          </a>
        </div>

        <div>
          <a href="/projects">
            View Projects
          </a>
        </div>
      </div>

      <div>
        <Image
          src="/Bravo.jpg"
          alt="Rencess' Profile Photo"
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  );
}