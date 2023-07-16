import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import { useState } from "react";
import Modal from "./Modal";


function PostsLists() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('')
  const [enterAuthor, setEnteredAuthor] = useState('');

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authoreChangeHandler(event) {
    setEnteredAuthor(event.target.value);

  }

  return (
    <>
      {
        modalIsVisible
          ? (<Modal onClose={hideModalHandler}>
            <NewPost
              onBodyChange={bodyChangeHandler}
              onAuthorChange={authoreChangeHandler}
            />
          </Modal>
         ) : false}

      <ul className={classes.posts}>
        <Post author={enterAuthor} body={enteredBody} />
        <Post author="manual" body="Check out the full course!" />
      </ul>
    </>
  );
}


export default PostsLists;