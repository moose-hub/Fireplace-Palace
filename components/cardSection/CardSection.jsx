import { Card } from './cardSectionComponents';
import './CardSection.css';

export function CardSection({ title, cardData }) {

  return (
    <section className="contact__cards-section">
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
