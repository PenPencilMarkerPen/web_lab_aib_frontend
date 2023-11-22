import React, { useState } from "react";
import PostItem from "./zadanieTwoItem";
import PostForm from "./zadanieThree";
const Post = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: "User", text: "text", like: true },
    { id: 2, username: "User1", text: "text1", like: false },
    { id: 3, username: "User2", text: "text2", like: true },
    { id: 4, username: "User3", text: "text3", like: false },
  ]);
  const likePost = (postclick) => {
    if (postclick) {
      // setPosts([posts[post.id]]);
      const update = posts.map((post) => {
        if (post.id === postclick.id) return { ...post, like: !post.like };
        return post;
      });
      setPosts(update);
    }
  };
  const removePost = (post) => {
    console.log(post.id);
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="postFlex">
      <div>
        <PostForm create={createPost} posts={posts} />
      </div>
      <div>
        {posts.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            likes={likePost}
            remove={removePost}
          />
        ))}
      </div>
    </div>
  );
};
export default Post;
