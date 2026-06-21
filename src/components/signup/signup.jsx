


import React from "react";
import { useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    axios
      .post(`${server}/user/create-user`, newForm, config)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          setName("");
          setEmail("");
          setPassword("");
          setAvatar(null);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          error.response?.data?.message
            ? error.response.data.message
            : "Check your Internet connection"
        );
      });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="min-h-screen bg-[#f2f6ee] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Create New Account
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Join us by filling your details below.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#cfe1b9] rounded-2xl shadow-xl p-6 sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                type="text"
                name="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            {/* Avatar Upload */}
            <div>
              <label
                htmlFor="file-input"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Profile Image
              </label>

              <div className="flex items-center gap-4 flex-wrap">

                <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-white shadow">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-14 w-14 text-gray-500" />
                  )}
                </span>

                <label
                  htmlFor="file-input"
                  className="
                    cursor-pointer
                    px-4
                    py-2
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    text-sm
                    font-medium
                    text-gray-700
                    hover:bg-gray-100
                    transition
                  "
                >
                  Upload Profile Image

                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>

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
              Create Account
            </button>

            {/* Login Link */}
            <div
              className={`${styles.normalFlex} justify-center text-sm sm:text-base pt-2 flex-wrap`}
            >
              <h4 className="text-gray-800">
                Already have an account?
              </h4>

              <Link
                to="/log-in"
                className="text-gray-700 hover:text-black font-semibold pl-2"
              >
                Log In
              </Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}