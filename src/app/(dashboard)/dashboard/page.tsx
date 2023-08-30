import Card from "@/components/dashboard/presentational/Card";
import ChartUI from "@/components/dashboard/presentational/Chart";
import PieChartUI from "@/components/dashboard/presentational/PieChart";

const Dashboard = function () {
  return (
    <div className="flex justify-center flex-col">
      <div className="text-black-900 text-sm flex justify-center gap-7 mb-7">
        <Card bgColor="bg-sky-100" title="Orders Received" data="721k" />
        <Card bgColor="bg-slate-200" title="Average Daily Sales" data="367k" />
        <Card
          bgColor="bg-sky-100"
          title="New Customers This Month"
          data="1,156"
        />
        <Card bgColor="bg-slate-200" title="Pending Orders" data="239k" />
      </div>
      <div className="flex justify-center gap-7">
        <div className="flex p-4 justify-center bg-slate-50 rounded-2xl">
          <ChartUI />
        </div>
        <div className="bg-slate-50 p-4 flex justify-center rounded-2xl">
          <PieChartUI />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
