import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
  useTitle("CreatePost");
  const navigate = useNavigate();
  const postRef = collection(db, "posts");

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const document = {
      title: e.target.title.value,
      description: e.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };

    await addDoc(postRef, document);
    navigate("/");
    toast.success("Post Created");
  };

  return (
    <div className="create">
      <div className="heading">
        <h1>Add New Post </h1>
      </div>
      <form onSubmit={handleCreatePost} className="createPost">
        <input
          className="title"
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <textarea
          className="textarea"
          name="description"
          id="text"
          placeholder="Description"
          required
        ></textarea>
        <button type="submit" className="Btn">
          Create
        </button>
      </form>
    </div>
  );
};
