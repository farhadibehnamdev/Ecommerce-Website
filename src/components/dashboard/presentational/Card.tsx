import Image from "next/image";

const Card = function ({ bgColor, title, data }: any) {
  return (
    <div
      className={`rounded-2xl flex-col justify-center px-6 py-6 ${bgColor} w-72 h-36`}
    >
      <p className="leading-tight font-semibold">{title}</p>
      <div className="flex justify-between pt-4 items-center">
        <p className="text-2xl font-semibold">{data}</p>
        <div className="flex justify-between gap-1">
          <p>+11.01%</p>
          <Image
            width={16}
            height={16}
            src="/images/ArrowRise.svg"
            alt="arrow-rise"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
