import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import "../style/Posts.scss";
import { api } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const posts = await api.get("/posts");
      console.log(posts.data["articles"]);
      setPosts(posts.data["articles"]);
    }

    getPosts();
  }, []);

  return (
    <div className="posts">
      <h1 className="posts-heading">Story</h1>
      <div className="post-container">
        {!posts
          ? "<h1>Loading...</h1>"
          : posts.map(post => {
              return (
                <Card
                  className="post-card"
                  key={post._id}
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    style={{ height: "200px" }}
                    className="card-img"
                    variant="top"
                    src={post.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                      By {post.author} <br /> Posted:{post.createdAt}
                    </Card.Text>
                    <a href={`/post/${post._id}`} className="card-a">
                      READ
                    </a>
                  </Card.Body>
                </Card>
              );
            })}
      </div>
    </div>
  );
};

export default Posts;
