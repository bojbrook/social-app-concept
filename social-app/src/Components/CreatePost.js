const CreatePost = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const message = e.target.postMessage.value;
    e.target.postMessage.value = '';
    props.addPost(message);
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

export default CreatePost;
