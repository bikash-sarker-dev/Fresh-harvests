"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
const Register = () => {
  const router = useRouter();
  const [fullName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // Handle login logic here
    let payload = { fullName, email, password };

    try {
      let res = await axios.post(
        `https://code-commando.com/api/v1/users/register`,
        payload
      );
      let data = await res.data;

      if (data.success) {
        setLoading(false);
        const theme = cookieStore.set("user", JSON.stringify(data.data));
        document.getElementById("register").close();
        toast.success("successfully ", { duration: 3000 });
        setPassword("");
        setUserName("");
        setEmail("");
        window.location.reload();
        router.push("/");
      }
    } catch (error) {
      toast.error("authentication failed");
    }
  };
  return (
    <div>
      <div className=" flex items-center justify-center   p-2">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Register
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="text"
                placeholder="Enter your username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fh-primary focus:border-transparent"
                value={fullName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
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

            <button
              type="submit"
              className="w-full bg-fh-primary hover:bg-fh-primary text-white py-2 px-4 rounded-md transition duration-200"
            >
              {loading ? "loading......" : "Register"}
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
              Already have an account?
              <button
                onClick={() => {
                  document.getElementById("register").close();
                  return document.getElementById("login").showModal();
                }}
                className="text-fh-primary underline hover:underline cursor-pointer"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
