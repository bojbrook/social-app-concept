import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.module.css';

const Comment = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardComment}>{props.text}</h3>
    </div>
  );
};

Comment.propTypes = {
  text: PropTypes.string,
};

export default Comment;
