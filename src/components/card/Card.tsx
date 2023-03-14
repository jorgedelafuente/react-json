import type { PostModel } from '../../models/postModels';
import './Card.scss';

interface CardProps extends PostModel {
  cardAction?: JSX.Element;
  userName: string;
}

const Card = ({
  id,
  title,
  userId,
  body,
  cardAction,
  userName,
}: CardProps): JSX.Element => {
  return (
    <div className="card">
      <div>
        <h3>{title}</h3>
        <p>By : {userName}</p>
        <p>Post ID : {id}</p>
        <p>{body}</p>
      </div>
      <div>{cardAction}</div>
    </div>
  );
};

export default Card;
