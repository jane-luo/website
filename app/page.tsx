import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-3xl">
          Hi, I'm
        </div>

        <div className="text-jyiBlue text-6xl font-bold">
          Jane Luo
        </div>

        <div className="text-3xl">
          Software Engineer <span className="text-jyiBlue">@</span> Meta
        </div>

        <div className="pt-2 flex gap-6 items-center flex-col sm:flex-row">
          {/* TODO: ADD RESUME */}
          <a href="">
            <Image
              aria-hidden
              src="/resume.svg"
              alt="Resume icon"
              width={50}
              height={50}
            />
          </a>

          <a href="https://www.linkedin.com/in/itsjaneluo/" target="_blank">
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={50}
              height={50}
            />
          </a>

          <a href="https://github.com/jane-luo" target="_blank">
            <Image
              aria-hidden
              src="/github.svg"
              alt="Github icon"
              width={50}
              height={50}
            />
          </a>
          
          <a href="mailto:j.luo1430@gmail.com" target="_blank">
            <Image
              aria-hidden
              src="/email.svg"
              alt="Email icon"
              width={50}
              height={50}
            />
          </a>

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        gaming
      </footer>
    </div>
  );
}
