import React, { useState } from 'react';
import './css/FAQ.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  // State to manage the visibility of each FAQ item
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to toggle the visibility of FAQ items
  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  // FAQ data
  const faqData = [
    {
      question: "How can I donate?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit risus vel felis condimentum, id porta eros luctus."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Nulla facilisi. Nullam ut felis at lorem varius ullamcorper a sed ex. Morbi volutpat risus et purus scelerisque, id eleifend ligula volutpat."
    },
    {
      question: "Can I donate anonymously?",
      answer: "Proin bibendum arcu quis orci semper, sit amet tristique est blandit. Nam eget pharetra risus. Nullam auctor, odio eget consequat tempor, nulla nisl vestibulum velit, vitae convallis nibh libero ut felis."
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="question-wrapper" onClick={() => toggleItem(index)}>
            <h3>{item.question}</h3>
            <FontAwesomeIcon icon={expandedItem === index ? faChevronUp : faChevronDown} />
          </div>
          <p className={expandedItem === index ? "answer active" : "answer"}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
