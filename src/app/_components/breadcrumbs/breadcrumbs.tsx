import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const pages = [
  { name: "Shop", href: "#", current: false },
  { name: "All Products", href: "#", current: true },
];

const Breadcrumbs = function () {
  return (
    <nav className="flex mb-12" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {/* <li>
          <div>
            <a href="#" className="text-dark hover:text-dark5">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li> */}
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              {page.current && (
                <ChevronRightIcon
                  className="h-5 w-5 text-dark flex-shrink-0"
                  aria-hidden="true"
                />
              )}
              <a
                href={page.href}
                className={`${
                  page.current ? "ml-4" : ""
                } text-14 font-400 text-dark hover:text-gray-700`}
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
