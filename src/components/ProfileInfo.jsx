/* eslint-disable no-unused-vars */
import React from "react";
import "../components/ProfileInfo.css";

function ProfileInfo() {
  return (
    <>
      <section className="profile-section">
        <img src="/src/assets/cbum.jpg" alt="Profile" className="profile-pic" />
        <h2 className="profile-name">Chris Bumstead</h2>
      </section>
    </>
  );
}

export default ProfileInfo;
