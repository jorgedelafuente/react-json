import type { RootState } from '../../../app/store';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchPosts } from '../../state/postSlice';

import { Header, Footer } from '../../../components/layout';
import PostList from '../components/PostList';
import { useEffect } from 'react';

function PostContainer() {
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

  return (
    <>
      <Header />
      <PostList allPosts={allPosts} loadingState={loadingState} />
      <Footer allPostsAmount={allPosts.length} />
    </>
  );
}

export default PostContainer;
