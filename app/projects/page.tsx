"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    {
      id: "mmnct",
      title: "Manoj Memorial Night Cricket Tournament, SVNIT",
      description: "Real time Cricket Scoring website with all available features from Player Profile and stats to Top Stats of the Torunament.",
      image: "/mmnct.png",
      technologies: ["React", "D3.js", "TensorFlow.js"],
      category: "web",
    },
    {
      id: "helping-you-through",
      title: "Helping Hand",
      description: "Platform for students of SVNIT to get the help from seniors. Provide Platform for college related stuffs, PYQs, Clubs Information, Hostel Reviews and Every doubt that a fresher or other student may encounter.",
      image: "/helpinghand.png",
      technologies: ["Next.js", "Node.js", "Supabase", "Relational Database"],
      category: "web",
    },
    {
      id: "promptopia",
      title: "Thought Tide",
      description: "ThoughtTide is a social platform for users to discover, think and share creative thoughts and ideas.",
      image: "/prompt.png",
      technologies: ["Nextjs", "MongoDB", "Nodejs"],
      category: "web",
    },
    {
      id: "yoga-detection",
      title: "Yoga Pose Detection",
      description: "Real-time Yoga Pose detection system using CNN and mediapipe. Website is built to help the ones with visual impairment with features like speech controlled flow using NLP.",
      image: "/Yoga.png",
      technologies: ["CNN", "Mediapipe", "Reactjs", "NLP"],
      category: "ai",
    },
    {
      id: "a1-bakery",
      title: "A1 Bakery",
      description: "Website built for a local shop A1 Bakery in Surat, Gujarat as a participant in Google Winter of Code Organized by GDSC , NIT Surat.",
      image: "/a1bakery.png",
      technologies: ["HTML", "CSS", "JS", "SCSS"],
      category: "web",
    },
    // {
    //   id: "AI-chatbot",
    //   title: "AI Chatbot",
    //   description: "Conversational AI assistant with natural language processing and machine learning capabilities.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["Python", "NLP", "TensorFlow"],
    //   category: "ai",
    // },
    {
      id: "slim-to-fit",
      title: "Slim To Fit GDSC Hackathon Project",
      description: "Web Platform built for Saas from Shark Tank India. Having features like tracking user activity on website, admin panel to manage users and machine learning based model that predicts the disease that one may be suffering based on the symptoms enetred by the user.",
      image: "/slimtofit.png",
      technologies: ["Machine Learning", "Nodejs", "Reactjs"],
      category: "ai",
    },
    // {
    //   id: "blockchain-explorer",
    //   title: "Blockchain Explorer",
    //   description: "Tool for visualizing and exploring blockchain transactions and smart contracts.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["React", "Ethers.js", "GraphQL"],
    //   category: "blockchain",
    // },
    // {
    //   id: "data-visualization",
    //   title: "Data Visualization Platform",
    //   description: "Interactive platform for creating and sharing data visualizations and insights.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["D3.js", "React", "Node.js"],
    //   category: "data",
    // },
    // {
    //   id: "ar-navigation",
    //   title: "AR Navigation System",
    //   description: "Augmented reality navigation system for indoor and outdoor environments.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   technologies: ["Unity", "ARKit", "C#"],
    //   category: "ar",
    // },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & Machine Learning" },
    // { id: "blockchain", name: "Blockchain" },
    // { id: "data", name: "Data Visualization" },
    // { id: "ar", name: "AR/VR" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> Displaying projects directory. Select category to filter results.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}

