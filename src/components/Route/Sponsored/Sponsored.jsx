import React from 'react'
import styles from '../../../styles/styles'

const Sponsored = () => {
  return (
    <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
      <div className="flex justify-between w-full">
      <div className="flex items-start">
      <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />

        </div>

        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/pk/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        </div>
    </div>
  )
}

export default Sponsored