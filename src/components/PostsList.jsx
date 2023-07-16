import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from './NewPost';

function PostsLists(){
return (
  <>
    <NewPost />
    <ul className= {classes.posts}>
  <Post author="setayesh" body="React.js is awsome!"/>
  <Post author="manual" body="Check out the full course!"/>
    </ul>
  </>
  );
}

 
export default PostsLists;