const Table = ({ data, search, isLoading }) => {
  return (
    <table className="w-full table-auto overflow-x-auto my-5 text-left">
      <thead className="text-md uppercase">
        <tr className="border-b-2">
          <th className="py-3 px-3 text-sm">Image</th>
          <th className="py-3 text-sm">Virtual Currency Name</th>
          <th className="py-3 text-sm">Current Price</th>
          <th className="py-3 text-sm">Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr className="bg-white text-center">
            <td colSpan="4" className="font-medium text-3xl py-5">
              Loading...
            </td>
          </tr>
        ) : (
          <>
            {data &&
              data
                .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                .map((res, index) => (
                  <>
                    {/* Striped Row Color */}
                    {index % 2 == 0 ? (
                      <tr className="bg-gray hover:bg-gray-600" key={res.id}>
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
                    ) : (
                      <tr className="bg-white hover:bg-gray-600" key={res.id}>
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
                    )}
                  </>
                ))}
          </>
        )}
        {data && data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).length == 0 && (
          <tr className="bg-white text-center">
            <th colSpan="4" className="font-bold py-3 px-3 italic">
              No records found
            </th>
          </tr>
        )}
        {!data && (
          <tr className="bg-white text-center">
            <th colSpan="4" className="font-bold py-3 px-3 italic">
              Data couldn't be fetched
            </th>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
