
export function ImageGrid(props) {
    return (
        <center>
              <div>
                <h1 class="text-green-600 text-3xl font-bold">
                    GeeksforGeeks
                  </h1>
                <h3 class="text-xl text-black">
                      Scale Animation on Hover using Tailwind CSS
                </h3>
              </div>
              <div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-green-600 cursor-pointer 
                                py-6 rounded-lg transform 
                                transition duration-500 hover:scale-110">
                          <h2 class="title-font font-medium text-3xl text-gray-900">
                            GeeksforGeeks
                          </h2>
                      <p class="text-xl">Premium</p>
                    </div>
                  </div>
              </div>
    </center>
  );
}

ImageGrid.defaultProps = {
    height: 300,
    width: 150
};

// ImageGrid.propTypes = {
//     theme: PropTypes.oneOf(["light", "dark"]),
//     tableTitle: PropTypes.string.isRequired,
//     tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
//     tableColumns: PropTypes.arrayOf(
//         PropTypes.shape({
//             Header: PropTypes.string.isRequired,
//             accessor: PropTypes.string.isRequired,
//             Cell: PropTypes.func.isRequired,
//         }).isRequired
//     ),
// };
