

import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";

const ShopCreate = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
      avatar,
      zipCode,
      address,
      phoneNumber,
    });

    axios
      .post(`${server}/shop/create-shop`, {
        name,
        email,
        password,
        avatar,
        zipCode,
        address,
        phoneNumber,
      })
      .then((res) => {
        toast.success(res.data.message);

        setName("");
        setEmail("");
        setPassword("");
        setAvatar();
        setZipCode("");
        setAddress("");
        setPhoneNumber("");

        navigate("/shop-login");
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message ||
            error.message ||
            "Something went wrong"
        );
      });
  };

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-[#f2f6ee] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Register as a Seller
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Create your shop and start selling your products.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#cfe1b9] rounded-2xl shadow-xl p-6 sm:p-8">

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Shop Name */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Shop Name
              </label>

              <input
                type="name"
                name="name"
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


            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="number"
                name="phone-number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
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
                        {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>

              <input
                type="address"
                name="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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


            {/* Zip Code */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Zip Code
              </label>

              <input
                type="number"
                name="zipcode"
                required
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                    className="
                      absolute 
                      right-3 
                      top-1/2 
                      -translate-y-1/2 
                      cursor-pointer 
                      text-gray-600 
                      hover:text-gray-900
                    "
                    size={24}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="
                      absolute 
                      right-3 
                      top-1/2 
                      -translate-y-1/2 
                      cursor-pointer 
                      text-gray-600 
                      hover:text-gray-900
                    "
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
                Shop Image
              </label>

              <div className="flex items-center gap-4 flex-wrap">

                <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-white shadow">
                  {avatar ? (
                    <img
                      src={avatar}
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
                  Upload Shop Image

                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>

              </div>
            </div>


            {/* Submit Button */}
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
              Create Shop
            </button>


            {/* Login Link */}
            <div
              className={`${styles.normalFlex} justify-center text-sm sm:text-base pt-2 flex-wrap`}
            >
              <h4 className="text-gray-800">
                Already have an account?
              </h4>

              <Link
                to="/shop-login"
                className="text-gray-700 hover:text-black font-semibold pl-2"
              >
                Sign In
              </Link>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ShopCreate;