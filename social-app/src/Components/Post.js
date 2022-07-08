const Post = (props) => {
  return <li key={props.key}>{props.body}</li>;
};

export default Post;
