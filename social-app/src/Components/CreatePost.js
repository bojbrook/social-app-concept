const CreatePost = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const message = e.target.postMessage.value;
    e.target.postMessage.value = '';
    const postData = {
      body: message,
      sender: 'bojbrook',
      timestamp: Date.now(),
    };
    props.addPost(postData);
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
