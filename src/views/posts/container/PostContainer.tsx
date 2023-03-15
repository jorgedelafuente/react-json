import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  fetchPosts,
  fetchUsers,
  type RootState,
} from '../../../redux';

import { Header, Footer } from '../../../components/layout';
import PostList from '../components/PostList';

function PostContainer() {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector((state: RootState) => state.posts.all_posts);
  const allUsers = useAppSelector((state: RootState) => state.users.all_users);
  const postsLoadingState = useAppSelector(
    (state: RootState) => state.posts.loading
  );
  const usersLoadingState = useAppSelector(
    (state: RootState) => state.users.loading
  );

  useEffect(() => {
    if (allPosts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, allPosts]);

  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, allUsers]);

  return (
    <>
      <Header />
      <PostList
        allPosts={allPosts}
        allUsers={allUsers}
        postsLoadingState={postsLoadingState}
        usersLoadingState={usersLoadingState}
      />
      <Footer allPostsAmount={allPosts.length} />
    </>
  );
}

export default PostContainer;
