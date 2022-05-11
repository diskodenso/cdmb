import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Header({ post }) {
  //  const newestPost = posts.push(posts.length - 1);
  //  const newestPost = posts.push(
  //    (post) => student.login.uuid === id
  //  );
  // console.log(post);

  return (
    //     <div className="headerContent">
    //       <hr className="solid" />
    //       <div id="img-div">
    //         <img
    //           src={post.fields.image.fields.file.url}
    //           alt=""
    //           width="300"
    //           height="400"
    //         />
    //       </div>
    //       <Link to={`../${post.sys.id}`}>
    //         <h2>{post.fields.shortDescription}</h2>
    //       </Link>
    //       <hr className="solid" />
    //     </div>
    //   );
    // };

    <Card className="text-center">
      <Card.Header>
        <h2>Featured- the newest Article</h2>
      </Card.Header>
      <Card.Body className="header">
        <Card.Title></Card.Title>
        <img
          src={post.fields.image.fields.file.url}
          alt=""
          width="400"
          height="400"
        />
        <Card.Text>{post.fields.shortDescription}</Card.Text>

        <Link to={`../${post.sys.id}`}>
          <button id="btn-card"> Read full article</button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">{post.sys.createdAt}</Card.Footer>
    </Card>
  );
}
