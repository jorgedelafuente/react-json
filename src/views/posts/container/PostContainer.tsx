import { useAppSelector, type RootState } from '../../../store';
import { useGetPostsQuery, useGetUsersQuery } from '../../../services/apiSlice';
import { Header, Footer } from '../../../components/layout';
import PostList from '../components/PostList';
import Spinner from '../../../components/spinner/Spinner/Spinner';

function PostContainer() {
  const { isLoading: postsIsLoading, isError: postsIsError } =
    useGetPostsQuery();

  const {
    data: allUsers,
    isLoading: usersIsLoading,
    isError: usersIsError,
  } = useGetUsersQuery();

  const allPosts = useAppSelector((state: RootState) => state.posts.all_posts);

  const isLoading = postsIsLoading && usersIsLoading;
  const isError = usersIsError && postsIsError;
  const isFetched = allPosts && allUsers;

  return (
    <>
      <Header />
      {isLoading && <Spinner />}
      {isError && (
        <p>There was an error retrieving the data. Try again later.</p>
      )}
      {isFetched && <PostList allPosts={allPosts} allUsers={allUsers} />}
      <Footer allPostsAmount={allPosts.length} />
    </>
  );
}

export default PostContainer;
