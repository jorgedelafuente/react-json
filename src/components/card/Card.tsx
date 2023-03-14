import { useState } from 'react';
import type { PostModel } from '../../models/postModels';
import './Card.scss';

interface CardProps extends PostModel {
  cardAction?: JSX.Element;
  userName: string;
}

const Card = ({
  title,
  body,
  cardAction,
  userName,
}: CardProps): JSX.Element => {
  const [customTitle, setCustomTitle] = useState(title);
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className="card">
      <div>
        <div className="card-title">
          {!isEditable ? (
            <h3>{customTitle}</h3>
          ) : (
            <>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
              />
            </>
          )}

          <img
            onClick={() => setIsEditable(!isEditable)}
            src="/pencil.svg"
            alt=""
            height="15px"
            width="15px"
          />
        </div>
        <p>{body}</p>
        <p>By : {userName}</p>
      </div>
      <div>{cardAction}</div>
    </div>
  );
};

export default Card;
