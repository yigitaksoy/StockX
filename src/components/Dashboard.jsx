import Card from "./Card";
import { mockCompanyDetails } from "../constants/Mock";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className="grid h-screen auto-rows-fr grid-cols-1 grid-rows-8 gap-6 p-10 font-sans md:grid-cols-2 md:grid-rows-7 xl:grid-cols-3 xl:grid-rows-5">
      <div className="col-span-1 row-span-1 flex items-center justify-start md:col-span-2 xl:col-span-3">
        <Header name={mockCompanyDetails.name} />
      </div>
      <div className="row-span-4 md:col-span-2">
        <Card>Chart</Card>
      </div>
      <div>
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          changePercent={10.0}
          currency={"USD"}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={mockCompanyDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
