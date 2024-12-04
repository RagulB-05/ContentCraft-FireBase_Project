import { useEffect, useRef, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard } from "../components/PostCard";
import { useTitle } from "../hooks/useTitle";
import { SkeletonCard } from "../components/SkeletonCard";

export const HomePage = () => {
  useTitle("Home");
  const [posts, setPosts] = useState(new Array(1).fill(false));
  const [toggle, setToggle] = useState(false);

  const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPost() {
      const data = await getDocs(postsRef.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getPost();
  }, [postsRef, toggle]);
  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <PostCard
            key={index}
            post={post}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};
