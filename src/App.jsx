import PostsLists from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsLists 
        isPosting={modalIsVisible} 
        onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;

