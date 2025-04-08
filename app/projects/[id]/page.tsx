"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()

  // This would typically come from an API or database
  const projects = {
    "mmnct": {
      title: "Manoj Memorial Night Cricket Tournament, SVNIT",
      description: "Real time Cricket Scoring website with all available features from Player Profile and stats to Top Stats of the Tournament.",
      image: "/mmnct.png",
      technologies: ["React", "D3.js", "TensorFlow.js"],
      category: "web",
      github: "https://github.com/XFRCSD45/mmnct2k24",
      demo: "https://mmnct.in",
      longDescription: "This project is a real-time cricket scoring website that provides comprehensive features including player profiles, statistics, and live match updates. It offers an engaging user experience with interactive visualizations of game statistics."
    },
    "helping-you-through": {
      title: "Helping Hand",
      description: "Platform for students of SVNIT to get help from seniors. Provides a space for college-related resources, PYQs, clubs information, hostel reviews, and answers to any doubts.",
      image: "/helpinghand.png",
      technologies: ["Next.js", "Node.js", "Supabase", "Relational Database"],
      category: "web",
      github: "https://github.com/XFRCSD45/helping-you-through",
      demo: "https://helping-you-through-client.vercel.app/",
      longDescription: "Helping Hand connects SVNIT students with seniors to access valuable resources such as past question papers, club details, hostel reviews, and general guidance. The platform streamlines academic support and campus life insights."
    },
    "promptopia": {
      title: "Thought Tide",
      description: "ThoughtTide is a social platform for users to discover, think and share creative thoughts and ideas.",
      image: "/prompt.png",
      technologies: ["Nextjs", "MongoDB", "Nodejs"],
      category: "web",
      github: "https://github.com/XFRCSD45/share_prompt",
      demo: "https://share-prompt-iota.vercel.app/",
      longDescription: "Thought Tide is a dynamic social platform where users can explore and share creative ideas. The site focuses on community engagement and thoughtful content discovery through an intuitive user interface."
    },
    "yoga-detection": {
      title: "Yoga Pose Detection",
      description: "Real-time Yoga Pose detection system using CNN and MediaPipe. Designed to help visually impaired users with features like speech-controlled navigation using NLP.",
      image: "/Yoga.png",
      technologies: ["CNN", "Mediapipe", "Reactjs", "NLP"],
      category: "ai",
      github: "https://github.com/XFRCSD45/Final-Year-Project",
      demo: "https://github.com/XFRCSD45/Final-Year-Project",
      longDescription: "This project offers a real-time yoga pose detection system that leverages convolutional neural networks and MediaPipe. The website is built with accessibility in mind, including speech-controlled features powered by NLP for enhanced user interaction."
    },
    "a1-bakery": {
      title: "A1 Bakery",
      description: "Website built for A1 Bakery in Surat, Gujarat, as part of the Google Winter of Code organized by GDSC, NIT Surat.",
      image: "/a1bakery.png",
      technologies: ["HTML", "CSS", "JS", "SCSS"],
      category: "web",
      github: "https://github.com/XFRCSD45/A-One-Bakery",
      demo: "https://whimsical-sunburst-d264e1.netlify.app/",
      longDescription: "A1 Bakery is a responsive website developed for a local bakery in Surat. Created during the Google Winter of Code initiative by GDSC, NIT Surat, the site highlights the bakery's offerings with an engaging and user-friendly design."
    },
    "slim-to-fit": {
      title: "Slim To Fit GDSC Hackathon Project",
      description: "Web platform built for a SaaS project featured on Shark Tank India. Includes user activity tracking, an admin panel, and a machine learning model for disease prediction based on symptoms.",
      image: "/slimtofit.png",
      technologies: ["Machine Learning", "Nodejs", "Reactjs"],
      category: "ai",
      github: "https://github.com/XFRCSD45/slimtofit-GDSC-Hackathon",
      demo: "https://github.com/XFRCSD45/slimtofit-GDSC-Hackathon",
      longDescription: "Slim To Fit is an innovative web platform developed during the GDSC Hackathon. The project features real-time user activity tracking, an admin panel for user management, and a machine learning model that predicts potential diseases from user-input symptoms, offering a novel approach to healthcare insights."
    }
  }
  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">title:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">category:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-80 rounded-md overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
        >
          <Github size={16} /> View on GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>
    </div>
  )
}

