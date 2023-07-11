import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$200",
  },
  {
    id: 2,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$700",
  },
  {
    id: 3,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",

    discount: "$100",
  },
  {
    id: 4,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$900",
  },
  {
    id: 5,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$200",
  },
  {
    id: 6,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$700",
  },
  {
    id: 7,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",

    discount: "$100",
  },
  {
    id: 8,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75.00",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
    discount: "$900",
  },
  // More products...
];
const OurBestseller = function () {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:xl:w-[1140px]  mb-36 xl:pt-0 xl:px-0">
        <div className="md:flex md:items-center sm:flex sm:items-center sm:justify-center md:justify-center mb-[50px]">
          <h2 className="text-4xl  text-dark font-400 font-jostBodyRegular tracking-tight">
            Our Bestseller
          </h2>
        </div>

        <div className="mt-6 grid text-dark md:grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 xl:grid-cols-4 lg:grid-cols-4 md:gap-y-0 lg:gap-x-8 lg:gap-[30px]">
          {products.map((product) => (
            <div key={product.id} className="group relative md:my-5">
              <div className="h-56 w-full flex item-center justify-center overflow-hidden  bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80 relative">
                <Image
                  width={262}
                  height={429}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
                <button className="bg-white z-[99999] w-[182px] transition ease-in delay-50 rounded-10 p-5 absolute bottom-0  mb-5 text-dark font-400 text-16 font-jostBodyRegular  drop-shadow-boxShadow  hover:bg-dark600 hover:text-white hover:drop-shadow-boxShadow">
                  Add to Cart
                </button>
              </div>
              <h3 className="mt-4 font-700 text-16">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <div className="flex justify-start gap-2 items-center">
                <p className="mt-1 text-16 font-700 text-dark">
                  {product.price}
                </p>
                <p className="mt-[2px] text-gray text-16 font-400 font-jostBodyRegular line-through">
                  {product.discount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBestseller;
