import './Card.scss';

interface CardProps {
  cardContent?: JSX.Element;
}

const Card = ({ cardContent }: CardProps): JSX.Element => {
  return <div className="card">{cardContent}</div>;
};

export default Card;
