const Card = ({ image, title, desc }) => {
  return (
    <div className="bg-gray p-4 hover:scale-105 duration-300 rounded-lg border-2 border-[#DDDDDD]">
      <img className="w-40" src={image} alt="" />
      <h3 className="text-left text-xl my-2 font-bold">{title}</h3>
      <p className="text-left text-sm">{desc}</p>
    </div>
  );
};

export default Card;
