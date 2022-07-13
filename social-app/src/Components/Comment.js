import styles from './Comment.module.css';
const Comment = (props) => {
  return (
    <div className={styles.card}>
      <h5 className={styles.cardComment}>{props.comment.body}</h5>
      <p className={styles.cardUser}>{props.comment.user}</p>
    </div>
  );
};

export default Comment;
