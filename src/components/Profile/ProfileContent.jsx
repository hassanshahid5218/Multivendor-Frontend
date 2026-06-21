import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../server";
import styles from "../../styles/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdTrackChanges } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import {
  deleteUserAddress,
  loadUser,
  updatUserAddress,
  updateUserInformation,
} from "../../redux/actions/user.js";
import { Country, State } from "country-state-city";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { getAllOrdersOfUser } from "../../redux/actions/order.js";
import { backend_url } from "../../server";

const ProfileContent = ({ active }) => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: "clearMessages" });
    }
  }, [error, successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInformation(name, email, phoneNumber, password));
  };

 const handleImage = async (e) => {
  const file = e.target.files[0];

  setAvatar(URL.createObjectURL(file));

  const formData = new FormData();

  formData.append("file", file);

  axios
    .put(
      `${server}/user/update-avatar`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      dispatch(loadUser());
      toast.success("Avatar updated successfully!");
    })
    .catch((error) => {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    });
};
 console.log(user)
  return (
    <div className="w-full">
      {/* profile */}
      {/* Profile */}
{active === 1 && (
  <div className="w-full bg-white rounded-2xl shadow-lg p-5 sm:p-8">

    {/* Profile Image */}
    <div className="flex justify-center">
      <div className="relative">
        <img
          src={`${user.avatar.url}`}
          className="
            w-[130px] h-[130px]
            sm:w-[150px] sm:h-[150px]
            rounded-full object-cover
            border-4 border-[#87986a]
            shadow-md
          "
          alt=""
        />

        <div
          className="
            w-10 h-10
            bg-[#87986a]
            text-white
            rounded-full
            flex items-center justify-center
            cursor-pointer
            absolute
            bottom-2 right-2
            hover:bg-[#6d7d54]
            transition
            shadow-md
          "
        >
          <input
            type="file"
            id="image"
            className="hidden"
            onChange={handleImage}
          />

          <label htmlFor="image" className="cursor-pointer">
            <AiOutlineCamera size={20} />
          </label>
        </div>
      </div>
    </div>


    {/* Form */}
    <div className="mt-10">
      <form onSubmit={handleSubmit} aria-required={true}>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              className="
                w-full
                border border-gray-300
                rounded-lg
                px-4 py-3
                outline-none
                focus:ring-2
                focus:ring-[#87986a]
                transition
              "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="text"
              className="
                w-full
                border border-gray-300
                rounded-lg
                px-4 py-3
                outline-none
                focus:ring-2
                focus:ring-[#87986a]
                transition
              "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

        </div>


        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Phone Number
            </label>

            <input
              type="number"
              className="
                w-full
                border border-gray-300
                rounded-lg
                px-4 py-3
                outline-none
                focus:ring-2
                focus:ring-[#87986a]
                transition
              "
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>


          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Enter Your Password
            </label>

            <input
              type="password"
              className="
                w-full
                border border-gray-300
                rounded-lg
                px-4 py-3
                outline-none
                focus:ring-2
                focus:ring-[#87986a]
                transition
              "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        </div>


        {/* Update Button */}
        <div className="flex justify-center sm:justify-start mt-8">

          <input
            className="
              w-full sm:w-[220px]
              h-[45px]
              bg-[#727069]
              text-white
              rounded-lg
              font-semibold
              cursor-pointer
              hover:bg-[#6d7d54]
              transition-all
              shadow-md
            "
            required
            value="Update Profile"
            type="submit"
          />

        </div>

      </form>
    </div>

  </div>
)}

      {/* order */}
      {active === 2 && (
  <div className="w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 overflow-x-auto">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      My Orders
    </h2>

    <div className="min-w-[700px]">
      <AllOrders />
    </div>
  </div>
)}

      {/* Refund */}
     {active === 3 && (
  <div className="w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 overflow-x-auto">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Refund Requests
    </h2>

    <div className="min-w-[700px]">
      <AllRefundOrders />
    </div>
  </div>
)}

      {active === 5 && (
  <div className="w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 overflow-x-auto">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Track Your Orders
    </h2>

    <div className="min-w-[700px]">
      <TrackOrder />
    </div>
  </div>
)}

      {/* Change Password */}
      {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )}

      {/*  user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
  return params.row.status === "Delivered"
    ? "greenColor"
    : "redColor";
},
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const eligibleOrders =
    orders && orders.filter((item) => item.status === "Processing refund");

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  eligibleOrders &&
    eligibleOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const TrackOrder = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChangeHandler = async (e) => {
    e.preventDefault();

    await axios
      .put(
        `${server}/user/update-user-password`,
        { oldPassword, newPassword, confirmPassword },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="w-full flex justify-center px-3 sm:px-0">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-5 sm:p-8">

        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Change Password
        </h1>

        <form
          aria-required
          onSubmit={passwordChangeHandler}
          className="space-y-5"
        >

          {/* Old Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Old Password
            </label>

            <input
              type="password"
              className="
                w-full
                border border-gray-300
                rounded-lg
                px-4 py-3
                focus:outline-none
                focus:ring-2
                focus:ring-[#87986a]
                transition
              "
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              New Password
            </label>

            <input
              type="password"
              className="
                w-full
                border border-gray-300
                rounded-lg
                px-4 py-3
                focus:outline-none
                focus:ring-2
                focus:ring-[#87986a]
                transition
              "
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              className="
                w-full
                border border-gray-300
                rounded-lg
                px-4 py-3
                focus:outline-none
                focus:ring-2
                focus:ring-[#87986a]
                transition
              "
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              h-[45px]
              bg-[#727069]
              text-white
              rounded-lg
              font-semibold
              hover:bg-[#8e8a7b]
              transition-all
              shadow-md
            "
          >
            Update Password
          </button>

        </form>
      </div>
    </div>
  );
};

const Address = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addressTypeData = [
    { name: "Default" },
    { name: "Home" },
    { name: "Office" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (addressType === "" || country === "" || city === "") {
      toast.error("Please fill all the fields!");
    } else {
      dispatch(
        updatUserAddress(
          country,
          city,
          address1,
          address2,
          zipCode,
          addressType
        )
      );

      setOpen(false);
      setCountry("");
      setCity("");
      setAddress1("");
      setAddress2("");
      setZipCode(null);
      setAddressType("");
    }
  };

  const handleDelete = (item) => {
    dispatch(deleteUserAddress(item._id));
  };

  return (
    <div className="w-full px-3 sm:px-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

        <h1 className="text-2xl font-semibold text-gray-800">
          My Addresses
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="
            bg-[#87986a]
            text-white
            px-5 py-2
            rounded-lg
            hover:bg-[#6d7d54]
            transition
            shadow-md
            w-full sm:w-auto
          "
        >
          + Add New
        </button>
      </div>

      {/* Address List */}
      <div className="space-y-4">

        {user &&
          user.addresses.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                shadow-md
                p-4 sm:p-5
                flex flex-col sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
              "
            >

              {/* Type */}
              <div className="font-semibold text-gray-700">
                {item.addressType}
              </div>

              {/* Address */}
              <div className="text-sm text-gray-600 flex-1">
                {item.address1} {item.address2}
              </div>

              {/* Phone */}
              <div className="text-sm text-gray-600">
                {user?.phoneNumber}
              </div>

              {/* Delete */}
              <button
                onClick={() => handleDelete(item)}
                className="
                  text-red-500
                  hover:text-red-700
                  transition
                  self-end sm:self-auto
                "
              >
                Delete
              </button>

            </div>
          ))}

      </div>

      {/* Empty State */}
      {user && user.addresses.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No saved addresses found.
        </div>
      )}

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3">

          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto">

            {/* Close */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            <h1 className="text-xl font-semibold text-center mb-5">
              Add New Address
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Country */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Country
                </label>

                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-[#87986a]"
                >
                  <option value="">Select country</option>
                  {Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  City
                </label>

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-[#87986a]"
                >
                  <option value="">Select city</option>
                  {State.getStatesOfCountry(country).map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address 1 */}
              <input
                type="text"
                placeholder="Address 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#87986a]"
              />

              {/* Address 2 */}
              <input
                type="text"
                placeholder="Address 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#87986a]"
              />

              {/* Zip */}
              <input
                type="number"
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#87986a]"
              />

              {/* Address Type */}
              <select
                value={addressType}
                onChange={(e) => setAddressType(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#87986a]"
              >
                <option value="">Select type</option>
                {addressTypeData.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  bg-[#87986a]
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-[#6d7d54]
                  transition
                "
              >
                Save Address
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
export default ProfileContent;