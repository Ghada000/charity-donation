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
      answer: "You can donate by visiting our website and clicking on the 'Donate' button. From there, you can choose the amount you'd like to donate and complete the payment process securely."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, your donation is tax-deductible. We are a registered non-profit organization, and all donations made to us are eligible for tax deductions according to local tax laws."
    },
    {
      question: "Can I donate anonymously?",
      answer: "Yes, you can donate anonymously if you prefer. Simply indicate your preference when making the donation, and we will ensure that your identity remains confidential."
    },
    {
      question: "How do I volunteer for events?",
      answer: "Volunteering for events is easy! Simply visit our website's volunteer page and fill out the volunteer form. We'll get in touch with you regarding upcoming events and opportunities."
    },
    {
      question: "Where does my donation go?",
      answer: "Your donation goes directly towards supporting our cause and initiatives. We allocate funds to various projects, programs, and initiatives aimed at making a positive impact in our community."
    },
    {
      question: "How can I get involved in fundraising?",
      answer: "Getting involved in fundraising is a great way to support our organization! You can start by organizing your own fundraising event, participating in our fundraising campaigns, or reaching out to us to explore collaboration opportunities."
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
