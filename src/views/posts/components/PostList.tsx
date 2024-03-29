import { Card } from '../../../components/layout';
import PostCardContent from './PostCardContent';

import type { UserModel } from '../../../models/userModels';
import type { PostModel } from '../../../models/postModels';

import './PostList.scss';

interface IPostList {
  allPosts: PostModel[];
  allUsers: UserModel[];
}

const PostList = ({ allPosts, allUsers }: IPostList) => {
  return (
    <div className="postlist-wrapper">
      {allPosts.map((post) => (
        <div key={post.id}>
          <Card
            cardContent={
              <PostCardContent
                title={post.title}
                id={post.id}
                userId={post.userId}
                userName={allUsers[post.userId - 1]?.username}
                body={post.body}
              />
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
