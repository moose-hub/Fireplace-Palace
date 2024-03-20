import { Card } from './cardSectionComponents';
import './CardSection.css';
import HIW1 from '../../assets/how-it-works-1.png';
import HIW2 from '../../assets/how-it-works-2.png';
import HIW3 from '../../assets/how-it-works-3.png';

export function CardSection({ title }) {
  const cardData = [
    {
      image: HIW1,
      title: 'Give us a call ...',
      desc: "Call us and book in a 'Design Consultation' on a date and time to suit you.",
    },
    {
      image: HIW2,
      title: 'We come to you ...',
      desc: 'We come to your home to do an assessment of the space and to style your preference.',
    },
    {
      image: HIW3,
      title: 'We recommend ...',
      desc: 'We send you a bespoke set of fireplace recommendations.',
    },
  ];

  return (
    <section className="contact__cards">
      <h2 className="contact__cards-header">{title}</h2>
      <div className="contact__cards-wrapper">
        {cardData.map((card, index) => {
          return (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              desc={card.desc}
            />
          );
        })}
      </div>
    </section>
  );
}
