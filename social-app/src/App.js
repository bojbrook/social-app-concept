import './App.css';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import { useState } from 'react';

function App() {
  const [posts, setPost] = useState([]);
  const [showCreatePost, setCreatePost] = useState(true);

  const createPostButtonHandler = () => {
    setCreatePost(!showCreatePost);
  };

  // const addComment = (newComment) => {
  //   const rootID = newComment.rootComment;
  //   const parentPost = posts.find((element) => element.id === rootID);
  //   console.log(posts);
  //   console.log(parentPost);
  //   // parentPost.comments.push(newComment);
  // };

  const addPost = (post) => {
    //Adds function for adding comment to post object
    post = { ...post };
    setPost((arr) => [...arr, post]);
  };

  const postsArr = posts.map((item) => <Post key={item.id} data={item} />);

  return (
    <div className="App">
      <h1>Posts</h1>
      {showCreatePost && <CreatePost addPost={addPost} />}
      <button onClick={createPostButtonHandler}>Create Post</button>
      {postsArr}
    </div>
  );
}

export default App;
