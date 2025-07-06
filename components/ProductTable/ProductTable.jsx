import ProductTableRow from "../ProductTableRow/ProductTableRow";



export default function ProductTable({ data }) {
  
  return (
    <div className="overflow-x-auto text-15px">
      <h2 className="mb-2 text-black dark:text-textGray">Report - Week 31, 2024</h2>
      
      <table className="w-full pb-2 overflow-hidden text-black border lg:text-15px md:text-10px dark:text-white dark:bg-deepBlack dark:rounded-xl dark:border-none border-iconBg">
        <thead className="dark:text-textGray">
          <tr className="border-b border-iconBg">
            <th className="py-1 pl-2 text-left dark:font-normal">Product retail price</th>
            <th className="text-left dark:font-normal">Current Price</th>
            <th className="text-left dark:font-normal">Performance</th>
            <th className="text-left dark:font-normal">7-day chart</th>
            <th className="text-left dark:font-normal">Required action</th>
          </tr>
        </thead>
       

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-4 text-center dark:text-white">
                No results found.
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <ProductTableRow key={item.product} {...item} />
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}
