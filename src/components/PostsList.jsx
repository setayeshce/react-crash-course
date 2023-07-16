import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import { useState } from "react";

function PostsLists() {
  const [enteredBody, setEnteredBody] = useState('')
  const [enterAuthor , setEnteredAuthor] = useState('');


  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authoreChangeHandler(event){
    setEnteredAuthor(event.target.value);

  }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authoreChangeHandler} />
      <ul className={classes.posts}>
        <Post author={enterAuthor} body={enteredBody} />
        <Post author="manual" body="Check out the full course!" />
      </ul>
    </>
  );
}


export default PostsLists;