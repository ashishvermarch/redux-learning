import { FC, useEffect } from "react";
import Loader from "../components/UI/Loader";
import PostCard from "../components/PostCard";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getPosts } from "../feature/posts/postSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { data, error, loading } = useAppSelector((state) => state);

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
