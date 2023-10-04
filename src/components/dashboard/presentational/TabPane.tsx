import { TabView } from "primereact/tabview";
import { classNames } from "primereact/utils";
interface TabPaneProps {
  children: React.ReactNode;
}
const TabPane = function ({ children }: TabPaneProps) {
  return (
    <div className="col-span-12 shadow-sm mb-5 xl:col-span-8 2xl:col-span-9 ">
      <TabView>{children}</TabView>
    </div>
  );
};

export default TabPane;
