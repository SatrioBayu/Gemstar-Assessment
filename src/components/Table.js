const Table = ({ data, search }) => {
  return (
    <table className="w-full table-auto overflow-x-auto my-5 text-left">
      <thead className="text-md uppercase">
        <tr className="border-b-2">
          <th className="py-3 px-3">Image</th>
          <th className="py-3">Virtual Currency Name</th>
          <th className="py-3">Current Price</th>
          <th className="py-3">Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((res) => (
              <tr className="bg-white border-b" key={res.id}>
                <th className="font-medium py-3 px-3">
                  <img className="w-10 h-10 rounded-full" src={res.image} alt="" />
                </th>
                <td>{res.name}</td>
                <td>
                  <span className="font-bold">IDR </span>
                  {res.current_price}
                </td>
                <td>
                  <span className="font-bold">IDR </span>
                  {res.market_cap}
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default Table;
