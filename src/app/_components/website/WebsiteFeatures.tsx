import {
  CardDot,
  CoinDollar,
  Headphones,
  PackageBoxTwoSide,
} from "react-huge-icons/outline";

const WebsiteFeatures = function () {
  return (
    <div className="max-w-[1140px] sm:w-full mt-[100px] mx-auto">
      <div className="w-fit mx-auto lg:grid lg:grid-cols-4   md:grid md:grid-cols-3  sm:grid sm:grid-cols-2 sm:gap-20 xs:grid xs:grid-cols-2  xs:gap-x-20 xs:pl-30px xs:mx-auto lg:gap-x-20  mb-[100px] lg:pl-30px md:pl-30px xl:mx-0">
        <div className="flex flex-col xs:mb-30px">
          <PackageBoxTwoSide className="h-9 w-9 mb-4 text-dark" />
          <p className="text-16 text-dark font-jostBodyBold font-700 mb-1">
            Free Shipping
          </p>
          <p className="text-14 text-gray font-jostBodyRegular font-400">
            Free shipping for order above $150
          </p>
        </div>
        <div className="flex flex-col xs:mb-30px">
          <CoinDollar className="h-9 w-9 mb-4 text-dark" />
          <p className="text-16 text-dark font-jostBodyBold font-700 mb-1">
            Money Guarantee
          </p>
          <p className="text-14 text-gray font-jostBodyRegular font-400">
            Within 30 days for an exchange
          </p>
        </div>
        <div className="flex flex-col xs:mb-30px">
          <Headphones className="h-9 w-9 mb-4 text-dark" />
          <p className="text-16 text-dark font-jostBodyBold font-700 mb-1">
            Online Support
          </p>
          <p className="text-14 text-gray font-jostBodyRegular font-400">
            24 hours a day, 7 days a week
          </p>
        </div>
        <div className="flex flex-col xs:mb-30px">
          <CardDot className="h-9 w-9 mb-4 text-dark" />
          <p className="text-16 text-dark font-jostBodyBold font-700 mb-1">
            Flexible Payment
          </p>
          <p className="text-14 text-gray font-jostBodyRegular font-400">
            Pay with multiple credit cards
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteFeatures;
