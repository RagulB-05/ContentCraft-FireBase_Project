import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PageNotFound } from "../pages/PageNotFound";
import { CreatePost } from "../pages/CreatePost";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="createpost"
          element={
            <ProtectedRoutes>
              <CreatePost />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
