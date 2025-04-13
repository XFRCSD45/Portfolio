"use client";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const posts = {
    "oracle-interview-experience": {
      title: "Oracle Application Developer Interview Experience",
      date: "2025-04-13",
      readingTime: "3 min read",
      content: `
    <p>Oracle’s Application Developer role presented a thrilling and challenging interview process. Coming from a Computer Science background at NIT Surat, I’ve honed my skills through various projects and an internship experience at JPMorgan Chase & Co. However, this interview process still proved both rigorous and enlightening.</p>
    <br>
    <h2>Pre-Interview Timeline</h2>
    <p>I had my Online Assessment (OA) on <strong>August 1, 2024</strong>, and the results came out on August 2, announcing that I’d been shortlisted for the interviews on <strong>August 5</strong>. At that time, I was at home, so I had to rush to reach the campus on the night of August 4—just in time for the interviews on the next morning. It was hectic, but the anticipation of the process fueled my excitement. Little did I know, I would end up cracking it on my first day back on campus, which was an indescribably exhilarating feeling!</p>
    <br>
    <h2>Online Assessment (OA)</h2>
    <p>The interview journey began with a 1.5-hour Online Assessment. It comprised 20 MCQs and 1 coding question. The coding challenge tested knowledge of the Disjoint Set Union (DSU) data structure. For those unacquainted with DSU, it would likely range from medium to hard difficulty, whereas anyone with DSU experience might find it more approachable.</p>
    <br>
    <p>From both the Computer Science and Electronics branches (ECE and CSE), around 95 students made it through this stage. It was clear that a solid foundation in data structures and algorithms played a key role in clearing the OA.</p>
    <br>
    <h2>Technical Interview Rounds</h2>
    <p>There were three technical rounds in total. Across these rounds, I was tested on core CS fundamentals—Computer Networks, Object-Oriented Programming (OOP), and Data Structure & Algorithm (DSA) questions. Each round featured around three DSA problems of what I would consider LeetCode Medium-level difficulty.</p>
    <br>
    <h3>First Technical Round</h3>
    <ul>
      <li><strong>Question 1:</strong> Given page width and height, and a string, determine how many pages, lines, and columns are needed to accommodate the entire text. (A quirky question the interviewer concocted, testing problem-solving and logical thinking.)</li>
      <li><strong>Question 2:</strong> Remove duplicates from an array.</li>
      <li><strong>Question 3:</strong> Kadane’s algorithm to find the maximum subarray sum.</li>
    </ul>
    <br>
    <h3>Second Technical Round</h3>
    <ul>
      <li><strong>Question 1:</strong> KMP algorithm for pattern searching.</li>
      <li><strong>Question 2:</strong> Finding the GCD of an entire array. (Straightforward, though unusual in an interview context.)</li>
      <li><strong>Question 3:</strong> SQL-based questions, covering joins, subqueries, and basic database design.</li>
      <li><strong>Project Discussion:</strong> The interviewer asked about my projects—how they were structured, the technologies used, and the challenges encountered.</li>
    </ul>
    <br>
    <h3>Third Technical Round</h3>
    <p>This round proved less intense. Most questions revolved around my internship experience at JPMorgan Chase & Co. The interviewer seemed especially curious about the day-to-day work, the skills I practiced, and any notable takeaways. Then came one coding question:</p>
    <p><strong>Question:</strong> Given two dates, account for all possible constraints and edge cases to determine the number of days between them. Although lengthy to implement correctly, it was quite straightforward once the approach was set.</p>
    <br>
    <h2>HR Interview</h2>
    <p>The HR interview wrapped up the process in about five minutes. Typical questions came up:</p>
    <ul>
      <li><strong>Why should we select you?</strong></li>
      <li><strong>Why do you want to join Oracle?</strong></li>
      <li><strong>How do you differentiate between hard work and smart work?</strong></li>
      <li><strong>Which approach do you rely on during exams?</strong></li>
    </ul>
    <br>
    <p>For the “hard work vs. smart work” question, I shared that I rely on smart work for subjects I don’t enjoy—studying them the night before with targeted preparation. For subjects I genuinely like, I put in consistent hard work throughout the semester. That personal preference led to an interesting conversation on motivation and passion in tech.</p>
    <br>
    <h2>Final Thoughts</h2>
    <p>The Oracle interview process tested fundamentals in OOP, DS, Computer Networks, and SQL, while also probing the thought process behind my project experiences. The entire journey—from the DSU-based coding challenge in the OA to nuanced HR questions about work ethic—offered a holistic evaluation of both technical depth and cultural fit.</p>
    <br>
    <p>All in all, it was a memorable series of interviews. I recommend strengthening your conceptual foundations and practicing medium-level DSA problems diligently. Having personal projects or internships on your resume (like my JPMorgan Chase & Co. experience) can spark excellent discussions and distinguish you in the interview process. And if you ever find yourself rushing back to campus at the last minute—well, sometimes that makes for the best stories!</p>
  `,
    },
    "jpmc-internship-experience": {
      title: "Summer Internship at JPMorgan Chase & Co.",
      date: "2025-04-13",
      readingTime: "5 min read",
      content: `
    <p>This past summer, I had the incredible opportunity to work on-site at JPMorgan Chase & Co. in Mumbai as a Software Engineering Intern. The experience was both professionally and personally enriching, offering deep insights into large-scale software solutions and a vibrant glimpse of city life in Mumbai.</p>
    <br>
    <h2>Project Overview</h2>
    <br>
    <p>I primarily contributed to a KYC chatbot aimed at assisting employees with application updates and usage queries. By integrating Large Language Models (LLMs) with Llama Index, we achieved a relevance score of over 80% for chatbot responses. The tech stack included:</p>
    <br>
    <ul>
      <li><strong>Backend:</strong> Python for building and managing core functionalities.</li>
      <li><strong>Frontend:</strong> React for a seamless, user-friendly interface.</li>
      <li><strong>CI/CD:</strong> Jenkins for streamlined and automated deployment processes.</li>
      <li><strong>Prompt Moderation:</strong> Nemo Guardrails to ensure relevant, secure conversations.</li>
      <li><strong>User Feedback Mechanism:</strong> Enabled real-time feedback on chatbot responses to enhance performance.</li>
    </ul>
    <br>
    <p>This integration of AI into customer-centric services reduced developer intervention by 70% and ticket resolution time by 80%. The impact was tangible, and it felt rewarding to see our work directly benefit both end users and internal teams.</p>
<br>
    <h2>On-Site Experience in Mumbai</h2>
    <br>
    <p>Being on-site in Mumbai added another dimension to my internship. The city is a whirlwind of energy and opportunity. Each day, I commuted through bustling streets, soaking in the culture and pace of life. The office environment at JPMorgan Chase & Co. was similarly dynamic—teams were always collaborating, experimenting, and problem-solving in real time.</p>
<br>
    <p>During weekends, I explored Mumbai’s iconic landmarks, from Marine Drive to the Gateway of India, savoring local street food and catching the sea breeze in the evenings. The city is well-known for its fast-paced lifestyle, and it was exhilarating to experience that firsthand while juggling a high-impact project at work.</p>
<br>
    <h2>Technical and Professional Learnings</h2>
    <br>
    <p>Working at JPMorgan Chase & Co. offered valuable lessons, including:</p>
    <ul>
      <li><strong>Large-Scale Systems:</strong> Gaining exposure to enterprise-level architecture and stringent security standards.</li>
      <li><strong>Collaboration and Communication:</strong> Cross-team discussions were frequent and often necessary to ensure smooth delivery. Clear communication was key.</li>
      <li><strong>CI/CD Best Practices:</strong> Automating code integration and deployment pipelines with Jenkins was a game-changer for efficiency.</li>
      <li><strong>Agile Methodologies:</strong> Daily stand-ups, sprint planning, and iterative development processes ensured rapid progress and adaptability.</li>
    </ul>
    <br>
    <h2>Reflections</h2>
    <br>
    <p>This internship reinforced how vital it is to blend technology expertise with effective teamwork and communication. The KYC chatbot project stood as a perfect example of modern AI integration in a financial setting, showcasing real value in cutting down mundane tasks and enhancing user experience.</p>
<br>
    <p>Overall, the summer at JPMorgan Chase & Co. was a defining period. The blend of hands-on technical work, exposure to high-level industry practices, and immersion in the vibrant Mumbai culture made it unforgettable. I left feeling more confident, motivated, and ready to tackle the next chapter of my career in software development.</p>
  `,
    },

    "future-of-ai": {
      title: "The Future of AI Development",
      date: "2025-02-15",
      readingTime: "3 min read",
      content: `
        <p>Artificial Intelligence has come a long way since its inception. From rule-based systems to machine learning algorithms that can learn from data, the field has seen tremendous growth and innovation.</p>
        
        <p>Today, we stand at the precipice of a new era in AI development. Large language models like GPT-4 have demonstrated capabilities that were once thought to be uniquely human, such as creative writing, problem-solving, and even coding.</p>
        
        <h2>Ethical Considerations</h2>
        
        <p>As AI systems become more powerful and integrated into our daily lives, ethical considerations become increasingly important. Questions about bias, fairness, transparency, and accountability need to be addressed.</p>
        
        <p>Developers have a responsibility to ensure that AI systems are designed with ethical principles in mind. This includes being aware of potential biases in training data, ensuring transparency in how AI systems make decisions, and establishing mechanisms for accountability when things go wrong.</p>
        
        <h2>Technological Advancements</h2>
        
        <p>On the technological front, we're seeing advancements in several areas:</p>
        
        <ul>
          <li>Multimodal AI systems that can process and generate different types of data (text, images, audio)</li>
          <li>Reinforcement learning from human feedback (RLHF) to align AI systems with human values</li>
          <li>Federated learning to train models across multiple devices while preserving privacy</li>
          <li>Neuromorphic computing to create more efficient AI hardware</li>
        </ul>
        
        <h2>The Road Ahead</h2>
        
        <p>The future of AI development is both exciting and challenging. As we continue to push the boundaries of what's possible, we must also be mindful of the potential risks and ensure that AI systems are developed and deployed responsibly.</p>
        
        <p>By fostering collaboration between researchers, developers, policymakers, and the public, we can work towards a future where AI benefits humanity while minimizing potential harms.</p>
      `,
    },
    "web3-revolution": {
      title: "The Web3 Revolution",
      date: "2025-02-12",
      readingTime: "2 min read",
      content: `
        <p>Web3 represents a paradigm shift in how we interact with the internet. Unlike Web2, which is dominated by centralized platforms that control user data and monetization, Web3 aims to create a more decentralized and user-centric internet.</p>
        
        <h2>Key Components of Web3</h2>
        
        <p>At its core, Web3 is built on several key technologies and concepts:</p>
        
        <ul>
          <li>Blockchain: Distributed ledgers that enable trustless transactions and record-keeping</li>
          <li>Cryptocurrencies: Digital assets that facilitate value exchange without intermediaries</li>
          <li>Smart Contracts: Self-executing code that automates agreements and transactions</li>
          <li>Decentralized Applications (dApps): Applications that run on peer-to-peer networks</li>
          <li>Non-Fungible Tokens (NFTs): Unique digital assets that represent ownership of specific items</li>
        </ul>
        
        <h2>Changing Ownership Models</h2>
        
        <p>One of the most significant aspects of Web3 is how it's changing our understanding of digital ownership. In the Web2 era, users rarely truly owned their digital assets or data. Platforms could change terms of service, restrict access, or even delete content at will.</p>
        
        <p>With Web3, ownership is cryptographically secured on the blockchain. NFTs, for example, allow creators to sell unique digital assets directly to collectors, with provable scarcity and authenticity.</p>
        
        <h2>Challenges and Opportunities</h2>
        
        <p>Despite its promise, Web3 faces several challenges:</p>
        
        <ul>
          <li>Scalability: Current blockchain networks often struggle with high transaction volumes</li>
          <li>User Experience: Web3 applications can be complex and intimidating for average users</li>
          <li>Regulatory Uncertainty: Governments worldwide are still figuring out how to approach this new paradigm</li>
          <li>Environmental Concerns: Some blockchain networks consume significant energy</li>
        </ul>
        
        <p>However, these challenges also present opportunities for innovation. Layer 2 solutions are addressing scalability, while improved interfaces are making Web3 more accessible. As the ecosystem matures, we can expect to see more user-friendly and efficient solutions emerge.</p>
      `,
    },
    "cybersecurity-tips": {
      title: "Essential Cybersecurity Tips for Developers",
      date: "2025-02-01",
      readingTime: "3 min read",
      content: `
        <p>In today's interconnected world, cybersecurity is more important than ever. As developers, we have a responsibility to ensure that the applications we build are secure and protect user data. Here are some essential cybersecurity tips that every developer should follow.</p>
        
        <h2>1. Keep Dependencies Updated</h2>
        
        <p>Outdated dependencies can contain known vulnerabilities that attackers can exploit. Regularly update your dependencies and use tools like npm audit, Dependabot, or Snyk to automatically identify and fix vulnerable dependencies.</p>
        
        <h2>2. Implement Proper Authentication</h2>
        
        <p>Authentication is the first line of defense for your application. Implement strong password policies, multi-factor authentication, and consider using OAuth or OpenID Connect for federated authentication.</p>
        
        <h2>3. Validate and Sanitize Input</h2>
        
        <p>Never trust user input. Always validate and sanitize input on both the client and server sides to prevent injection attacks like SQL injection, XSS, and CSRF.</p>
        
        <h2>4. Use HTTPS Everywhere</h2>
        
        <p>HTTPS encrypts data in transit, protecting it from eavesdropping and man-in-the-middle attacks. Always use HTTPS for your applications, even during development.</p>
        
        <h2>5. Implement Proper Error Handling</h2>
        
        <p>Detailed error messages can reveal sensitive information about your application's architecture. Implement proper error handling that provides useful information to users without exposing internal details.</p>
        
        <h2>6. Follow the Principle of Least Privilege</h2>
        
        <p>Only grant the minimum permissions necessary for a user or system to perform its function. This limits the potential damage if an account is compromised.</p>
        
        <h2>7. Secure Your API</h2>
        
        <p>Implement rate limiting, use API keys or tokens for authentication, and validate all API requests to prevent abuse and unauthorized access.</p>
        
        <h2>8. Keep Security in Mind from the Start</h2>
        
        <p>Security should not be an afterthought. Incorporate security considerations into your design and development process from the beginning.</p>
        
        <p>By following these tips, you can significantly improve the security of your applications and protect your users' data. Remember, security is an ongoing process, not a one-time task.</p>
      `,
    },
    "react-performance": {
      title: "Optimizing React Performance",
      date: "2025-01-25",
      readingTime: "4 min read",
      content: `
        <p>React is known for its virtual DOM and efficient rendering, but as applications grow in complexity, performance can become an issue. Here are some advanced techniques to optimize the performance of your React applications.</p>
        
        <h2>1. Use React.memo for Component Memoization</h2>
        
        <p>React.memo is a higher-order component that memoizes the result of a component render. It performs a shallow comparison of props and only re-renders if the props have changed.</p>
        
        <pre><code>
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
        </code></pre>
        
        <h2>2. Optimize useEffect Dependencies</h2>
        
        <p>Be careful with the dependency array in useEffect. Including unnecessary dependencies can cause the effect to run more often than needed.</p>
        
        <pre><code>
useEffect(() => {
  // This effect will only run when count changes
}, [count]);
        </code></pre>
        
        <h2>3. Use useMemo and useCallback</h2>
        
        <p>useMemo memoizes the result of a computation, while useCallback memoizes a function. Both can prevent unnecessary recalculations or function recreations.</p>
        
        <pre><code>
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
        </code></pre>
        
        <h2>4. Virtualize Long Lists</h2>
        
        <p>For long lists, use virtualization libraries like react-window or react-virtualized to only render items that are currently visible in the viewport.</p>
        
        <h2>5. Code Splitting with React.lazy</h2>
        
        <p>Split your code into smaller chunks that are loaded on demand using React.lazy and Suspense.</p>
        
        <pre><code>
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
        </code></pre>
        
        <h2>6. Use Production Builds</h2>
        
        <p>Always use production builds for deployment. Development builds include extra warnings and development tools that slow down your application.</p>
        
        <h2>7. Avoid Inline Functions in Renders</h2>
        
        <p>Inline functions in renders create new function instances on each render, which can lead to unnecessary re-renders of child components.</p>
        
        <h2>8. Profile and Measure</h2>
        
        <p>Use the React DevTools Profiler to identify performance bottlenecks in your application. Measure the impact of your optimizations to ensure they're actually improving performance.</p>
        
        <p>By applying these techniques, you can significantly improve the performance of your React applications, providing a better user experience and reducing resource usage.</p>
      `,
    },
  };

  const post = posts[id as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-primary hover:underline"
      >
        <ArrowLeft size={16} /> Back to blog
      </Link>

      <article>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 glitch" data-text={post.title}>
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarIcon size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>

        <div
          className="prose prose-invert max-w-none prose-headings:text-primary prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
