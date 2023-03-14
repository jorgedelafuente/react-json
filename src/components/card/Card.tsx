import type { PostModel } from '../../models/postModels';
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
      <div>
        <h3>{title}</h3>
        <p>
          post id {id} - user id {userId}
        </p>
        <p>{body}</p>
      </div>
      <div>{cardAction}</div>
    </div>
  );
};

export default Card;
