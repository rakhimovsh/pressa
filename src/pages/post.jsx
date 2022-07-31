import React from 'react';
import PostInfo from '../components/postInfo';
import PostBody from '../components/postBody';

function Post() {
  return (
    <div className="container" style={{ display: 'flex' }}>
      <PostInfo />
      <PostBody />
    </div>
  );
}

export default Post;