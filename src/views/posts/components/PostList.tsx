import type { PostModel } from '../../../models/postModels';
import type { UserModel } from '../../../models/userModels';
import { deletePost } from '../slices/postSlice';
import { useAppDispatch } from '../../../store';

import Card from '../../../components/card/Card';
import PostCardContent from './PostCardContent';
import './PostList.scss';

interface IPostList {
  allPosts: PostModel[];
  allUsers: UserModel[];
}

const PostList = ({ allPosts, allUsers }: IPostList) => {
  const dispatch = useAppDispatch();

  const handleDelete = (postId: number) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className="postlist-wrapper">
      {allUsers &&
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
