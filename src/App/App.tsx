import { FC, useEffect } from "react";
import { postActions } from "../store";
import { useSelector, useAppDispatch } from "../hooks/useTypedSelector";
import Loader from "../components/UI/Loader";
import PostCard from "../components/PostCard";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postActions.getPosts());
  }, []);

  const { loading, data } = useSelector((state) => state.posts);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {loading ? (
            <Loader />
          ) : (
            data &&
            data.map((post) => (
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
