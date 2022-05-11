import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const PostsPreview = ({ posts }) => {
  return (
    <div>
      {posts && <Header post={posts[posts.length - 1]} />}
      {posts.map((post) => (
        <div className="cardbody" key={post.sys.id}>
          <img src={post.fields.image.fields?.file.url} alt="" width="100%" />
          <p>{post.fields.shortDescription}</p>
          <p className="author">
            {/* Author: {post.fields.author} - created on {post.sys.createdAt} */}
            Author: {post.fields.author}
          </p>
          <Link to={`../${post.sys.id}`}>
            <button id="btn-card"> Read full article</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPreview;

// how to create a card body - example
/* <div class="card">
  <img src="img.jpg" alt="John" style="width:100%">
  <h1>John Doe</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
</div> */
