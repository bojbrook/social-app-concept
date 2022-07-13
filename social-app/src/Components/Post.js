import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import Comment from './Comment';

const Post = (props) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const createCommentHandler = () => {
    setShowCommentForm(!showCommentForm);
  };

  const onSubmitCommentHandler = (e) => {
    e.preventDefault();
    const newComment = e.target.commentInput.value;
    e.target.commentInput.value = '';

    const commentObj = {
      body: newComment,
      user: 'bojbrook',
      timestamp: Date.now(),
      id: Date.now(),
      isComment: true,
      rootComment: props.data.id,
    };

    props.data.comments.push(commentObj);
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
    <Card bg="secondary" style={{ margin: '15px', width: '20%' }}>
      <Card.Header as="h5">{props.data.creator}</Card.Header>
      <Card.Body>
        <Card.Text>{props.data.body}</Card.Text>
        {showComments &&
          props.data.comments.map((item) => {
            return <Comment comment={item} />;
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

export default Post;
