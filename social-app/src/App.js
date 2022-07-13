import './App.css';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [posts, setPost] = useState([
    {
      body: 'Hi',
      creator: 'bojbrook',
      timestamp: 1657753111683,
      comments: Array(0),
      id: 1657753111683,
    },
  ]);
  const [showCreatePost, setCreatePost] = useState(true);

  const createPostButtonHandler = () => {
    setCreatePost(!showCreatePost);
  };

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
      <Button onClick={createPostButtonHandler}>Create Post</Button>
      {postsArr}
    </div>
  );
}

export default App;
