import './App.css';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [posts, setPost] = useState([
    {
      body: 'Hello',
      comments: [],
      creator: 'bojbrook',
      id: 1657501731271,
      timestamp: 165750173127,
    },
  ]);
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
      <h1 className="Title">Posts</h1>
      {showCreatePost && <CreatePost addPost={addPost} />}
      <Button onClick={createPostButtonHandler}>Create Post</Button>
      {postsArr}
    </div>
  );
}

export default App;
