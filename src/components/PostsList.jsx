import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import Modal from "./Modal";
import { useState } from "react";

function PostsLists({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostsHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancle={onStopPosting} onAddPost ={addPostsHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => <Post author ={post.author} body={post.body}/>)}
      </ul>
    </>
  );
}


export default PostsLists;