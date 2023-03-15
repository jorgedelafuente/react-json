import type { PostModel } from '../../../models/postModels';
import type { UserModel } from '../../../models/userModels';
import { deletePost } from '../../../redux/postSlice';
import { useAppDispatch } from '../../../redux';

import Card from '../../../components/card/Card';
import Spinner from '../../../components/spinner/Spinner/Spinner';
import './PostList.scss';
import PostCardContent from './PostCardContent';

interface IPostList {
  allPosts: PostModel[];
  allUsers: UserModel[];
  postsLoadingState: string;
  usersLoadingState: string;
}

const PostList = ({
  allPosts,
  allUsers,
  postsLoadingState,
  usersLoadingState,
}: IPostList) => {
  const dispatch = useAppDispatch();

  const handleDelete = (postId: number) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className="postlist-wrapper">
      {postsLoadingState === 'pending' && <Spinner />}

      {postsLoadingState === 'failed' && (
        <p>There was an error retrieving the data. Try again later.</p>
      )}

      {postsLoadingState === 'succeeded' &&
        usersLoadingState === 'succeeded' &&
        allPosts.map((post) => (
          <div key={post.id}>
            <Card
              cardContent={
                <PostCardContent
                  title={post.title}
                  id={post.id}
                  userId={post.userId}
                  userName={allUsers[post.userId - 1]?.username}
                  body={post.body}
                  handleDelete={handleDelete}
                />
              }
            />
          </div>
        ))}
    </div>
  );
};

export default PostList;
