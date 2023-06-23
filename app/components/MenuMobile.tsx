import { PiLinkSimpleBold } from "react-icons/pi";
import { FaHouse, FaUser } from "react-icons/fa6";
import "./MenuMobile.css";

const MenuMobile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <div className="ms-nav-container">
            <ul className="ms-nav">
              <input
                type="checkbox"
                id="ms-menu"
                className="ms-menu-toggle"
                name="ms-menu-toggle"
              />
              <li className="ms-li ms-li3 ms-li-last">
                <a href="javascript:void(0)">
                  <PiLinkSimpleBold className="icon-3" />
                  <span className="fa fa-search"></span>
                </a>
              </li>
              <li className="ms-li ms-li2">
                <a href="javascript:void(0)">
                  <FaUser className="icon-2" />
                  <span className="fa fa-flask"></span>
                </a>
              </li>
              <li className="ms-li ms-li1 ms-li-first">
                <a href="javascript:void(0)">
                  <FaHouse className="icon-1" />
                  <span className="fa fa-fort-awesome"></span>
                </a>
              </li>
              <li className="ms-main">
                <a href="javascript:void(0)">
                  <label className="ms-menu-toggle-lbl" htmlFor="ms-menu">
                    {/* <span className="fa fa-plus"></span> */}
                    <FaUser className="fa fa-plus" />
                  </label>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
