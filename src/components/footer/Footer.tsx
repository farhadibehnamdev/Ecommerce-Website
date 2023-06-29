import Image from "next/image";
import { ArrowRight, Calling, Gmail, Location } from "react-huge-icons/outline";
import navigation from "./data";

export const Footer = function () {
  return (
    <footer
      className="bg-dark mx-auto max-w-full flex justify-center"
      aria-labelledby="footer-heading"
    >
      <div className="xl:mx-32 2xl:mx-32 md:p-10 xl:px-10 2xl:px-0 lg:p-10 sm:p-10 xs:p-10 lg:mx-auto pb-5 sm:pt-24 2xl:w-[1140px] xl:w-[1140px]">
        <div className="lg:grid lg:grid-cols-1  md:grid md:grid-cols-1  xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-2 pb-12 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <Image
                  width={143}
                  height={58.1}
                  src="/images/Logo_Footer.png"
                  alt="Company name"
                />
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.krist.map((item) => (
                    <li key={item.name}>
                      <span className="text-16 font-jostBodyRegular  font-400 leading-23 hover:text-white">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-16 font-jostBodyRegular font-700 break-words leading-23 text-white">
                  Information
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.information.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-16 font-jostBodyRegular  font-400 leading-23 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-16 font-jostBodyRegular font-700 break-words leading-23 text-white">
                  Service
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.service.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-16 font-jostBodyRegular font-400 break-words leading-23 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-16 font-jostBodyRegular font-700 break-words leading-23 text-white">
                  Subscribe
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <p className="text-16 font-jostBodyRegular font-400 break-words leading-23 hover:text-white">
                      Enter your email below to be the first to know about new
                      collections and product launches.
                    </p>
                  </li>
                  <li>
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                      <div className="pointer-events-none absolute rounded-10 inset-y-0 left-0 flex items-center pl-3">
                        <Gmail
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full bg-dark border-white rounded-10  border-0 py-3 px-3 text-white ring-1 ring-inset ring-white placeholder:text-white text-16 font-400 font-jostBodyRegular leading-23 pl-[45px]"
                        placeholder="Your Email"
                      />
                      <div className="pointer-events-none absolute   border-white right-0 bottom-3 flex items-center pr-3">
                        <span
                          className="text-white sm:text-sm"
                          id="price-currency"
                        >
                          <ArrowRight className="w-6 h-6 text-white" />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-0 border-t border-white/10 xs:pt-4  md:flex md:items-end md:justify-between sm:flex sm:justify-center sm:text-sm sm:items-end sm:gap-3 sm:mt-0 ">
          <div className="flex space-x-2 md:order-2 sm:items-start">
            <span>
              <Image width={36} height={24} alt="visa" src="/images/visa.png" />
            </span>
            <span>
              <Image
                width={36}
                height={24}
                alt="visa"
                src="/images/mastercard.png"
              />
            </span>
            <span>
              <Image
                width={36}
                height={24}
                alt="visa"
                src="/images/googlepay.png"
              />
            </span>
            <span>
              <Image width={36} height={24} alt="visa" src="/images/amex.png" />
            </span>
            <span>
              <Image
                width={36}
                height={24}
                alt="visa"
                src="/images/paypal.png"
              />
            </span>
          </div>

          <p className="xl:mt-8 lg:mt-8  sm:mt-4 xs:text-sm font-jostBodyRegular font-400 xl:text-16 lg:text-16 leading-23 text-white md:order-2 md:mt-0">
            &copy;2023 Krist All Rights are reserved️
          </p>

          <div className="flex space-x-5 md:order-2 sm:mt-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
