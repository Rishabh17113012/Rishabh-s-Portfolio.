import React from "react";
import { Timeline } from "./ui/timeline";

const Certifications = () => {
  const certificationData = [
    {
      title: "Introduction to Artificial Intelligence (AI)",
      date: "2025",
      organization: "Coursera | Offered by IBM",
      content:
        "This certification provided a foundational understanding of Artificial Intelligence and its real-world applications across industries. I explored key AI concepts such as machine learning, deep learning, and natural language processing. The course emphasized ethical considerations, AI in business transformation, and practical tools like generative AI and retrieval-augmented generation (RAG). Through hands-on activities and real-world case studies, I developed insights into how AI can automate tasks, enhance decision-making, and drive innovation.",
      imageUrl: "/CERTIFICATE_LANDING_PAGE~SJF3DYZJ9AHR.jpeg",
      skills: [
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Natural Language Processing (NLP)",
        "Generative AI",
        "AI Ethics and Governance",
        "Retrieval-Augmented Generation (RAG)"
      ],
    },    
    {
      title: "Computer Graphics",
      date: "2025",
      organization: "National Programme on Technology Enhanced Learning (NPTEL)",
      content:
        "Completing this certification enabled me to develop a thorough understanding of computer graphics, covering both theoretical and practical aspects. I learned about 2D and 3D rendering, advanced transformations, and visualization techniques. The course emphasized algorithm optimization and real-time rendering, enabling me to create visually appealing images and animations. Hands-on projects with OpenGL provided practical insights into lighting, shading, and texture mapping, essential for modern graphical applications.",
      imageUrl: "/Computer Graphics_page-0001.jpg", 
      skills: [
        "2D/3D Rendering",
        "Transformations",
        "Visualization Techniques",
        "OpenGL",
      ],
    },
    {
      title: "Introduction To Internet of Things and Embedded Systems",
      date: "2024",
      organization: "University of California, Irvine",
      content:
        "During this certification, I gained a comprehensive understanding of the Internet of Things (IoT) and Embedded Systems. The course detailed IoT architecture, communication protocols, and hardware-software integration essential for real-world applications. I engaged in hands-on projects involving sensor integration and data acquisition, enhancing my ability to process data in real time. This program provided valuable insights into designing, deploying, and securing interconnected systems, preparing me for the evolving challenges in IoT and embedded technology.",
      imageUrl: "/Coursera 0KREQYFFI9MN_page-0001.jpg", 
      skills: [
        "IoT Architecture",
        "Embedded Systems",
        "Communication Protocols",
        "Sensor Integration",
      ],
    },
    {
      title: "Introduction to Front-End Development",
      date: "2024",
      organization: "Meta",
      content:
        "This certification provided a solid foundation in front-end web development, focusing on HTML, CSS, and JavaScript. I learned best practices for responsive design, user experience, and accessibility. Through interactive lessons and practical projects, I developed skills to build modern, dynamic web interfaces that perform efficiently on various devices. The course also covered debugging techniques and performance optimization, enabling me to create engaging, visually appealing websites that meet current industry standards.",
      imageUrl: "/Coursera M8ZHDVD4JFPL_pages-to-jpg-0001.jpg", 
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "UI/UX Fundamentals",
      ],
    },
    {
      title: "Python for Data Science",
      date: "2023",
      organization: "National Programme on Technology Enhanced Learning (NPTEL)",
      content:
        "This certification validates my proficiency in using Python for data science, covering a wide range of topics from data manipulation to visualization. I learned to work with powerful libraries like Pandas, NumPy, and Matplotlib, enabling me to analyze complex datasets efficiently. The course emphasized practical applications, including statistical analysis and introductory machine learning, equipping me with the skills to derive insights from data. Overall, this certification has significantly enhanced my analytical abilities and prepared me for real-world data challenges.",
      imageUrl: "/Python For Data Science (1)_pages-to-jpg-0001.jpg", 
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Data Analysis",
      ],
    },
    {
      title: "Introduction To Cybersecurity Tools & Cyber Attacks",
      date: "2023",
      organization: "IBM",
      content:
        "This certification from IBM, offered through Coursera, highlights my foundational knowledge in cybersecurity. It covers essential topics such as cybersecurity tools, network defense strategies, and methods to prevent cyber attacks. The course provided a deep dive into identifying vulnerabilities, risk assessment, and the implementation of security protocols. Practical exercises reinforced the theoretical knowledge, equipping me with skills to analyze and mitigate digital threats. This certification has strengthened my understanding of modern cybersecurity practices, preparing me to secure systems and data effectively.",
      imageUrl: "/Coursera E6RXPH6URXYQ_pages-to-jpg-0001.jpg", 
      skills: [
        "Network Security",
        "Threat Detection",
        "Security Tools",
        "Cyber Attack Prevention",
      ],
    },
  ];
  
  return (
    <section id="certificate" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="w-full">
        <Timeline data={certificationData} />
      </div>
    </section>
  );
};

export default Certifications;