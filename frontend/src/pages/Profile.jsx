import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 600px;
  margin: 50px auto 0; 
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  justify-content: center;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  font-family: "Cinzel", serif;
  font-size: 2rem;
  font-weight: bold;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  text-transform: uppercase;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Cinzel", serif;
  color: #333;
  position: relative;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    color: #666;
  }

  .edit-icon {
    position: absolute;
    top: 0;
    right: -30px;
    font-size: 1.2rem;
    color: #000;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  a,
  button {
    text-decoration: none;
    font-family: "Cinzel", serif;
    font-size: 1rem;
    color: #fff;
    background-color: #000;
    padding: 0.8rem 1rem;
    text-align: center;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #444;
    }
  }
`;

const EditEmailModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;

    h3 {
      margin-bottom: 1rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      font-family: "Cinzel", serif;
      font-size: 1rem;
      padding: 0.8rem 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background-color: #000;
      color: #fff;

      &:hover {
        background-color: #444;
      }

      &.cancel {
        background-color: #ccc;
        margin-left: 1rem;

        &:hover {
          background-color: #aaa;
        }
      }
    }
  }
`;

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  // Extract initials
  const getInitials = (name) => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
  };

  // Handle logout
  const handleLogout = () => {
    // Perform logout logic (e.g., clear session, redirect to login)
    alert("You have been logged out.");
    navigate("/login");
  };

  // Handle edit email
  const handleEditEmail = () => {
    setIsEditing(true);
    setNewEmail(user.email);
  };

  const handleSaveEmail = () => {
    setUser((prevUser) => ({ ...prevUser, email: newEmail }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <ProfileContainer>
      <AvatarSection>
        <Avatar>{getInitials(user.name)}</Avatar>
        <UserInfo>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <FaEdit className="edit-icon" onClick={handleEditEmail} />
        </UserInfo>
      </AvatarSection>
      <NavigationButtons>
        <Link to="/orders">My Orders</Link>
        <Link to="/customer-care">Customer Care</Link>
        <button onClick={handleLogout}>Logout</button>
      </NavigationButtons>
      {isEditing && (
        <EditEmailModal>
          <div className="modal-content">
            <h3>Edit Email</h3>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter new email"
            />
            <button onClick={handleSaveEmail}>Save</button>
            <button className="cancel" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </EditEmailModal>
      )}
    </ProfileContainer>
  );
};

export default Profile;
