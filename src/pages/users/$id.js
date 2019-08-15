import React from 'react';

function User(props) {
  const { params: { id }} = props.match;

  return (
    <div>I am user {id}</div>
  );
}

export default User;
