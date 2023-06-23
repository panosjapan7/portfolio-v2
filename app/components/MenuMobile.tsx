import { PiLinkSimpleBold } from "react-icons/pi";
import { FaHouse, FaUser, FaPlus } from "react-icons/fa6";
import "./MenuMobile.css";

const MenuMobile = () => {
  return (
    <div className="absolute bottom-5 end-0.5 right-0 left-50 mx-auto w-max ">
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
                <a
                // href="javascript:void(0)"
                >
                  <PiLinkSimpleBold className="icons" />
                </a>
              </li>
              <li className="ms-li ms-li2">
                <a
                // href="javascript:void(0)"
                >
                  <FaUser className="icons" />
                </a>
              </li>
              <li className="ms-li ms-li1 ms-li-first">
                <a
                // href="javascript:void(0)"
                >
                  <FaHouse className="icons" />
                </a>
              </li>
              <li className="ms-main">
                <a
                // href="javascript:void(0)"
                >
                  <label className="ms-menu-toggle-lbl" htmlFor="ms-menu">
                    <span className="fa fa-plus">
                      <FaPlus style={{ color: "#9b9b9b" }} />
                    </span>
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
