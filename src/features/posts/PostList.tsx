import { useEffect } from 'react';

import type { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPosts } from './postActions';
import Card from '../../components/Card';

// import { decrement, increment } from './postSlice';

export function PostList() {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state: RootState) => state.posts.all_posts);

  useEffect(() => {
    if (allPosts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, allPosts]);

  const handleDelete = (postId: number) => {
    console.log('TCL: handleDelete -> postId', postId);
    // dispatch(deletePost(postId));
  };

  return (
    <div>
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
}