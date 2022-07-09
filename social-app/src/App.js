import './App.css';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import { useState } from 'react';

function App() {
  const [posts, setPost] = useState([]);
  const [showCreatePost, setCreatePost] = useState(false);

  const createPostButtonHandler = () => {
    setCreatePost(!showCreatePost);
  };

  const addPost = (post) => {
    setPost((arr) => [...arr, post]);
  };

  const postsArr = posts.map((item) => (
    <Post key={item.timestamp} body={item.body} />
  ));

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
