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
    <section className="py-5 faq">
      <Container className=" custom-bg-gray px-5 py-5">
        <h2 className="text-center fw-bold mb-3 faq-text">FAQ</h2>
        <p className="text-center faq-text  mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

        <Accordion activeKey={activeKey} onSelect={(eventKey) => toggleKey(eventKey)}>

          {[ 
            {
              key: "0", 
              question: "Lorem ipsum dolor sit amet?",
              answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              key: "1",
              question: "consectetur adipiscing elit?",
              answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              key: "2",
              question: "sed do eiusmod tempor incididunt ut labore et dolore?",
              answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          ].map(({ key, question, answer }) => (
            <Accordion.Item eventKey={key} key={key}>
              <Accordion.Header>
                <div className="d-flex justify-content-between w-100">
                  <span className='fw-bold'>{question}</span>
                  <span className="ms-2">{getIcon(key)}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body><span className='faq-text'>{answer}</span></Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
