import './App.css';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import { useState } from 'react';

function App() {
  const [posts, setPost] = useState([]);

  const addPost = (post) => {
    setPost((arr) => [...arr, post]);
  };

  const postsArr = posts.map((item) => (
    <Post key={Math.floor(Math.random() * 10)} body={item} />
  ));

  return (
    <div className="App">
      <h1>Posts</h1>
      <CreatePost addPost={addPost} />
      {postsArr}
    </div>
  );
}

export default App;
