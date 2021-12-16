import React from 'react';

const PostForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        name="title"
        value={props.formValues.title}
        placeholder="Enter a title ya chump!"
        onChange={props.change}
      />
      <input
        type="text"
        name="content"
        value={props.formValues.content}
        placeholder="Gotta have some content ya chump!"
        onChange={props.change}
      />
      <input type="submit" value="Submit!" />
    </form>
  )
}

export default PostForm;
