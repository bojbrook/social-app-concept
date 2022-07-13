import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return <li>{props.text}</li>;
};

Comment.propTypes = {
  text: PropTypes.string,
};

export default Comment;
