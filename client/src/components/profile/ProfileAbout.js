import PropTypes from "prop-types";
import React, { Fragment } from "react";

const ProfileAbout = ({
  profile: {
    bio,
    interests,
    user: { name }
  }
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary"> Bio</h2>
        <p>{bio}</p>
        <div className="line" />
      </Fragment>
    )}
    <h2 className="text-primary"> Interests</h2>
    <div className="interests">
      {interests.map((interest, index) => (
        <div key={index} className="p-1">
          <i className="" /> {interest}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;