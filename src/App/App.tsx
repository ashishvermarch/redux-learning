import { FC, useEffect } from "react";
import { getPosts } from "../store/actions/action-creators/postAction";
import { useAppSelector, useAppDispatch } from "../hooks/useTypedSelector";
import Loader from "../components/UI/Loader";
import PostCard from "../components/PostCard";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { loading, data } = useAppSelector((state) => state.posts);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {loading ? (
            <Loader />
          ) : (
            data &&
            data.map((post: any) => (
              <div className="col-md-6 col-lg-4" key={post.id}>
                <PostCard post={post} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
