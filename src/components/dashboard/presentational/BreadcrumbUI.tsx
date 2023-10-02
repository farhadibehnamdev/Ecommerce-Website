import { HomeIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];
const BreadcrumbUI = function () {
  return (
    <nav className="flex " aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4 md:mx-5">
        <li>
          <div>
            <a href="#" className="text-zinc-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-zinc-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-4 text-base font-medium text-zinc-400 hover:text-gray-700"
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

export default BreadcrumbUI;
