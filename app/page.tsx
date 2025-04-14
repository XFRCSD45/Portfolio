"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const featuredProjects = [
    {
      id: "mmnct",
      title: "Manoj Memorial Night Cricket Tournament, SVNIT",
      description: "Real time Cricket Scoring website with all available features from Player Profile and stats to Top Stats of the Torunament.",
      image: "/mmnct.png",
      technologies: ["Nextjs", "Firebase", "Git"],
    },
    {
      id: "helping-you-through",
      title: "Helping Hand",
      description: "Platform for students of SVNIT to get the help from seniors. Provide Platform for college related stuffs, PYQs, Clubs Information, Hostel Reviews and Every doubt that a fresher or other student may encounter.",
      image: "/helpinghand.png",
      technologies: ["Next.js", "Node.js", "Supabase", "Relational Database"],
    },
    {
      id: "promptopia",
      title: "Thought Tide",
      description: "ThoughtTide is a social platform for users to discover, think and share creative thoughts and ideas.",
      image: "/prompt.png",
      technologies: ["Nextjs", "MongoDB", "Nodejs"],
    },
  ]

  const latestPosts = [
    {
      id: "oracle-interview-experience",
      title: "Oracle Application Developer Interview Experience",
      excerpt: "Shared my experience of Oracle Application Developer Interview which was on-campus opportunity.",
      date: "2025-04-13",
      readingTime: "3 min read",
    },
    {
      id: "jpmc-internship-experience",
      title: "Summer Internship at JPMorgan Chase & Co.",
      excerpt: "Shared my experience of Software Engineering Internship at JPMorgan Chase & Co during summers of 2024.",
      date: "2025-04-13",
      readingTime: "3 min read",
    },
  ]

  const skills = [ "C++", "Java" , "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Git", "Databases", "DRF"]

  return (
    <div className="space-y-16">
      <section className="py-12">
        <div className="flex flex-col justify-center items-center text-center" >
      <Image src="/portfolio.png" height={400} width={400} alt="portfolio-ghibli" />
      <div className="font-extrabold text-xl mt-2 mb-20 " >
        <p>Sunny Das</p>
        <p>NIT Surat CSE'25</p>
        <p>Full Stack Developer</p>
      </div>
      </div>
        <Terminal
          text="Hello, World. I am Sunny Das. Upcoming Application Developer at Oracle. Welcome to my digital realm."
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />
        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">system_specs.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest from the Blog</h2>
          <Link href="/blog" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}

