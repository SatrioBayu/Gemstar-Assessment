import Card from "../components/Card";
import GridCard from "../components/GridCard";

const Dashboard = () => {
  const data = [
    {
      image: "https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png",
      title: "DSB Bank",
      desc: "DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.",
    },
    {
      image: "https://proudfoot.com/wp-content/uploads/2020/01/logo-dark.webp",
      title: "Proudfoot",
      desc: "Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.",
    },
    {
      image: "https://rmi.com.sg/wp-content/uploads/2018/05/RMI-VI-09-1-2.png",
      title: "RMI",
      desc: "RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.",
    },
  ];

  return (
    <div className="container mx-auto py-5">
      {/* <div class="container mx-auto"> */}
      <h1 className="text-4xl font-bold text-left">Hi Radhika, welcome back!</h1>
      <h3 className="text-left mt-10 text-3xl font-bold">Your client list</h3>
      <p className="text-left font-normal">You currently servicing 3 clients</p>
      {/* </div> */}
      <GridCard>
        {data.map((res) => (
          <Card image={res.image} title={res.title} desc={res.desc} />
        ))}
        {/* <Card />
        <Card /> */}
      </GridCard>
    </div>
  );
};

export default Dashboard;
