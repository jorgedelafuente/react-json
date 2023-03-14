import type { PostModel } from '../../../models/postModels';
import { deletePost } from '../../state/postSlice';
import { useAppDispatch } from '../../../app/hooks';

import Card from '../../../components/card/Card';
import './PostList.scss';

interface IPostList {
  allPosts: PostModel[];
  loadingState: string;
}

const PostList = ({ allPosts, loadingState }: IPostList) => {
  const dispatch = useAppDispatch();

  const handleDelete = (postId: number) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className="postlist-wrapper">
      {loadingState === 'pending' && <p>...Loading</p>}

      {loadingState === 'failed' && (
        <p>There was an error retrieving the data. Try again later.</p>
      )}

      {allPosts.map((post) => (
        <div key={post.id}>
          <Card
            id={post.id}
            title={post.title}
            userId={post.userId}
            body={post.body}
            cardAction={
              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
