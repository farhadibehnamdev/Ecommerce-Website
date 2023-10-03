import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";
import {
  PiBrandyDuotone,
  PiChatCenteredTextDuotone,
  PiFolderDuotone,
  PiHeartDuotone,
  PiPercentDuotone,
  PiShoppingBagOpenDuotone,
  PiTShirtDuotone,
  PiTextAaDuotone,
  PiUsersDuotone,
} from "react-icons/pi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { MdEditDocument } from "react-icons/md";
export interface Items {
  name: string;
  href: string;
  current: boolean;
  icon: IconType;
}
interface IconMenus {
  [key: string]: IconType;
}
const iconMenus: IconMenus = {
  products: PiTShirtDuotone,
  orders: PiShoppingBagOpenDuotone,
  discounts: PiPercentDuotone,
  favorites: PiHeartDuotone,
  reviews: PiChatCenteredTextDuotone,
  customers: PiUsersDuotone,
  size: PiTextAaDuotone,
  colors: PiBrandyDuotone,
  brands: PiBrandyDuotone,
  categories: PiFolderDuotone,
  new: AiOutlineFileAdd,
  edit: MdEditDocument,
};

const getValue = function (key: string) {
  return iconMenus[key];
};

const useBreadcrumb = function () {
  const pathName = usePathname();
  const segments = pathName.split("/").slice(1);
  const items = segments.reduce((prev: any, curr: any, index) => {
    if (curr !== "dashboard")
      prev.push({
        name: curr,
        current: segments.length - 1 === index ? true : false,
        href:
          segments.length - 1 === index
            ? ""
            : segments
                .slice(0, index + 1)
                .toString()
                .replaceAll(",", "/")
                .replace(/^/, "/"),
        icon: getValue(curr),
      });
    return prev;
  }, []);
  return items;
};

export default useBreadcrumb;
