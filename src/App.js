import React, { useState } from "react";
import "./App.css"; // Import styles

// Reusable AccordionItem component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the section is open or closed

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the open state
  };

  return (
    <div className="accordion-item">
      {/* Accordion header */}
      <button className="accordion-header" onClick={toggleAccordion}>
        {title}
      </button>
      {/* Accordion content */}
      <div className={`accordion-content ${isOpen ? "active" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="accordion">
      {/* Pass title and content to each AccordionItem */}
      <AccordionItem
        title="Section 1"
        content="This is the content for Section 1. It will show or hide when you click the header."
      />
      <AccordionItem
        title="Section 2"
        content="This is the content for Section 2. Click to toggle visibility."
      />
      <AccordionItem
        title="Section 3"
        content="This is the content for Section 3. You can add more sections like this!"
      />
    </div>
  );
};

export default App;
