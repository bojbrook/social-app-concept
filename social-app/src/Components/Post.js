import { Button, Card } from 'react-bootstrap';
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
      creator: 'bojbrook',
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
        <button>Post</button>
      </form>
    );
  };

  return (
    <Card bg="secondary" style={{ width: '18rem' }}>
      <Card.Header as="h5">{props.data.creator}</Card.Header>
      <Card.Body>
        <Card.Text>{props.data.body}</Card.Text>
        {showCommentForm && commentForm()}
        {showComments &&
          props.data.comments.map((item) => {
            return <Comment text={item.body} />;
          })}
        <Button onClick={showCommentsHandler}>View Comments</Button>
        <Button onClick={createCommentHandler}>Comment</Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
