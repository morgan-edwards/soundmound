import React from 'react';
import SidebarUserItem from './sidebar_user_item';

const Sidebar = (props) => {
  const followers = props.followers.map(user => {
    if (user) return <SidebarUserItem prefix={"follower"}
                                      key={`follower-${user.id}`}
                                      user={user} />;
  });

  const followees = props.followees.map(user => {
    if (user) return <SidebarUserItem prefix={"followee"}
                                      key={`followee-${user.id}`}
                                      user={user} />;
  });

  return (
    <section className="sidebar">
      <div className="sidebar-sticky-container">
        <div className="followers">

          <h1>{`${props.followers.length} Followers`}</h1>
          <ul className="sidebar-box">
            {followers}
          </ul>
        </div>

        <div className="followees">
          <h1>{`${props.followees.length} Followees`}</h1>
          <ul className="sidebar-box sidebar-box-last">
            {followees}
          </ul>
        </div>
      </div>

    </section>
  );
};




export default Sidebar;
