"use client";
import { useCookies } from "next-client-cookies";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import SingIn from "../auth/SingIn";

const Navbar = () => {
  let [users, setUser] = useState(null);
  const cookies = useCookies();

  const handleSignOut = () => {
    let token = cookies.remove("token");
    setUser(token);
    window.location.replace();
  };

  useEffect(() => {
    let token = cookies.get("token");
    setUser(token);
  }, [users]);

  let links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/products"}>Shop</Link>
      </li>
      <li>
        <Link href={"/"}>About Us</Link>
      </li>
      <li>
        <Link href={"/blog/id"}>BLog</Link>
      </li>
    </>
  );
  return (
    <div className="bg-fh-gray-20">
      <div className="container mx-auto">
        <div className="navbar py-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-x-10"
              >
                {links}
              </ul>
            </div>
            <Link href={"/"}>
              <Image
                src={"/assets/logo.png"}
                width={170}
                height={80}
                alt="logo image"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-7">{links}</ul>
          </div>
          <div className="navbar-end space-x-6">
            <div className="lg:flex items-center gap-1 hidden lg:block">
              <MdOutlineFavorite className="text-xl" />
              <span>Favorites</span>
            </div>

            <div className="flex items-center gap-1">
              <div className="indicator">
                <FaShoppingCart className="text-2xl" />
                <span className="badge badge-sm w-5 h-5 text-white indicator-item bg-fh-primary rounded-full">
                  0
                </span>
              </div>
              <span className="hidden lg:block">Cart</span>
            </div>
            {users ? (
              <>
                {" "}
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm md:btn-md btn-outline"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={() => {
                    return document.getElementById("login").showModal();
                  }}
                  className="btn btn-sm md:btn-md  btn-outline"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
        <dialog id="login" className="modal">
          <div className="modal-box max-w-md">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="py-2">
              <SingIn />
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;
