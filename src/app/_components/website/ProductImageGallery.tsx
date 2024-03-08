import { Tab } from "@headlessui/react";
import Image from "next/image";

const ProductImageGallery = function ({ product, classNames }: any) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {product.images.map((image: any) => (
            <Tab
              key={image.id}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{image.name}</span>
                  {image.thumbnails.map(({ img, index }: any) => {
                    return (
                      <span
                        key={index}
                        className={`absolute inset-0 overflow-hidden flex justify-center items-center bg-dark5 px-[17px] py-[21px]  rounded-md`}
                      >
                        <Image
                          width={90}
                          height={82}
                          src="/images/thumbnail-dress.png"
                          alt=""
                          className={`object-cover object-center`}
                        />
                      </span>
                    );
                  })}
                  <span
                    className={classNames(
                      selected ? "ring-indigo-500" : "ring-transparent",
                      "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
        {product.images.map((image: any) => (
          <Tab.Panel
            key={image.id}
            className="w-[555px] h-[555px] bg-dark5 flex justify-center items-center"
          >
            <Image
              width={440}
              height={397}
              src="/images/women-yk-disney.png"
              alt={image.alt}
              className="object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductImageGallery;
