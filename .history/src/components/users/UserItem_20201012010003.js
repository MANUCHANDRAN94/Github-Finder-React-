import React from "react";
import PropTypes from "prop-types";
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='profile'
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
