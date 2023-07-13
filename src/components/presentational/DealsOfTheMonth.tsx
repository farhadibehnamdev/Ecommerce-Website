import Image from "next/image";

const DealsOfTheMonth = function () {
  return (
    <div className="w-[1140px] mb-36">
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-dark font-400 text-[40px] font-jostBodyRegular">
            Deals of the Month
          </h2>
          <p className="text-dark font-400 font-jostBodyRegular text-16 break-words mb-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
          <div className="flex gap-[20px] items-center">
            <span className="rounded-10 px-4 py-[7px] font-jostBodyBold font-700 text-dark text-[30px]">
              120
              <p className="text-[20px] font-400">Days</p>
            </span>
            <span className="rounded-10 px-4 py-[7px] font-700 text-dark text-[30px]">
              18
              <p className="text-[20px] font-400">Hours</p>
            </span>
            <span className="rounded-10 px-4 py-[7px] font-700 text-dark text-[30px]">
              15
              <p className="text-[20px] font-400">Mins</p>
            </span>
            <span className="rounded-10 px-4 py-[7px] font-700 text-dark text-[30px]">
              1<p className="text-[20px] font-400">Secs</p>
            </span>
          </div>
          <div></div>
        </div>
        <div>
          <Image
            width={553}
            height={499}
            src="/images/deals-photo.png"
            alt="deals-of-the-month"
          />
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheMonth;
