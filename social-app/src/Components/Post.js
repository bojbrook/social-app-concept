import { Button, Card } from 'react-bootstrap';
const Post = (props) => {
  return (
    <Card bg="secondary" style={{ width: '18rem' }}>
      <Card.Header as="h5">{props.data.creator}</Card.Header>
      <Card.Body>
        <Card.Text>{props.data.body}</Card.Text>
        <Button variant="primary">Comment</Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
