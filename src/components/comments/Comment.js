import React from 'react';
import PropTypes from 'prop-types';

function Comment({ id, comment, deleteComment }) {
  return (
    <>
      <p>{comment}</p>
      <button onClick={deleteComment.bind(null, id)}>Delete Comment</button>
    </>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;
