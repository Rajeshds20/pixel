import { useState } from 'react';
import ArrowDown from '../assets/img/arrowdown.png';
import ArrowUp from '../assets/img/arrowup.png';

const FAQPage = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleQuestion = index => {
        if (selectedQuestion === index) {
            return setSelectedQuestion(null);
        }

        setSelectedQuestion(index);
    };
    const data = [
        {
            question: 'Question 1',
            answer: `Aliqua sint sint excepteur eu sint consectetur cupidatat ex sint reprehenderit laboris. Nisi duis tempor aliquip laborum veniam non magna officia aute. Officia veniam dolore tempor id ut. Et culpa sint do ad pariatur voluptate occaecat consequat adipisicing duis anim excepteur. Officia labore quis elit ut ut sit ex tempor ut eu dolor nostrud. Irure exercitation fugiat est adipisicing eiusmod ut veniam aliqua nostrud consequat eiusmod eiusmod irure cillum.
Laboris laboris adipisicing do veniam cupidatat dolor quis ipsum amet eiusmod velit eiusmod et.Aliqua do qui aliquip id incididunt do.Nulla et cupidatat officia proident irure adipisicing ad aliquip officia aliquip.`,
        },
        {
            question: 'Question 2',
            answer: `
            Irure est qui excepteur culpa in excepteur dolor nulla voluptate do anim proident occaecat. Enim ex excepteur enim excepteur nostrud deserunt ad enim culpa laboris officia. Velit laborum ad labore culpa magna eu laborum ipsum fugiat culpa duis excepteur nisi.
            Laboris sint commodo Lorem minim consectetur laboris. Proident cupidatat mollit sit qui non aliquip ex. Pariatur labore do amet ex aliqua voluptate magna ea. Tempor veniam sunt qui sint cillum dolore mollit anim aliqua sint ex. Commodo incididunt culpa do ullamco anim labore. Nostrud incididunt occaecat Lorem commodo nisi qui anim eiusmod dolore labore id ut exercitation pariatur. Est irure adipisicing officia dolore.`,
        },
        {
            question: 'Question 3',
            answer: `Aliqua sint sint excepteur eu sint consectetur cupidatat ex sint reprehenderit laboris. Nisi duis tempor aliquip laborum veniam non magna officia aute. Officia veniam dolore tempor id ut. Et culpa sint do ad pariatur voluptate occaecat consequat adipisicing duis anim excepteur. Officia labore quis elit ut ut sit ex tempor ut eu dolor nostrud. Irure exercitation fugiat est adipisicing eiusmod ut veniam aliqua nostrud consequat eiusmod eiusmod irure cillum.
Laboris laboris adipisicing do veniam cupidatat dolor quis ipsum amet eiusmod velit eiusmod et.Aliqua do qui aliquip id incididunt do.Nulla et cupidatat officia proident irure adipisicing ad aliquip officia aliquip.`,
        },
        {
            question: 'Question 4',
            answer: `
            Irure est qui excepteur culpa in excepteur dolor nulla voluptate do anim proident occaecat. Enim ex excepteur enim excepteur nostrud deserunt ad enim culpa laboris officia. Velit laborum ad labore culpa magna eu laborum ipsum fugiat culpa duis excepteur nisi.
            Laboris sint commodo Lorem minim consectetur laboris. Proident cupidatat mollit sit qui non aliquip ex. Pariatur labore do amet ex aliqua voluptate magna ea. Tempor veniam sunt qui sint cillum dolore mollit anim aliqua sint ex. Commodo incididunt culpa do ullamco anim labore. Nostrud incididunt occaecat Lorem commodo nisi qui anim eiusmod dolore labore id ut exercitation pariatur. Est irure adipisicing officia dolore.`,
        },
        {
            question: 'Question 5',
            answer: `Aliqua sint sint excepteur eu sint consectetur cupidatat ex sint reprehenderit laboris. Nisi duis tempor aliquip laborum veniam non magna officia aute. Officia veniam dolore tempor id ut. Et culpa sint do ad pariatur voluptate occaecat consequat adipisicing duis anim excepteur. Officia labore quis elit ut ut sit ex tempor ut eu dolor nostrud. Irure exercitation fugiat est adipisicing eiusmod ut veniam aliqua nostrud consequat eiusmod eiusmod irure cillum.
Laboris laboris adipisicing do veniam cupidatat dolor quis ipsum amet eiusmod velit eiusmod et.Aliqua do qui aliquip id incididunt do.Nulla et cupidatat officia proident irure adipisicing ad aliquip officia aliquip.`,
        },
        {
            question: 'Question 6',
            answer: `
            Irure est qui excepteur culpa in excepteur dolor nulla voluptate do anim proident occaecat. Enim ex excepteur enim excepteur nostrud deserunt ad enim culpa laboris officia. Velit laborum ad labore culpa magna eu laborum ipsum fugiat culpa duis excepteur nisi.
            Laboris sint commodo Lorem minim consectetur laboris. Proident cupidatat mollit sit qui non aliquip ex. Pariatur labore do amet ex aliqua voluptate magna ea. Tempor veniam sunt qui sint cillum dolore mollit anim aliqua sint ex. Commodo incididunt culpa do ullamco anim labore. Nostrud incididunt occaecat Lorem commodo nisi qui anim eiusmod dolore labore id ut exercitation pariatur. Est irure adipisicing officia dolore.`,
        },
    ];

    return (
        <div className="faq-section">
            {data.map((item, index) => (
                <div className="faq-item" key={index}>
                    <h3 onClick={() => toggleQuestion(index)} className="faq-question">
                        {item.question}
                        {selectedQuestion === index ? (
                            <img className="faq-arrow" src={ArrowUp} alt="arrowup" />
                        ) : (
                            <img className="faq-arrow" src={ArrowDown} alt="arrowdown" />
                        )}
                    </h3>
                    <p className={`faq-answer ${selectedQuestion === index ? 'open' : ''}`}>
                        {item.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FAQPage;