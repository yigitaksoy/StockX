import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="xl:grid-rows-5 grid h-screen auto-rows-fr grid-cols-1 grid-rows-8 gap-6 p-10 font-sans md:grid-cols-2 md:grid-rows-7 xl:grid-cols-3">
      <div className="col-span-1 row-span-1 md:col-span-2 xl:col-span-3">
        <Card>Header</Card>
      </div>
      <div className="row-span-4 md:col-span-2">
        <Card>Chart</Card>
      </div>
      <div>
        <Card>Overview</Card>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Card>Details</Card>
      </div>
    </div>
  );
};

export default Dashboard;
