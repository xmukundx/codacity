import React from "react";
import { ButtonPurple } from "../utilityComponents/buttons";
import Link from "next/link";

const UserSection = ({ state, dispatch, handleLogout }) => {
  return (
    <li className="relative">
      {state.userLoad ? (
        <span className="font-semibold">Loading...</span>
      ) : state.username ? (
        <span
          className="cursor-pointer font-bold primary-color hover:text-purple-700"
          onClick={() => dispatch({ type: "TOGGLE_DROPDOWN" })}
        >
          {state.username}
        </span>
      ) : (
        <span>
          <ButtonPurple>
            <Link href="/sign-in">Sign In</Link>
          </ButtonPurple>
        </span>
      )}
      {state.showDropdown && (
        <span>
          <ul
            id="dropdown"
            className="absolute top-8 -right-2 flex flex-col gap-2 bg-white pl-2 pr-5  pb-2 md:top-10"
          >
            <li className="cursor-pointer duration-300 hover:primary-color active:scale-[0.98]">
              <Link href="/profile">Profile</Link>
            </li>
            <hr />
            <li onClick={handleLogout} className="cursor-pointer duration-300 hover:primary-color active:scale-[0.98]">
              Logout
            </li>
          </ul>
        </span>
      )}
    </li>
  );
};

export default UserSection;
