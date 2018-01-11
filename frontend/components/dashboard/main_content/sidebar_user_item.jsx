import React from 'react';
import { Link } from 'react-router-dom';
import FollowButtonContainer from '../buttons/follow_button_container';

const SidebarUserItem = ({ user, prefix }) => {
  return (
    <li key={`${prefix}-${user.id}`}>
      <div className="sidebar-user-info">

        <Link to={`/artists/${user.id}`}>
          <div className="circle-img-frame">
            <img src={user.imageUrl} className="small-circle-img" />
          </div>
        </Link>

        <div className="name-follows">

          <Link to={`/artists/${user.id}`}>
            {user.username}
          </Link>

          <div className="socials">
            <span>
              <i className="fa fa-users" aria-hidden="true"></i>
              {user.followerIds.length}
            </span>
            <span>
              <i className="fa fa-music" aria-hidden="true"></i>
              {user.songIds.length}
            </span>
          </div>

        </div>

      </div>

      <FollowButtonContainer userId={user.id} />
    </li>
  );
};

export default SidebarUserItem;
