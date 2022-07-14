import './App.css';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [posts, setPosts] = useState([
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
    setPosts((arr) => [...arr, post]);
  };

  const deletePost = (id) => {
    if (posts.length === 1) {
      setPosts([]);
      return;
    }
    const tempArr = posts;
    const indexForRemoval = tempArr.findIndex((item) => item.id === id);
    tempArr.splice(indexForRemoval, 1);
    setPosts(tempArr);
  };

  const postsArr = posts.map((item) => (
    <Post deletePost={deletePost} key={item.id} data={item} />
  ));

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
