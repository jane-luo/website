import Image from "next/image";

export function ContactCard() {
  return (
    <div className="flex flex-col gap-8 sm:items-start">
        <div className="text-3xl">
            Hi, I&apos;m
        </div>

        <div className="text-jyiBlue text-6xl font-bold">
            Jane Luo
        </div>

        <div className="text-3xl">
            Software Engineer <span className="text-jyiBlue">@</span> Meta
        </div>

        <div className="pt-2 flex gap-6 items-center flex-col sm:flex-row">
            <a href="/jane_luo_resume.pdf" target="_blank">
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
    </div>
  )
}