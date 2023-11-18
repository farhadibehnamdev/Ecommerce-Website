import CardUI from "@/components/dashboard/CardUI";
import ChartUI from "@/components/dashboard/Chart";
import PieChartUI from "@/components/dashboard/PieChart";
const Dashboard = function () {
  return (
    <div className="flex justify-center flex-col">
      <div className="text-black-900 text-sm flex justify-center gap-7 mb-7">
        <CardUI bgColor="bg-sky-100" title="Orders Received" data="721k" />
        <CardUI
          bgColor="bg-slate-200"
          title="Average Daily Sales"
          data="367k"
        />
        <CardUI bgColor="bg-sky-100" title="New Customers" data="1,156k" />
        <CardUI bgColor="bg-slate-200" title="Pending Orders" data="239k" />
      </div>
      {/* <div className="flex justify-center gap-7">
        <div className="flex p-4 justify-center shadow-sm bg-slate-50 rounded-2xl">
          <ChartUI />
        </div>
        <div className="bg-slate-50 shadow-sm p-4 flex justify-center rounded-2xl">
          <PieChartUI />
        </div>
      </div> */}
    </div>
  );
};
export default Dashboard;
