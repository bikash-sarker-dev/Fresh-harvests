"use client";
import { ProductContext } from "@/contextApi/prodcutContext";
import { useCookies } from "next-client-cookies";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import SingIn from "../auth/SingIn";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  let [token, setToken] = useState(null);
  let [user, setUser] = useState(null);
  const [scroll, setScroll] = useState(false);
  const cookies = useCookies();
  const { cartAdd, setCartAdd } = useContext(ProductContext);
  console.log(cartAdd);

  //   logout function working
  const handleSignOut = () => {
    let token = cookies.remove("token");
    let person = cookies.remove("user");

    toast.success("successfully sing Out");
    router.push("/");
    router.refresh();
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    let token = cookies.get("token");
    let man = cookies.get("user");
    setToken(token);
    setUser(man);
  }, [user, token]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5);
    });
  });

  //   card product delete function

  const handleCardDelete = (det) => {
    let deleteProduct = cartAdd.filter((cart) => cart.id !== det.id);
    setCartAdd(deleteProduct);
  };

  //   the nav all lists
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
      {token && (
        <li>
          <Link href={"/admin-dashboard"}>Dashboard</Link>
        </li>
      )}
      {user && (
        <li>
          <Link href={"/admin-dashboard"}>Dashboard</Link>
        </li>
      )}
    </>
  );

  if (!pathname.includes("dashboard")) {
    return (
      <div className={`bg-fh-gray-20 ${scroll ? "sticky w-full " : ""} `}>
        <div className="container mx-auto">
          <div className={`navbar py-4`}>
            <div className="navbar-start ">
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

              {/* Cart drawer */}
              <div className="drawer w-auto z-20 drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}

                  <label htmlFor="my-drawer-4" className="drawer-button">
                    <div className="flex items-center gap-1">
                      <div className="indicator">
                        <FaShoppingCart className="text-2xl" />
                        <span className="badge badge-sm w-5 h-5 text-white font-bold indicator-item bg-fh-primary rounded-full">
                          {cartAdd.length}
                        </span>
                      </div>
                      <span className="hidden lg:block ml-1">Cart</span>
                    </div>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}

                    {cartAdd.map((myProduct) => (
                      <li key={myProduct?.id} className="my-1">
                        <div className=" bg-white p-3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 z-20">
                          <div className=" w-16 bg-gray-200 flex items-center justify-center">
                            <img
                              className="w-50 "
                              src={myProduct?.images[0]}
                              alt="product"
                            />
                          </div>

                          <div className="p-1 flex items-center justify-between">
                            <h3 className=" font-semibold text-gray-800 mb-1">
                              {myProduct?.productName}
                            </h3>
                            {/* Price Section - Assuming there would be one */}
                            <div className="flex items-center justify-between">
                              <button
                                onClick={() => handleCardDelete(myProduct)}
                                className="px-3 py-1 bg-fh-primary text-white text-sm rounded hover:bg-red-800 transition-colors"
                              >
                                X
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* authentication conditional */}
              {token || user ? (
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
  } else {
    return <></>;
  }
};

export default Navbar;
