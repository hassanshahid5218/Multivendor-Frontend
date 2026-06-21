// navigation Data
 import cloths from './brand.png'
 import shoes from './shoes.png';
 import gift from './gift.png';
 import computer from './programming.png'
 import mobile from './online-banking.png'
 import cosmetics from './products.png'
 import petcare from './pet-care.png'
 import accessories from './accessories.png'
 import gadgets from './game-controller.png'
 import others from './delivery-box.png'
export const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Best Selling",
      url: "/best-selling",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "Events",
      url: "/events",
    },
    {
      title: "FAQ",
      url: "/faq",
    },
  ];
  
  // branding data
  export const brandingData = [
    {
      id: 1,
      title: "Free Shipping",
      Description: "From all orders over 100$",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H5.63636V24.1818H35"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M34.9982 1H11.8164V18H34.9982V1Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M11.8164 7.18164H34.9982"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Daily Surprise Offers",
      Description: "Save up to 25% off",
      icon: (
        <svg
          width="32"
          height="34"
          viewBox="0 0 32 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M30.7 2L29.5 10.85L20.5 9.65"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Affortable Prices",
      Description: "Get Factory direct price",
      icon: (
        <svg
          width="32"
          height="35"
          viewBox="0 0 32 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M16 28V22"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Secure Payments",
      Description: "100% protected payments",
      icon: (
        <svg
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
          <path
            d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
            stroke="#FFBB38"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
          ></path>
        </svg>
      ),
    },
  ];
  
  // categories dat
 
  export const categoriesData = [
    {
      id: 1,
      title: "Computers and Laptops",
      subTitle: "",
      image_Url:computer,
    },
    {
      id: 2,
      title: "cosmetics and body care",
      subTitle: "",
      image_Url:cosmetics,
    },
    {
      id: 3,
      title: "Accesories",
      subTitle: "",
      image_Url:accessories},
    {
      id: 4,
      title: "Cloths",
      subTitle: "",
      image_Url:cloths,
    },
    {
      id: 5,
      title: "Shoes",
      subTitle: "",
      image_Url:shoes,
    },
    {
      id: 6,
      title: "Gifts",
      subTitle: "",
      image_Url:gift,
    },
    {
      id: 7,
      title: "Pet Care",
      subTitle: "",
      image_Url: petcare,
    },
    {
      id: 8,
      title: "Mobile and Tablets",
      subTitle: "",
      image_Url:mobile
    },
    {
      id: 9,
      title: "Gadgets",
      subTitle: "",
      image_Url:gadgets
     },
    {
      id: 10,
      title: "Others",
      subTitle: "",
      image_Url:others,
    },
  ];
  
  // product Data
  export const productData = [
    {
      id: 1,
      category:"Computers and Laptop",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "data:image/jpeg;base64,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",
        },
        {
          public_id: "test",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgX5ZY18xCn8lnVTQXEHapPrPT5zB6J5yzew&s",
        },
      ],
      shop: {
        name: "Apple inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 35,
      stock: 10,
    },
    {
      id: 2,
      category:"Mobile and Tablets",
      name: "Iphone 17 pro max 256 gb ssd and 8 gb ram silver colour",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "data:image/jpeg;base64,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",
        },
        {
          public_id: "test",
          url: "https://www.bestmobile.pk/mobile_images/Original_1761187243-Apple-iPhone-17-Pro-Max.jpeg",
        },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 80,
      stock: 10,
      category:"Mobile & Tablets"
    },
    {
      id: 1,
      category:"Computers and Laptop",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "data:image/jpeg;base64,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",
        },
        {
          public_id: "test",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgX5ZY18xCn8lnVTQXEHapPrPT5zB6J5yzew&s",
        },
      ],
      shop: {
        name: "Apple inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 75,
      stock: 10,
      category:"Computers & Laptop"
    },
    {
      id: 4,
      category:"Others",
      name: "New Fashionable Watch for men 2023 with multiple colors",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
      ],
      shop: {
        name: "Shahriar Watch House",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      category:"Others"
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 12,
      stock: 10,
    },
    {
      id: 5,
      category:"Shoes",
      name: "New Trend shoes for gents with all sizes",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "data:image/jpeg;base64,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",
        },
        {
          public_id: "test",
          url: "data:image/jpeg;base64,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",
        },
      ],
      shop: {
        name: "Alisha Shoes Mart",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 120,
      discount_price: 89,
      rating: 5,
      total_sell: 49,
      stock: 10,
      category:"Shoes"
    },
    {
      id: 1,
      category:"Music and Gaming",
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUQExMVFRUSFRUVFhYVFhUSFxcVFxYXFxgVFxUYHSggGBomHRUWITEhJSkrLi4uGB81ODMtNygtLysBCgoKDg0OGhAQFzclHyU3MisyMTcuKzMtNy01Ky03KysrNysrNy0rNyswNC03LTcrKzU3NS01LDgtKys1KysvK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQMEBgcIAgH/xABIEAABAwICBwQGBwcCAwkAAAABAAIDBBEFIQYSMUFRYYEHEyJxMkJSkaGxFCNicrLB0TNTgpLC4fBD8SSi0ggXRGR0k6Oz4v/EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/8QAJhEBAQABAwIEBwAAAAAAAAAAAAECAxESIUExobHBIlFhcYGR4f/aAAwDAQACEQMRAD8A3iiIgIiICIiAiIgIiICIiAiKPxLGoIP2srW8r3d/KM0Egiw2ftIpB6Ae/mA23zv8F5g7SaVxsWvF+bPkXBBmiKIodJaWWwbM0OOxr/q3HyDra3S6l0BERAREQEREBERAREQEREBERAREQEREBERAREQFa4niMUEZlleGMbvO88AN55KjjmMR0sRlkPJrR6T3bmtHFafxvFJaqTvpjmPQYPRjHAcTxKCcx3TiecllPeCLZrf6rv8Ao+axgxAm7vEb31neI3457Oi+F4aLkqxmxZjd90Eq9yp2ByPxzUMcdHJVosYaeHvQSXc5WbkD6pGsw8i07Oll6hxOpgzpppGaou6HWL2ge0wOuHN6XC8QVDXbCqkjL2zIIzBG0HiP0QTWEdq8rbCeJkg3uZ9W/wA7ZtPlkti6P6TU1YLwyDWAuY3eF7fNu8cxcc1oHG6S31zRbO0jRsa47HD7LlHUtc+NzZGOLXNN2uaSCDxBCDqdFgnZ5p62stTT2bUAZHY2UDaQNzwNreo3gZ2gIiICIiAiIgIiICIiAiIgIiICIiAqNZVMiY6V51WsBc48AFWWvdPcW7yT6M0+CEgv4Ok2hvMNBv5kcEGOY7ir6mUzSeEC4jYfUZ/1HaT0WMYpirY99yqGkmNhl2NN3b+Sw6WYuNyUEjVYq9525LxCwH0iTyVgxZjoPoZUV7rs8ELTZ0rhl5NHrO/woLKjjZcAMBJ2ZaxKzLDNBqmcA/Rgxp3ygR/D0vgtoaNaH0tE0d0y798r/E8+R9UchZT6DU3/AHW1AF2TRBwGTbvLSeGsRdvnmseeySKQwTNLJG7Qd/MEZEcxkVvpQOl2jbKyK2TZWAmJ/A+yT7J/ug1BVNFiSLggteOLDt9x8Q8jxWG1kBje5h9U7eI3H3LNWBwJY9uq9hLXNO5wNiFj2kNLazvYPdnytrM+GXRBF09Q5jmvY4tewhzXA2IcDcEHiuidAdKBX0webCaOzJmjLxWyeB7Lto6jcucFk3Z3pD9CrWPcbRS2il4arjk8/ddY+WtxQdHoiICIiAiIgIiICIiAiIgIiICIiCOx/Ee4gdIPS9Fg4vdk3pvPIFaU0mxUQsOd3m+Z2lxzLj5kkrPtPMSBl7u/hgbd333D8mW/nWhsfxIzSud6t7AckFhNIXOLjvRrV8aFL6M4JJW1MdLFtefE7cxg9J55Ae8kDegyDs20HdiEuu+7aaI/WOGRedvdsPHidw810TRUjImNijaGMYLNa0WAAVDBcKipYWU8LdVkYsOJ4uJ3knMnmr5AREQEREGuO0rCAyRlY0ZSWjl+8B4HdQCOgWBYvBrMcPaYbfeZ42/DXW89IsO+kU0sG9zTq8njNp94C0rN6NzkWOBN91jZ4PTWCDBrJqqrO2z3NBB1XEZcivIQdE9muMGpw+F7jd8YML951o8gTzLdV3VZQtPdhmJWlqKUnJ7GzNHNp1H+8OZ/KtwoCIiAiIgIiICIiAiIgIiICp1EwY1z3ZBjS4+QFyqix7Tqr1KUt/euDOmbnfBpHVBqLTzGCI3EnxzuLiPvG9ugsOi1qApvS+u72oI3My671DAIPrVv7sV0Z+j0v0x4+tqwCL7Wwj0B/F6XVvBaa0QwQ1lZDS56sj/rCN0TRrPPLIEeZC6qjYGgNAAAAAAyAA2AIPSIiAiIgIiIC597QmFlfUxeqJA4N3eNjZCbebiuglo7teg1cRJ/eQxv+L2f0INZ4r+2eeJB/mAd+aoMqHDeeuauMYb9a48RGf8A4o/7qxQZToLpK6lroJdUOBeInC+rdsvgJvnsJDv4V1CuO6KTVkjd7L2O9zgV2IgIiICIiAiIgIiICIiAiIgLX3ariAYGM9hj5D1yHyctgrSfbLXgyStBuQI4sjfdrH8RQame8uJcdriT719AXloXsINu9gGEXdUVpHohtOw23m0knw7r4rcyw/slw/ucLp+MwM55964ub/ylo6LMEBERAXiaVrGl7nBrWi5c4gADiSdisMexqKkiMsp5NaM3Pd7LR+e5ae0mxqorDrSnVjGbIgfA3mfadzPSyDNMf7U6aG7YGOncPWv3cf8AMRd3QW5rCK/tdrifCIYxuAYXHqXE39yxSrZc2GZVi+h3nP4D9Sgy+Dtfr2m5MT+TowPwkK00k0pfib45O5DHxMLHEP8ACQXXBzFx63FYnMzUFyQ0e7+6kdGHa2u+5IuG532jM7fMe9BZY5TkPbci+qNlwN4HnsUW6M8FkOkLbvb938yoctKCxkJAJzyz9y7KYbgHiFyBIMiORXWuDza9PDJt14o3e9gP5oLxERAREQEREBERAREQEREBc1adP/4mf/1U345F0quZ9LKN89ZJDHa7qqe5OxrQ993Hyv8AIIISKPWyAvbM8hxPBW07WDK4v9kfmpTH5WRWpovRb6R3udvc4qDZHcoNpaJ9rv0amippYHy903UEgcxh1ATqNDA23hbqt256t1m2C9rOHTkNe59O4/vm2b/7jSWjrZc9P1W7SvIlZxKDr+Cdr2h7HNc1wuHNIcCOIIyKp4hWshjdNIbNYLn9BzOxcwaN6S1VE7XpZiG3u6M+KN33ozsPMWPNbBxnTN+IRQN7sxC2vI2+sHPvYEH2bZi/tcgUHzEq59XMZ5NgyY3cxvAc+J3qFxGTWOo3qdwHEqRqJdRlhtOStqSAbTx/mcN/kN3PPggsYsOAGY6Haebv03fKBxzF2RksbZzhtO4fqVeaX493d4Iz4iPG4er9kc1i8FLq+J/p8PZ//Xy89gUJGPkOs8kee33buqy/AAO4AAtqk/HeeJusbIUrQVndwvG92Q8+KC0xGfXkcd17DyGStSUJXkoPccbnEMaLueQ1o4ucQGjqSAussKoxDBFADcQxsjB4hjQ2/wAFyfRVroZY52W14nskbfZrMcHAHlkursGxJlTBFUx+hMxsjeIDhex5jZ0QXiIiAiIgIiICIiAiIgIiIC0ZK/6153yPeb77FxK2dp5jBgg1GGz5rtBG0NHpEc8wOq1RG761v+bkGBY0+8z/ADKs55dVvMq6xYfXv+8VZVoyagj3yr4HqvqqlJFvQSGBwuklDRew8TyPZG7qbDqtl4XDYa5/28ljmieGakYuPHJZzuQ9VvQG/mSspq5NRuqNqC2mcXvsP8G8/wCb7LxjmJCnhLha/osHPd0G1V6KOw1t7vlu/X/ZYPpDVuqqkRRnwtOq07vtv+HwCC1wynLyah+eZ1b73Xzf0+fkriVqm/oga0MaLBosPIKHxKZrL33ILZ2WZyCpwOfM7u4Inykbmgm3M2GXWyk6HBG92KyuLo4XfsYG5Sz8wPVZ9o227sr3cuNTOZ3UWrSQDZHD4SR9uT0nH3KZlvejjdS27YT89v6tW6I4gczFGzk+SMH8SsMTw6pprGogcxpyDxZzP5mkj4qrJCzabk7yTcq4oMYmgNmOuw5Ojf443DeHMOS6zj3NtWdd5fL3qIcbgELf/YVXmTDTGTf6PPJGL8Haso/+wjotH4rTRjVqIBqxSktdHe/czWvqDixwuWnkRuW4f+z23/g6k/8AmiPdDF+qzLHjdnTHLlN21ERFKhERAREQEREBERAREQa07UJD9IjbuEQPUvdf8IWGsH1rB/mxZN2jz3rCPYZG3+r+pYk2cCZh6e8WQYXjP7d/mVYVuxvVSmksWrO7mSo2qF2X4H5oLMK8wqm7yVrTmB4neTc7dTYdVZBTujMeUr+TWjrcn5NQZhhTrDWVQu7x+ezf5cOv6qKhqrCyvaKXK/H5bv8AOaC4xycthfq+k5rg3jsWI6HRtvI/1xZvk3bfqfwqXrq7Wec8hkP1ULXUNz3sLiyQcMgeRCCexKpEbC7ech5qw0Zwpj2yYlVtLqaB2rFGf/EVG0N5tG0/2IUfTRy1jmQB47x5bGAW2zcQN3mM1k2m0rI3R0EP7CiZ3TftSf6sjrbXF1/ceK46mVtmE7+jMpvEBiNc+eV08pu92z2Wt3MaNzR/mZVBz14JQhdJtOhJJNo8ucqTl6cvDlTXqB/hlj3PjJ/jj+sYf+Uj+IrfPYXDbDNb95PK73arP6FoAOsb8nfhK6P7H6Ux4TT32v72To+Z7h8LKrfhjJOtZmiIpaIiICIiAiIgIiICIiDRnaBUkVtQN4ePcGMI+FlilTV+IHyP5hZb2vQlmIFxHhmiY9p3Etuxw6aoPULAJH5eWXTcgudIwJAJBtIz81AxP3HfkVIfSbgtOwqMmbYoLeWMtNj/ALjipvAZLRP5v/pao02cLHoeCusNBaHNPEEHjlb8ggkIJfEeQJ/IfNX8tVqsJ4Cw+Sh4X5np+IL1XTeEDiUHkTL6J1Y66B6DLezJgFdNVuFxRUks3LXtqtHuc73KDqZy4lxNy43JU1oO61LjBG36NF/LrP1vgsb11w0+uplftPJVnRe4bUtjlbI5pcGXIaLZu1Tqg/Z1rX5XU139BJcua9jidocWki+qHOFiwE5PNhbMgAWzxYuQOV5acyu/uY7S72bp6TCI3H6uXbawIa83yuCWHdfcDfVJ5KOqMKkaC46oAaXG7rZC2453u5o83BWRcvUlY8tLS9xDgAQSSCAdYDPgc12x4ydY3PKXwx9VOlpnSyMhjF3yuaxg+08hovyuV1rhNA2CCKnZ6MMbI2+TGho+S0j2HaMmapNe9v1dNdsd9jp3C2XHVaT1e3eFvlYgREWAiIgIiICIiAi8yPABJNgBcngAsVn0+pmyalnuaPXaARfyJBQZYijMO0gpp/2czCfZJ1XfyusVJoML7VNGjWUmvELz0xMjANr22+sjHMgAjm0LniSXeP8AAuu1pXtZ7PHML8QpGXYbvniaM2na6Vg3tO1w3ZnjYNSPeqZddfLr00IKWYzCuKSqseWwryWKm+O+Vs+SCUflc8v7/kraqfdrTuOY2jI71dwxd2xveOBefQaBrAAbn891lZ10znvu43JGzIhthsFtyC3uvt0AX0NQZJoFUtFTJTPNmV1PJTk7tci7PkR5uCg54XRudG8WcxxaRzBsVQcDkQSC0gtIyIIzBB81kL6uKusXubDVAAO1vCya2QcDsa/kenLjx458u1ejDGamPGePb6oO6+aykanAahhsYn9Gkj3hUjg8wGs5ndt9qQiJvvda/RdYi6Wcu3G/pYlyyPs9wj6RiFPE6ISM1u8ex3o900XLn/ZvqgA7SRuOdPRzRyWrl7mlZ3zwfFK4FsEXNxIuTwBFzuado6B0J0Qiw+ItadeWSxmmcLOkdwHssFzZvM3uSSaRZsnKChihYIoY2RsbezGNDWi5uchxJJVwiLEiIiAiIgIiICIiDXPbbXVUNLE+BzmxGQtnLduYHd3O5hNweZatSUukZ9YB3wPvC6dnha9pY9oc1wIc1wDgQdoIORC1xpD2N0kpL6Z7qZx9UfWR3+6SCOjrckGs6jGoywloOtwNvhxUtoXphX0rmPc501K8+OJ5Ly1l7F0ZObSNursPK9xYY32WYlT3LYxOwetCdY25xus6/kCvmBaM4s+LWipXlrSW2k1YXXHBspaSM9uxBv8AwTHaerYZKeVsgbYOAycwnc9hzafMKSWjMBwnE6SJrhhUjX2s+SnqWslkLfWlYH+IkknftKu5dLsXbkKLER96Njh7+5N/egr9o/ZRrl1Xh7QHG7pKYWaHHaXQ7gfsbDutsOmnxuY4sc1zXNNi1wLXA8C05g8itpy4/pDLkykqRfe4GP4taxWjdAsdqn95KY4S62s97wX2+83XefegwEUrgNZ9mA73+G/k3a7oFc0rgw6zCQfaI8X8Md8vNxHks+rOxSqYA+OeKaQ+l3hfGf4XeLW62URJ2a4mDY0ut92SEj8aDEJLuuCbX2kG5OzK99mSr0OHvnkEELHSSOPha0Xd5+XEnJZ1hnZDWyOHe91AzeS4Sv6MZkergtuaJ6J09BH3cLbudbXkdbXeeZGwcgg540m0Mq6EtNRHZj7WkYddlz6pd6ruR27rqHZEuuKqmZIx0cjGvY8Wc1wDmkcCDkVz52qYZS0VWIqZtvA172d5rapc51gAc2iwBsSfSFrWQYiynXmbDQd/Q5rOtCdBJcQphVNkbCxz3taHNc8nUNi7IgWvcdFmeGdj8DSDUVEktvVYBC0+ebne4hBpnB8HqpniCmMrifVjfIAOZsQAPNbU0Z7GGZS18rpHfuoyWjyfL6TuhC2hhWEwUzO7giZG3g0WvzJ2k8yr1G8r81rhuHRQRiGGNkcbdjWANA52G/mrpERgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC5e03rn1mISuiBLpZhHGCA0uuRFEL3yuGj352XTGJVjYYpJnbImOeeeqCbDmtN9jeAfSKuoxCoaHmJ4Md9nfvJe+QDiBYj76Db2AYY2mpoaVuyGNkYO2+qACepuVfoiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIggdNIy+mMTf9Qi/kM/mGr7oXg4paVkYGbiZHfeds9zQ0dFMTQB21VQgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/2Q==",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
      category:"Music and Gaming"
    },
    {
      id: 4,
      category:"Others",
      name: "New Fashionable Watch for men 2023 with multiple colors",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
      ],
      shop: {
        name: "Shahriar Watch House",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 62,
      stock: 10,
    },
    {
      id: 1,
      category:"Music and Gaming",
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
    },
    {
      id: 2,
      category:"Mobile and Tablets",
      name: "Iphone 17 pro max 256 gb ssd and 8 gb ram silver colour",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDhAODQ8PDw0QEA4PDQ0NDw8NDg4NFRIWFxURExMYHTQgGBolGxMTITIhJikrOjouFx8zOD8uNygtLi0BCgoKDQ0OEhANDjcZFRkrNysrKysrLTctKysrNysrKysrKysrKy0rKzctKysrLSsrKysrKysrKystKystKysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAcGAf/EAEEQAAIBAgIDCQ0HBAMAAAAAAAABAgMRBCEFEjEGMkFRYXGRsrMHExQiIzNScnOSocHRNEJTYoGCsRVD4fAkwtL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAXH/2gAMAwEAAhEDEQA/AO0gAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+SlYhlUe3JL/eT5HzESs4rgzy4/wDbfE4d3Wt1uLnpCeAoVqlChQ73GapTlSlVqyhGblKSd7JSiktmTA7gpv0v4/8AJlrv0l8PocP7lm63FQxXgmIqzrUZq8XWm6k4S1orKTzatK+b+6rbTtUiCXvv5l0r6GPf/wA8elfQ15sgnIDcqYlpeLOLfFdfQxweklUn3uS1Z/d4pcnIzQjCU7tWsr3VtiXC2U+Mq96q0pp2vUh03z+XxA9sR156sXJtRS2yexLjJDQ05HWw84vZLUi+ZzSZRqrTlJVacO+qUZtxb1basnvc1xvL9UXJ5XEaPpxppU9VSdSFnlfY38j0eCi1Sgm7tKza2Np2yJBOACgAAAAAAAAAAAAAAAAAAAAA166TkrrgfzOfd0LueLSVVYvDzdPEaqjUSipxqJbG4trPlv05W6DX337X8zifdX3ZYt4+ej8NXnh6FBU41HTm6MqlWUFNuVRZ6qUopJcu3ggutxHc/qYSv32ve6teU1GMpWkmoxgm9VXUW2227LZnfyPdC3W4rE47E0IYmrh8PhpypUKNGU6Tqzg9WUpyi0229Z5u1krLhLPuY7scXHE+CYupUrUpRUoOs3KpTlrRjbWebVpXz9HlLPd33PPCcTLGYWTjKo1KrBQjUTna2sk5KzyXH+mbbRq9yzdXialSWDxc51LarpzqtupFO6cZN5vNLbnm+JHTZzOfbjdyc8JUdWrra19ZynZTqTs0nqpvVSvLK728yXtp1AM6lW2V3nt22KjSzvKh7aHWRV4/djRpY1YOUKjlr06cqqtqxqTtqq21rxlmbukKmdH29LrIg6JHYuZGnpjzEvWpdpE26buk+NJ/A1NMeYl61LtImhW6Qpp0lZK/fIpOyTzjLhLTRMbYeim233qDu83nFPPpK3SHmo+1j1ZFtgYtUoKTu0rNrZdZZEgnABQAAAAAAAAAAAAAAAAAAAAAauN2Pm+pyvd5uKePqrFU3KGI1VGq1DvsKyjsk1dasuX+eDqeKlnJflg+ly+hBDBayvJ25LXZByncduLqYev36u5Npq8px1W0mmoRim8rpO7fAslnfpEquXD0MsP6evSfQP6evSfQBTTfI+hkE0+J9DL/APp69J9H+TCWj16T6P8AJB4rG6Kw3fvC6lBOvGzVTUm3dLJ2WTasrNrgRX0p1MRXjUlFwowqU9SMtsnrJXfSz31bRkZbZdKv8yh0thXRcU7Wc6dmtj8dAe3pq0VbZZW5rGppjzEvWpdpE2aG8h6sf4NbTHmZetS7SJoU+nVKWHUYJuc61OEVFXd2pZ/P9C9wFF06NOEneUYRUm3d3tnmaWiHrKLbu7qV3xum724trLUkAAFAAAAAAAAAAAAAAAAAAAAABp4nzlvy0utI2SHE75fs6xMQAAB8MZGTMZEEUij3TLyUHwqrS6yLyRS7pF5Fe0pdZAeipO8YvjjF/A1dMeYl61LtIm1SVoxXFFL4GpprzEvWpdpE0NfQu9hzQ7MtiuwEUmrJLxm8lbPVeZYkgAAoAAAAAAAAAAAAAAAAAAAAANbE76PPHrExBit9Hnj1icgAHxuwBmEj4557VY+SZBjIpd0nmV7Sl1kXEmUu6N+RXtKXWQHpo7FzI0tN/Z5etS7SJux2LmRo6c+zz9al2kTQ+YHauf8A6ssCq0XXjN+LfKVndOP3XZ58BakgAAoAAAAAAAAAAAAAAAAAAAAANXFb6PPHrE1yHF76PPHrElyUZXIaz2GbZHPMgiUsySUjBpGMpAJMpt0UvJR9rS6yLSUim3RS8lH2tLrID10di5kaOnfs8/WpdpE3o7FzI0NPP/jT56XaRNDT0Hv3zUupMvCm0PScZNu2bio24owlm+XMuSQAAUAAAAAAAAAAAAAAAAAAAAAGpjN9H9v8n3WMMdtj+3+THWJRI5GEpGDkYORBlKRHKR8lIjlIBORTafl5OPtKfWRZzkVGnZeTj7Sn1kB7eOxcyK/dD9lnz0u0iWEdi5kV26P7LU56XaRNDDRbzXO+qy1KjRLzXO+qy3JAABQAAAAAAAAAAAAAAAAAAAAAV+k340M+L9bNfUi1ja0jh3UinDfxd0tmsntjfg4HzpFYqr2NO62q1mudcBKJ3IxciF1vyy6CN1vyy6CCaUiKUiKVZ+jP3WYOq/Rn7rAkkyo0+/Jw9rT6xYTrW+7L9VYwwWjamLr05zi44alJVG3/AHJRd4xjx52bfJYD16Vir3Tu2Dqu9s6We3+5EtSo3V0XUwVWCai5OlFSeSTdWBoQaBq60l4yebySt918pfHidyOAq4fFJVKinGUKjsmnZq2fxPbEgAAoAAAAAAAAAAAAAAAAAAAAABjOCllJKS4pJMyAEPgtP8On7kfoPBaf4dP3I/QmAEPglP8ADp+5H6DwSn+FT9yP0JgBFHDU07qnBPjUIpkoAA+TipJqSTTyaaTTXKj6AI6WHhDeQhC+3UjGN+gkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=",
        },
        {
          public_id: "test",
          url: "https://www.bestmobile.pk/mobile_images/Original_1761187243-Apple-iPhone-17-Pro-Max.jpeg",
        },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 20,
      stock: 10,
    },
    {
      id: 1,
      category:"Music and Gaming",
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
    },
  ];
  
  export const footerProductLinks = [
    {
      name: "About us",
      link: "/about"
    },
    {
      name: "Careers",
      link: "/careers"
    },
    {
      name: "Store Locations",
    },
    {
      name: "Our Blog",
    },
    {
      name: "Reviews",
    },
  ];
  
  export const footercompanyLinks = [
    {
      name: "Game & Video",
    },
    {
      name: "Phone &Tablets",
    },
    {
      name: "Computers & Laptop",
    },
    {
      name: "Sport Watches",
    },
    {
      name: "Events",
    },
  ];
  
  export const footerSupportLinks = [
    {
      name: "FAQ",
    },
    {
      name: "Reviews",
    },
    {
      name: "Contact Us",
    },
    {
      name: "Shipping",
    },
    {
      name: "Live chat",
    },
  ];
