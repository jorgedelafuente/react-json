import { useState, useCallback } from 'react';
import type { PostModel } from '../../../models/postModels';
import { useAppDispatch } from '../../../redux';
import { deletePost } from '../../../redux/postSlice';
import './PostCardContent.scss';

interface CardContentProps extends PostModel {
  cardAction?: JSX.Element;
  userName: string;
  title: string;
  body: string;
  userId: number;
}

const PostCardContent = ({
  title,
  body,
  userName,
  userId,
  id,
}: CardContentProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [customTitle, setCustomTitle] = useState(title);
  const [isEditable, setIsEditable] = useState(false);

  const handleDelete = useCallback(
    (postId: number) => {
      dispatch(deletePost(postId));
    },
    [dispatch]
  );

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
