import { RadioGroup } from "@headlessui/react";
import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const ProductInfo = function ({ product, classNames }: any) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl  text-dark font-700 tracking-tight mb-[5px] ">
          {product.name}
        </h3>
        <div className="px-[10px] py-[6px] bg-green-200 rounded-[4px] flex justify-center items-center w-[70px]  h-[30px] ">
          <span className="text-green-600 text-[12px] font-400">In Stock</span>
        </div>
      </div>
      <p className="text-xl text-dark font-400 tracking-tight mb-[10px]">
        {product.subTitle}
      </p>
      {/* Reviews */}
      <div className="mt-3">
        <h3 className="sr-only">Reviews</h3>
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating ? "text-yellow-500" : "text-gray-300",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{product.rating} out of 5 stars</p>
          <span className="text-gray">5.0 (121 Reviews)</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <h2 className="sr-only">Product information</h2>
        <p className="text-[20px] tracking-tight text-dark">
          {product.price}.00
        </p>
        <span className="text-[20px] tracking-tight text-gray line-through">
          $200.00
        </span>
      </div>

      <div className="mt-6 mb-5">
        <h3 className="sr-only">Description</h3>

        <div
          className="space-y-6 text-base text-dark text-14"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>

      <form className="mt-6">
        {/* Colors */}
        <div className="mb-5">
          <p className="text-lg font-700 mb-[10px] font-jostBodyBold text-dark">
            Color
          </p>

          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="mt-2"
          >
            <span className="flex items-center space-x-3">
              {product.colors.map((color: any) => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({ active, checked }) =>
                    classNames(
                      color.selectedColor,
                      active && checked ? "ring ring-offset-1" : "",
                      !active && checked ? "ring-1" : "",
                      "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-lg p-0.5 focus:outline-none"
                    )
                  }
                >
                  {/* <RadioGroup.Label as="span" className="sr-only">
                  {color.name}
                </RadioGroup.Label> */}
                  <span
                    aria-hidden="true"
                    className={classNames(
                      color.bgColor,
                      "h-9 w-9 rounded-[5px] border border-black border-opacity-10"
                    )}
                  />
                </RadioGroup.Option>
              ))}
            </span>
          </RadioGroup>
        </div>

        <div>
          <p className="text-[18px] font-700 font-jostBodyBold text-dark mb-[10px]">
            Size
          </p>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10  rounded text-white font-400 text-16 bg-dark">
              S
            </button>
            <button className="w-10 h-10 ring-1 ring-gray rounded text-dark font-400 text-16">
              M
            </button>
            <button className="w-10 h-10 ring-1 ring-gray rounded text-dark font-400 text-16">
              L
            </button>
            <button className="w-10 h-10 ring-1 ring-gray rounded text-dark font-400 text-16">
              XL
            </button>
            <button className="w-10 h-10 ring-1 ring-gray rounded text-dark font-400 text-16">
              XXL
            </button>
          </div>
        </div>

        <div className="sm:flex-col1 mt-10 flex">
          <div className="isolate inline-flex text-dark rounded-md shadow-sm">
            <div className="flex justify-around items-center ring-1 ring-dark rounded-10">
              <button className="text-[18px] text-dark px-4">-</button>
              <span className="text-[18px] text-dark px-4">1</span>
              <button className="text-[18px] text-dark px-4">+</button>
            </div>
          </div>
          <button
            type="submit"
            className="flex max-w-xs flex-1 ml-4 items-center justify-center rounded-md border border-transparent bg-dark px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
          >
            Add to Cart
          </button>

          <button
            type="button"
            className="ml-4 flex items-center roun bg-white ring-dark ring-1 justify-center rounded-10 p-4 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <HeartIcon
              className="h-6 w-6 flex-shrink-0 text-dark"
              aria-hidden="true"
            />
            <span className="sr-only">Add to favorites</span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProductInfo;
