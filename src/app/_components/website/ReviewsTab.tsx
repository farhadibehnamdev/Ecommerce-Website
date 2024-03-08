import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Star } from "react-huge-icons/outline";

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
    `,
    title: "Excellent Product, I Love It 😍",
    date: "July 16, 2021",
    datetime: "2021-07-16",
    author: "Emily Selman",
    avatarSrc: "/images/jacob.png",
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
    `,
    title: "My Daughter is very much happy with this products",
    date: "July 12, 2021",
    datetime: "2021-07-12",
    author: "Hector Gibbons",
    avatarSrc: "/images/jacob.png",
  },
  // More reviews...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const ReviewsTab = function () {
  return (
    <div className="bg-white">
      <div className="border-dark5">
        <h2 className=" text-dark text-[20px] font-jostBodyBold font-700 py-5">
          Customer Reviews
        </h2>

        <div className="-my-10">
          {reviews.map((review, reviewIdx) => (
            <div
              key={review.id}
              className={`flex space-x-4 text-sm text-gray-500`}
            >
              <div className="flex-none py-10">
                <Image
                  width={50}
                  height={50}
                  src={review.avatarSrc}
                  alt=""
                  className="h-[50px] w-[50px] rounded-full bg-gray-100"
                />
              </div>
              <div
                className={classNames(
                  reviewIdx === 0 ? "" : "border-t border-dark5",
                  "flex-1 py-10"
                )}
              >
                <h3 className="font-medium text-gray-900">{review.author}</h3>

                <div className="mt-[6px] flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>
                <h2 className="text-dark  mt-4 text-16 font-700">
                  {review.title}
                </h2>
                <div
                  className="prose prose-sm  mt-4 mb-3 max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
                <p className="text-14 flex gap-2">
                  <span className="text-gray">Posted on</span>
                  <span className="text-dark">{review.date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form>
        <div className="space-y-12">
          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mb-5">
              Add your Review
            </h2>
            <p className="mt-1 mb-[10px] text-sm leading-6 text-gray-600">
              Your Rating
            </p>
            <div className="flex gap-2 items-center">
              <span>
                <Star className="w-5 h-5 text-dark" />
              </span>
              <span className="flex justify-center items-center">
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
              </span>
              <span className="flex justify-center items-center">
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
              </span>
              <span className="flex justify-center items-center">
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
              </span>
              <span className="flex justify-center items-center">
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
                <Star className="w-5 h-5 text-dark" />
              </span>
            </div>
            <div className="mt-[30px] grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Eamil Address
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Your Review
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    placeholder="Enter Your Review"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-dark px-5 py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default ReviewsTab;
