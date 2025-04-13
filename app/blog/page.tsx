import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  const posts = [
    {
      id: "oracle-interview-experience",
      title: "Oracle Application Developer Interview Experience",
      excerpt: "Shared my experience of Orcale Applicaation Developer Interview which was on-campus opportunity.",
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
    {
      id: "future-of-ai",
      title: "The Future of AI Development",
      excerpt: "Exploring the ethical implications and technological advancements in artificial intelligence.",
      date: "2025-02-15",
      readingTime: "3 min read",
    },
    {
      id: "web3-revolution",
      title: "The Web3 Revolution",
      excerpt: "How blockchain technology is changing the way we think about ownership and digital assets.",
      date: "2025-02-12",
      readingTime: "3 min read",
    },
    {
      id: "cybersecurity-tips",
      title: "Essential Cybersecurity Tips for Developers",
      excerpt: "Practical security measures every developer should implement to protect their applications.",
      date: "2025-02-01",
      readingTime: "2 min read",
    },
    {
      id: "react-performance",
      title: "Optimizing React Performance",
      excerpt: "Advanced techniques to improve the performance of your React applications.",
      date: "2025-01-25",
      readingTime: "4 min read",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">blog_posts.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> ls -la /articles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

