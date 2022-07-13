import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

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
    console.log(postData);
    props.addPost(postData);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <textarea name="postMessage" />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default CreatePost;
