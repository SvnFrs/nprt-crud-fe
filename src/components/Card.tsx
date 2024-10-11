/* eslint-disable react/react-in-jsx-scope */
export default function Card() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center rtl:text-right border-b-2 border-black">
          <thead className="bg-base text-pink uppercase">
            <tr>
              <th className="px-3 py-5 hover:bg-overlay0 hover:text-maroon">
                ID
              </th>
              <th className="px-3 py-5 hover:bg-overlay0 hover:text-maroon">
                Name
              </th>
              <th className="px-3 py-5 hover:bg-overlay0 hover:text-maroon">
                Price
              </th>
              <th className="px-3 py-5 hover:bg-overlay0 hover:text-maroon">
                Date
              </th>
              <th className="px-3 py-5"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th className="px-6 py-4 font-medium whitespace-nowrap text-black">
                1
              </th>
              <td>Thai</td>
              <td>20</td>
              <td>2024</td>
              <td>Edit</td>
            </tr>
            <tr className="">
              <th className="px-6 py-4 font-medium whitespace-nowrap text-black">
                1
              </th>
              <td>Thai</td>
              <td>20</td>
              <td>2024</td>
              <td>Edit</td>
            </tr>
            <tr className="">
              <th className="px-6 py-4 font-medium whitespace-nowrap text-black">
                1
              </th>
              <td>Thai</td>
              <td>20</td>
              <td>2024</td>
              <td>Edit</td>
            </tr>
            <tr className="">
              <th className="px-6 py-4 font-medium whitespace-nowrap text-black">
                1
              </th>
              <td>Thai</td>
              <td>20</td>
              <td>2024</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
