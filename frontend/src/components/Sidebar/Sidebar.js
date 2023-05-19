import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            {props.title}
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {props.sections.map((item, index) => {
              return (
                <>
                  <hr className="my-4 md:min-w-full" />
                  <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                    {item.sectionTitle}
                  </h6>
                  <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    {item.elements.map((element, key) => {
                      return (
                        <li className="items-center">
                          <Link
                            className={
                              "text-xs uppercase py-3 font-bold block " +
                              (window.location.href.indexOf(element.link) !== -1
                                ? "text-lightBlue-500 hover:text-lightBlue-600"
                                : "text-blueGray-700 hover:text-blueGray-500")
                            }
                            to={element.link}
                          >
                            <i
                              className={
                                element.icon +
                                " mr-2 text-sm " +
                                (window.location.href.indexOf(element.link) !==
                                -1
                                  ? "opacity-75"
                                  : "text-blueGray-300")
                              }
                            ></i>{" "}
                            {element.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      sectionTitle: PropTypes.string,
      elements: PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string,
        link: PropTypes.string,
      }),
    })
  ),
};
