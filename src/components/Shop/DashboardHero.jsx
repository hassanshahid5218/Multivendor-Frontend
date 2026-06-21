// import React, { useEffect, useState } from "react";
// import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
// import styles from "../../styles/styles";
// import { Link } from "react-router-dom";
// import { MdBorderClear } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersOfShop } from "../../redux/actions/order";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { Button } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";

// const DashboardHero = () => {
//   const dispatch = useDispatch();
//   const { orders } = useSelector((state) => state.order);
//   const { seller } = useSelector((state) => state.seller);
//   const { products } = useSelector((state) => state.products);

//   useEffect(() => {
//      dispatch(getAllOrdersOfShop(seller._id));
//      dispatch(getAllProductsShop(seller._id));
//   }, [dispatch]);

//   const availableBalance = seller?.availableBalance.toFixed(2);

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.row.status === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },

//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },

//     {
//       field: " ",
//       flex: 1,
//       minWidth: 150,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/dashboard/order/${params.id}`}>
//               <Button>
//                 <AiOutlineArrowRight size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   orders && orders.forEach((item) => {
//     row.push({
//         id: item._id,
//         itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
//         total: "US$ " + item.totalPrice,
//         status: item.status,
//       });
//   });
//   return (
//     <div className="w-full p-8">
//       <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
//       <div className="w-full block 800px:flex items-center justify-between">
//         <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//           <div className="flex items-center">
//             <AiOutlineMoneyCollect
//               size={30}
//               className="mr-2"
//               fill="#00000085"
//             />
//             <h3
//               className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//             >
//               Account Balance{" "}
//               <span className="text-[16px]">(with 10% service charge)</span>
//             </h3>
//           </div>
//           <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">${availableBalance}</h5>
//           <Link to="/dashboard-withdraw-money">
//             <h5 className="pt-4 pl-[2] text-[#077f9c]">Withdraw Money</h5>
//           </Link>
//         </div>

//         <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//           <div className="flex items-center">
//             <MdBorderClear size={30} className="mr-2" fill="#00000085" />
//             <h3
//               className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//             >
//               All Orders
//             </h3>
//           </div>
//           <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{orders && orders.length}</h5>
//           <Link to="/dashboard-orders">
//             <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
//           </Link>
//         </div>

//         <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//           <div className="flex items-center">
//             <AiOutlineMoneyCollect
//               size={30}
//               className="mr-2"
//               fill="#00000085"
//             />
//             <h3
//               className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//             >
//               All Products
//             </h3>
//           </div>
//           <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{products && products.length}</h5>
//           <Link to="/dashboard-products">
//             <h5 className="pt-4 pl-2 text-[#077f9c]">View Products</h5>
//           </Link>
//         </div>
//       </div>
//       <br />
//       <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
//       <div className="w-full min-h-[45vh] bg-white rounded">
//       <DataGrid
//         rows={row}
//         columns={columns}
//         pageSize={10}
//         disableSelectionOnClick
//         autoHeight
//       />
//       </div>
//     </div>
//   );
// };

// export default DashboardHero;


import React, { useEffect } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineMoneyCollect,
  AiOutlineShopping,
} from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DashboardHero = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (seller?._id) {
      dispatch(getAllOrdersOfShop(seller._id));
      dispatch(getAllProductsShop(seller._id));
    }
  }, [dispatch, seller?._id]);

  const availableBalance = seller?.availableBalance?.toFixed(2) || "0.00";

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 180,
      flex: 0.8,
    },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.7,
      cellClassName: (params) =>
        params.row.status === "Delivered"
          ? "greenColor"
          : "redColor",
    },

    {
      field: "itemsQty",
      headerName: "Items",
      type: "number",
      minWidth: 120,
      flex: 0.5,
    },

    {
      field: "total",
      headerName: "Amount",
      minWidth: 140,
      flex: 0.7,
    },

    {
      field: "action",
      headerName: "Details",
      minWidth: 120,
      flex: 0.5,
      sortable: false,

      renderCell: (params) => (
        <Link to={`/order/${params.id}`}>
          <Button>
            <AiOutlineArrowRight size={20} />
          </Button>
        </Link>
      ),
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        status: item.status,
        itemsQty: item.cart.reduce(
          (acc, product) => acc + product.qty,
          0
        ),
        total: `$${item.totalPrice}`,
      });
    });


  return (
    <div className="w-full p-4 md:p-8 bg-gray-50 min-h-screen">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h1>


      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Balance Card */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl duration-300">

          <div className="flex items-center gap-4">

            <div className="bg-green-100 p-3 rounded-full">
              <AiOutlineMoneyCollect
                size={30}
                className="text-green-600"
              />
            </div>


            <div>
              <h3 className="text-gray-500">
                Account Balance
              </h3>

              <p className="text-2xl font-bold text-gray-800">
                ${availableBalance}
              </p>
            </div>

          </div>


          <Link
            to="/dashboard-withdraw-money"
            className="inline-block mt-5 text-green-600 hover:underline"
          >
            Withdraw Money
          </Link>

        </div>


        {/* Orders Card */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl duration-300">

          <div className="flex items-center gap-4">

            <div className="bg-blue-100 p-3 rounded-full">
              <MdBorderClear
                size={30}
                className="text-blue-600"
              />
            </div>


            <div>
              <h3 className="text-gray-500">
                Total Orders
              </h3>

              <p className="text-2xl font-bold text-gray-800">
                {orders?.length || 0}
              </p>
            </div>

          </div>


          <Link
            to="/dashboard-orders"
            className="inline-block mt-5 text-blue-600 hover:underline"
          >
            View Orders
          </Link>

        </div>


        {/* Products Card */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl duration-300">

          <div className="flex items-center gap-4">

            <div className="bg-purple-100 p-3 rounded-full">
              <AiOutlineShopping
                size={30}
                className="text-purple-600"
              />
            </div>


            <div>
              <h3 className="text-gray-500">
                Total Products
              </h3>

              <p className="text-2xl font-bold text-gray-800">
                {products?.length || 0}
              </p>
            </div>

          </div>


          <Link
            to="/dashboard-products"
            className="inline-block mt-5 text-purple-600 hover:underline"
          >
            View Products
          </Link>

        </div>

      </div>


      {/* Orders Table */}
      <div className="mt-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Latest Orders
        </h2>


        <div className="bg-white rounded-xl shadow-md p-4">

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            autoHeight
            disableSelectionOnClick
          />

        </div>

      </div>

    </div>
  );
};

export default DashboardHero;