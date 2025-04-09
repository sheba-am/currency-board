import { Accordion, Container } from 'react-bootstrap';
import { useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";



export default function FAQSection() {
  const [activeKey, setActiveKey] = useState(null);

  const toggleKey = (key: any) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const getIcon = (key: any) => (activeKey === key ? <FiMinusCircle /> : <FiPlusCircle />);

  return (
    <section className="py-5 ">
      <Container className="text-center">
        <h2 className="fw-bold mb-3">FAQ</h2>
        <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

        <Accordion activeKey={activeKey}>
          {[ 
            {
              key: "0", 
              question: "What is this platform?",
              answer: "We have designed our app for increased efficiency and it will help you to start getting more things done."
            },
            {
              key: "1",
              question: "What is this platform?",
              answer: "We have designed our app for increased efficiency and it will help you to start getting more things done.."
            },
            {
              key: "2",
              question: "What is this platform?",
              answer: "We have designed our app for increased efficiency and it will help you to start getting more things done.!"
            }
          ].map(({ key, question, answer }) => (
            <Accordion.Item eventKey={key} key={key}>
              <Accordion.Header onClick={() => toggleKey(key)}>
                <div className="d-flex justify-content-between w-100">
                  <span>{question}</span>
                  <span className="ms-2">{getIcon(key)}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>{answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
