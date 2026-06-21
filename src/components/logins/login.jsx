
import React from "react";
import { useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      toast.success(res.data.message || "Login Success");
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Login failed. Please try again.";

      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f6ee] flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-md">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Login to Your Account
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Card */}
        <div
          className="bg-[#cfe1b9] rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                type="text"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full 
                  px-4 
                  py-3 
                  rounded-lg 
                  border 
                  border-gray-300 
                  bg-white 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-green-600
                  transition
                "
              />
            </div>


            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    w-full
                    px-4
                    py-3
                    pr-12
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-600
                    transition
                  "
                />

                {visible ? (
                  <AiOutlineEye
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-900"
                    size={24}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-900"
                    size={24}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>


            {/* Remember & Forgot */}
            <div
              className={`${styles.normalFlex} justify-between items-center flex-wrap gap-2`}
            >
              <div className={`${styles.normalFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 rounded border-gray-300 text-green-600"
                />

                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>


              <div className="text-sm">
                <a
                  href=".forget-password"
                  className="font-medium text-gray-700 hover:text-black transition"
                >
                  Forgot your password?
                </a>
              </div>
            </div>


            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                h-12
                rounded-lg
                text-white
                font-semibold
                bg-[#87986a]
                hover:bg-[#6f8054]
                transition-all
                duration-300
                shadow-md
              "
            >
              Login
            </button>


            {/* Sign Up */}
            <div
              className={`${styles.normalFlex} justify-center text-sm sm:text-base pt-2 flex-wrap`}
            >
              <h4 className="text-gray-800">
                Don't have an account?
              </h4>

              <Link
                to="/sign-up"
                className="text-gray-700 hover:text-black font-semibold pl-2"
              >
                Sign Up
              </Link>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}