// src/pages/CustomerCare.jsx
import React from 'react';
import styled from 'styled-components';

const CustomerCareContainer = styled.div`
  padding: 3rem;
  max-width: 800px;
  margin: auto;
  font-family: Arial;
  background-color:rgb(253, 241, 232); /* Light background for contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const Question = styled.h3`
  cursor: pointer;
  color:rgb(171, 100, 79); /* Link color */
  
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const Answer = styled.p`
  margin-left: 1rem;
  color: #333; /* Darker text for answers */
`;

const FAQs = [
  {
    question: "What is your return policy?",
    answer: "You can return any unworn and unwashed items within 30 days of receipt for a full refund."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order has shipped, you will receive an email with tracking information."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and other payment methods."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to select countries. Please check our shipping policy for more details."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team via email at support@example.com or call us at (123) 456-7890."
  },
];

const CustomerCare = () => {
  const [expandedQuestionIndex, setExpandedQuestionIndex] = React.useState(null);

  const toggleQuestion = (index) => {
    setExpandedQuestionIndex(expandedQuestionIndex === index ? null : index);
  };

  return (
    <CustomerCareContainer>
      <h2>Customer Care</h2>
      {FAQs.map((faq, index) => (
        <div key={index}>
          <Question onClick={() => toggleQuestion(index)}>
            {faq.question}
          </Question>
          {expandedQuestionIndex === index && <Answer>{faq.answer}</Answer>}
        </div>
      ))}
    </CustomerCareContainer>
  );
};

export default CustomerCare;
