import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Department.css";

const Department = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

const departments = [
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop",
    title: "MBA: Finance Technology (2 Years)",
    desc: "Focuses on financial systems, fintech tools, and data-driven decision making in modern finance.Focuses on financial systems, fintech tools, and data-driven decision making in modern finance.",
  },
  {
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop",
    title: "MBA: Logistics and Supply Chain Management (2 Years)",
    desc: "Covers supply chain operations, logistics planning, and global distribution strategies.Focuses on financial systems, fintech tools, and data-driven decision making in modern finance.",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop",
    title: "MBA: Human Resource Management (2 Years)",
    desc: "Develops skills in talent management, recruitment, and organizational behavior.Focuses on financial systems, fintech tools, and data-driven decision making in modern finance.",
  },
  {
    img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=400&fit=crop",
    title: "MBA: Marketing Management (2 Years)",
    desc: "Focuses on branding, digital marketing, consumer behavior, and market research.Focuses on financial systems, fintech tools, and data-driven decision making in modern finance.",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    title: "BBA: Digital Marketing (3 Years)",
    desc: "Learn SEO, social media marketing, content strategy, and online advertising.Focuses on financial systems, fintech tools, and data-driven decision making in modern finance.",
  },
  {
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400&h=400&fit=crop",
    title: "BBA: International Business (3 Years)",
    desc: "Covers global trade, international markets, and cross-cultural business practices.Focuses on financial systems, fintech tools, and data-driven decision making in modern finance.",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    title: "B.Com: Computer Applications (3 Years)",
    desc: "Combines commerce with IT skills like accounting software, databases, and programming basics.Focuses on financial systems, fintech tools, and data-driven decision making in modern finance.",
  },
];

  return (
    <section className="department-section">
      <h2 className="title">Our Specilatioins</h2>

      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="department-container" ref={scrollRef}>
          {departments.map((dept, index) => (
            <div className="department-card" key={index}>
              <img className="dep-images" src={dept.img} alt={dept.title} />
              <h3 className="dep-name">{dept.title}</h3>
              <p>{dept.desc}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Department;