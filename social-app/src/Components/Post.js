import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Comment from './Comment';
import PropTypes from 'prop-types';

const Post = (props) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const { comments, creator, body, id } = props.data;

  const createCommentHandler = () => {
    setShowCommentForm(!showCommentForm);
  };

  const onSubmitCommentHandler = (e) => {
    e.preventDefault();
    const newComment = e.target.commentInput.value;
    e.target.commentInput.value = '';

    const commentObj = {
      body: newComment,
      creator: 'bojbrook',
      timestamp: Date.now(),
      id: Date.now(),
      isComment: true,
      rootComment: id,
    };

    comments.push(commentObj);
  };

  const showCommentsHandler = () => {
    setShowComments(!showComments);
  };

  const commentForm = () => {
    return (
      <form onSubmit={onSubmitCommentHandler}>
        <input name="commentInput" />
        <Button variant="primary" type="submit">
          Post
        </Button>
      </form>
    );
  };

  return (
    <Card bg="secondary" style={{ width: '18rem' }}>
      <Card.Header as="h5">{creator}</Card.Header>
      <Card.Body>
        <Card.Text>{body}</Card.Text>
        {showCommentForm && commentForm()}
        {showComments &&
          comments.map((item) => {
            return <Comment key={id} text={item.body} />;
          })}
        <Button
          variant="dark"
          style={{ margin: '5px' }}
          onClick={showCommentsHandler}
        >
          View Comments
        </Button>
        <Button
          variant="dark"
          style={{ margin: '5px' }}
          onClick={createCommentHandler}
        >
          Comment
        </Button>
        {showCommentForm && commentForm()}
      </Card.Body>
    </Card>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    comments: PropTypes.array,
    creator: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default Post;
