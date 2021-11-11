import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "harshal",
    userImg: "http://links.papareact.com/3ke",
    img: "http://links.papareact.com/3ke",
    caption: "This is dope",
  },
  {
    id: "124",
    username: "Elon",
    userImg: "http://links.papareact.com/3ke",
    img: "http://links.papareact.com/3ke",
    caption: "This is Fantastic",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
