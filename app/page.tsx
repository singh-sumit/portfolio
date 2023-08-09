import Image from 'next/image'
import {Navbar} from "@/app/components/Navbar";
import {About} from "@/app/components/About";
import {Experience} from "@/app/components/Experience";
import {Project} from "@/app/components/Project";
import {Contact} from "@/app/components/Contact";
export default function Home() {
  const name = "Er. Sumit Kr. Singh"

  const content = {
        "summary": "o Computer engineer with 2 years of professional experience and 2+ years of non-professional experience, in core python, javascript, and other tech stack used in software development, clinical domain.\n\n\no Self-motivated developer, interested in architecture development, who likes to solve challenging problems.",
        "headline": "Software Engineer | NEC Reg. No. - 9577 | Python | Django | ReactJs | Azure",
    }

  return (
    <main className="container mx-auto min-h-screen p-2">
      <Navbar />
      <About
        content={content}
        name={name}
      />
      <Experience />
      <Project />
      <Contact />
    </main>
  )
}
