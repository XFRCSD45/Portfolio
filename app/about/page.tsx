"use client";

import { useState } from "react";
import { Terminal } from "@/components/terminal";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AboutPage() {
  const [introComplete, setIntroComplete] = useState(false);
  const [bioComplete, setBioComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const experiences = [
    {
      title: "Application Developer",
      company: "Oracle",
      period: "Upcoming July 2025",
      description:
        "Upcoming Apllication Developer at Oracle India. Looking forward for this great opportunity.",
    },
    {
      title: "Software Development Intern",
      company: "Ignis Tech  Solutions",
      period: "Dec 2024 - Present",
      description:
        "Developing  web applications using React, Django REST Framework, and MsSql. Implemented CI/CD pipelines and automated testing. Working on Web Scrapping using Scrapy and Selenium.",
    },
    {
      title: "Software Engineering Inten",
      company: "JP Morgan Chase and Co.",
      period: "May 2024 -  July 2024",
      description:
        "Worked on KYC Chatbot using Generative AI, LLMs, Langchain. Worked on CI/CD Pipeline using Jenkins. Created frontend using Reactjs and also worked on backend using Python fast API",
    },
  ];

  const educations = [
    {
      degree: "B.Tech",
      field: "Computer Science and Engineering",
      school: "Sardar Vallabhbhai National Institute of Technology, Surat",
      period: "Dec 2021 - Present",
      grade:"8.75 CGPA",
    },
    {
      degree: "Intermediate",
      field: "Computer Science",
      school: "Krishna Foundation Academy, Kanpur",
      period: "2018 - 2020",
      grade:"97.25 %",
    },
    {
      degree: "High School",
      field: "Computer Science",
      school: "Krishna Foundation Academy, Kanpur",
      period: "2016 - 2018",
      grade:"95.20 %",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["C++", "Java", "Python", "JavaScript", "TypeScript", "C"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "CSS/SCSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Django", "Spring", "Spring Boot"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    { category: "DevOps", items: ["Docker", "Jenkins", "AWS", "CI/CD", "Git"] },
    { category: "AI/ML", items: ["Generative AI", "RAG", "NLP", "LLMs"] },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validation checks
    if (!formData.name.trim()) {
        setError("Name is required.");
        setIsSubmitting(false);
        return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setError("A valid email is required.");
        setIsSubmitting(false);
        return;
    }
    if (!formData.message.trim()) {
      setError("Message can't be empty.");
      setIsSubmitting(false);
      return;
  }

    try {
        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
            setIsSuccess(true);
            // Clear the form fields
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            alert("Message sent successfully!");
        } else {
            setError(result.error || "Failed to send message");
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        setError("An error occurred. Please try again.");
        alert("An error occurred. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-16">
      <section>
        <Terminal
          text="Initializing personal profile... Access granted. Loading bio data..."
          typingSpeed={30}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <Terminal
            text="Hello, I'm Sunny Das. A full-stack developer with a passion for Software Development, Competitive Programming, and creating immersive digital experiences. I specialize in building modern web applications with a focus on performance, accessibility, and user experience."
            typingSpeed={20}
            className="max-w-3xl mx-auto mt-4"
            showPrompt={false}
            onComplete={() => setBioComplete(true)}
          />
        )}
      </section>

      {bioComplete && (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-6">Experience Timeline</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.company}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">$</span> cat
                      job_details.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-primary">company:</span>{" "}
                        {exp.company}
                      </p>
                      <p>
                        <span className="text-primary">title:</span> {exp.title}
                      </p>
                      <p>
                        <span className="text-primary">period:</span>{" "}
                        {exp.period}
                      </p>
                      <p>
                        <span className="text-primary">description:</span>{" "}
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Education Timeline</h2>
            <div className="space-y-6">
              {educations.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.degree}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">$</span> cat
                      education_details.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-primary">school:</span>{" "}
                        {exp.school}
                      </p>
                      <p>
                        <span className="text-primary">degree:</span> {exp.degree}
                      </p>
                      <p>
                        <span className="text-primary">field:</span> {exp.field}
                      </p>
                      <p>
                        <span className="text-primary">duration:</span>{" "}
                        {exp.period}
                      </p>
                      <p>
                        <span className="text-primary">grade:</span>{" "}
                        {exp.grade}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">System Specs</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">skills.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> cat /proc/skills
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-primary font-bold">
                        {skillGroup.category}
                      </h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="flex items-center gap-2"
                          >
                            <span className="text-primary">-</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">contact_form.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ./send_message.sh
                  </p>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">
                        <span className="text-primary">name:</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        <span className="text-primary">email:</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        <span className="text-primary">message:</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={4}
                        className="bg-background border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    {isSuccess && (
                      <p className="text-green-500 text-center">
                        Message sent successfully!
                      </p>
                    )}
                    {error && (
                      <p className="text-red-500 text-center">{error}</p>
                    )}
                  </form>
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">network_connections.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ifconfig
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-primary">github0:</p>
                      <Link
                        href="https://github.com/XFRCSD45"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Github size={16} />
                        github.com/XFRCSD45
                      </Link>
                    </div>
                    {/* <div>
                      <p className="mb-1 text-primary">twitter0:</p>
                      <Link
                        href="https://x.com/sleepy_devv"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Twitter size={16} />
                        twitter.com/sleepy_devv
                      </Link>
                    </div> */}
                    <div>
                      <p className="mb-1 text-primary">linkedin0:</p>
                      <Link
                        href="https://www.linkedin.com/in/sunny-das-1177641bb/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Linkedin size={16} />
                        linkedin.com/in/sunny-das
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">mail0:</p>
                      <Link
                        href="mailto:shanigupta120103@gmail.com"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail size={16} />
                        shanigupta120103@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
