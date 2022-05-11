import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import PostDetails from "./PostDetails";
import PostsPreview from "./PostsPreview";

const RouterConfig = ({ posts }) => {
  return (
    <Routes>
      <Route path="/" element={<PostsPreview posts={posts} />} />
      <Route path="/:id" element={<PostDetails posts={posts} />} />
      <Route path="/about" element={<About posts={posts} />} />
    </Routes>
  );
};
export default RouterConfig;
