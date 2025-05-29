"use client";
import Link from "next/link";
import { useState } from "react";
import Register from "./Register";
import SocialLogin from "./SocialLogin";
const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };
  return (
    <div>
      <div className=" flex items-center justify-center   p-2">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Login
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fh-primary focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fh-primary focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex f sm:flex-row items-center justify-between ">
              <div className="flex items-center  sm:mb-0">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="h-4 w-4 text-fh-primary focus:ring-fh-primary border border-fh-primary rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-shadow-fh-block hover:shadow-fh-block hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-fh-primary hover:bg-fh-primary text-white py-2 px-4 rounded-md transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="relative flex items-center my-3">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">
              Or Sign in with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <SocialLogin />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => {
                  history.pushState(null, "", "http://localhost:3000/rigister");
                  document.getElementById("login").close();
                  return document.getElementById("register").showModal();
                }}
                href="/signup"
                className="text-fh-primary underline hover:underline cursor-pointer"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
      <dialog id="register" className="modal">
        <div className="modal-box max-w-md">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="py-2">
            <Register />
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SingIn;
