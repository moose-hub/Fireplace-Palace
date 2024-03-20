import Image from "next/image";
import "./card.css"

export function Card({ image, title, desc }) {
    return (
        <article className="contact__card">
            <Image src={image}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="empty"
                alt="How it works 3"
                className="contact__card-img"
            />
            <div className="contact__card-info">
                <span className="contact__card-title">{title}</span>
                <p className="contact__card-desc">{desc}</p>
            </div>
        </article>
    )
}