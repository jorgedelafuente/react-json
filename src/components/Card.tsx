import type { PostModel } from '../models/postModels';
import './Card.scss';

interface CardProps extends PostModel {
  cardAction?: JSX.Element;
}

const Card = ({
  id,
  title,
  userId,
  body,
  cardAction,
}: CardProps): JSX.Element => {
  return (
    <div key={id} className="card">
      <h3>{title}</h3>
      <p>
        {id} - {userId}
      </p>
      <p>{body}</p>
      {cardAction}
    </div>
  );
};

export default Card;
