import React from 'react';

const FollowButton = (props) => {
  const isFollowed = props.followees.includes(props.userId);
  const text = isFollowed ? 'Following' : 'Follow';
  const action = isFollowed ?
                  props.unfollow :
                  props.follow;
  const styleClass = isFollowed ? 'following-button' : 'follow-button';
  
  if (props.userId !== props.currentUser.id) {
    return (
      <button onClick={() => action(props.currentUser.id, props.userId)}
        className={`${styleClass}`}>
        {text}
      </button>
    );
  } else {
    return (<div style={{display: "none"}}></div>);
  }
};

export default FollowButton;
