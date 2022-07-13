import React from 'react';
import PropTypes from 'prop-types';

const CreatePost = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const message = e.target.postMessage.value;
    e.target.postMessage.value = '';
    const postData = {
      body: message,
      creator: 'bojbrook',
      timestamp: Date.now(),
      comments: [],
      id: Date.now(),
    };
    props.addPost(postData);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <textarea name="postMessage" />
        <button>Submit</button>
      </form>
    </>
  );
};

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default CreatePost;
