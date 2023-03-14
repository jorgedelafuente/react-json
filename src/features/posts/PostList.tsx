import { useEffect } from 'react';

import type { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deletePost, fetchPosts } from './postSlice';

import Card from '../../components/card/Card';
import './PostList.scss';

export function PostList() {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state: RootState) => state.posts.all_posts);
  const loadingState = useAppSelector(
    (state: RootState) => state.posts.loading
  );

  useEffect(() => {
    if (allPosts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, allPosts]);

  const handleDelete = (postId: number) => {
    dispatch(deletePost(postId));
  };

  if (loadingState === 'pending') return <p>...Loading</p>;
  if (loadingState === 'failed')
    return <p>There was an error retrieving the data. Try again later.</p>;

  return (
    <>
      <div className="postlist-wrapper">
        {allPosts.map((post) => (
          <div key={post.id}>
            <Card
              id={post.id}
              title={post.title}
              userId={post.userId}
              body={post.body}
              cardAction={
                <button onClick={() => handleDelete(post.id)}>
                  Delete Post
                </button>
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}
