import Card from "../components/Card/Card";
import GridCard from "../components/Card/GridCard";
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

const ClientList = () => {
  return (
    <div>
      <h1 className="text-4xl mt-5 font-bold ">Hi Radhika, welcome back!</h1>
      <h3 className=" mt-10 text-3xl font-bold">Your client list</h3>
      <p className=" font-normal">You currently servicing 3 clients</p>
      <GridCard>
        {data.map((res, index) => (
          <Card key={index} image={res.image} title={res.title} desc={res.desc} />
        ))}
      </GridCard>
    </div>
  );
};

export default ClientList;
