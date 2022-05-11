import React from "react";
import { useState, useEffect } from "react";
import { client } from "./client";
import RouterConfig from "./components/RouterConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

const App = () => {
  const [posts, setPosts] = useState();
  const [error, setError] = useState();
  console.log(posts);

  useEffect(() => {
    client
      .getEntries({ order: "sys.createdAt" })
      .then((response) => {
        console.log(response.items);
        setPosts(response.items);
      })
      .catch((error) => setError(error));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <header>
        <h1 className="h1">YOUR BLOG FOR MUSIC AND EVENTS</h1>
      </header>
      <main>
        {!posts && "Loading...."}
        {error && (
          <h2>
            Oh No! Something went wrong! This is the error: {error.message}
          </h2>
        )}
        <div className="block">{posts && <RouterConfig posts={posts} />}</div>
      </main>
    </div>
  );
};

export default App;

// rendert nur wenn post ein truthy value hat - ternary operator
//
