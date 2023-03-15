import { useState } from 'react';
import type { PostModel } from '../../../models/postModels';
import './PostCardContent.scss';

interface CardContentProps extends PostModel {
  cardAction?: JSX.Element;
  userName: string;
  title: string;
  body: string;
  userId: number;
  handleDelete: (postId: number) => void;
}

const PostCardContent = ({
  title,
  body,
  userName,
  userId,
  handleDelete,
  id,
}: CardContentProps): JSX.Element => {
  const [customTitle, setCustomTitle] = useState(title);
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      <div className="card-content">
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
        <p>
          By : <span>{userName}</span> (id: {userId})
        </p>
      </div>
      <div className="card-actions">
        <button aria-label="Delete Post" onClick={() => handleDelete(id)}>
          Delete Post
        </button>
      </div>
    </>
  );
};

export default PostCardContent;
