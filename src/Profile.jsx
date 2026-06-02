import React from "react";

function Profile({ user }) {
  if (!user) return null;

  return (
    <div className="card">
      <h2>{user.name}</h2>

      <p>
        <strong>Email:</strong>{" "}
        {user.email}
      </p>

      <p>
        <strong>Role:</strong>{" "}
        {user.role}
      </p>
    </div>
  );
}

export default Profile;