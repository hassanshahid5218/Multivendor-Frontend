// import React from 'react'
// import styles from '../../styles/styles'
// import ShopInfo from "../../components/Shop/ShopInfo.jsx";
// import ShopProfileData from "../../components/Shop/ShopProfileData.jsx";

// const ShopHomePage = () => {
//   return (
//     <div className={`${styles.section} bg-[#f5f5f5]`}>
//          <div className="w-full flex py-10 justify-between">
//           <div className="w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
//             <ShopInfo isOwner={true} />
//           </div>
//           <div className="w-[72%] rounded-[4px]">
//             <ShopProfileData isOwner={true} />
//           </div>
//          </div>
//     </div>
//   )
// }

// export default ShopHomePage

import React from "react";
import styles from "../../styles/styles";
import ShopInfo from "../../components/Shop/ShopInfo.jsx";
import ShopProfileData from "../../components/Shop/ShopProfileData.jsx";

const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f2f6ee] min-h-screen`}>
      <div className="w-full flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
        
        {/* Shop Sidebar */}
        <div className="w-full lg:w-[25%] bg-white rounded-md shadow-sm 
                        overflow-y-auto lg:h-[90vh] 
                        lg:sticky lg:top-10">
          <ShopInfo isOwner={true} />
        </div>

        {/* Shop Content */}
        <div className="w-full lg:w-[75%] rounded-md">
          <ShopProfileData isOwner={true} />
        </div>

      </div>
    </div>
  );
};

export default ShopHomePage;