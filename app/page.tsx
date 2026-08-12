import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Experience } from "@/app/components/Experience";
import { Skills } from "@/app/components/Skills";
import { OpenSource } from "@/app/components/OpenSource";
import { Projects } from "@/app/components/Projects";
import { Writing } from "@/app/components/Writing";
import { Education } from "@/app/components/Education";
import { Certifications } from "@/app/components/Certifications";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { getBlogPosts } from "@/lib/blog";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <OpenSource />
        <Projects />
        <Writing posts={posts} />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
