import React from "react";
import { ButtonPurple } from "../utilityComponents/buttons";

const UserSection = ({ state, dispatch, handleLogout }) => {
  return (
    <li className="relative">
      {state.userLoad ? (
        <span className="font-semibold">Loading...</span>
      ) : state.username ? (
        <span
          className="cursor-pointer font-bold text-purple-500 hover:text-purple-700"
          onClick={() => dispatch({ type: "TOGGLE_DROPDOWN" })}
        >
          {state.username}
        </span>
      ) : (
        <span>
          <ButtonPurple>
            <a href="/sign-in">Sign In</a>
          </ButtonPurple>
        </span>
      )}
      {state.showDropdown && (
        <span>
          <ul
            id="dropdown"
            className="absolute top-8 flex flex-col gap-2 bg-white px-3 py-2 md:top-10"
          >
            <li className="cursor-pointer">
              <a href="/profile">Profile</a>
            </li>
            <hr />
            <li onClick={handleLogout} className="cursor-pointer">
              Logout
            </li>
          </ul>
        </span>
      )}
    </li>
  );
};

export default UserSection;
