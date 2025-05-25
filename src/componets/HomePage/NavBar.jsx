import { Link } from "react-router-dom";
import { NavbarMenu } from "../../MockData/HeaderData";
import { FaSearchengin } from "react-icons/fa6";
import AvinyaLogo from "../../../public/assest/img/avinya-electricals-logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="py-1">
        <div className="container">
          <div className="header-outer justify-between flex items-center">
            {/* {Logo section} */}
            <div className="logo w-[100px]">
              <Link to="/">
                <img
                  src={AvinyaLogo}
                  alt="Avinya - Company Logo"
                  width="150"
                  height="50"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* {NavLinks section} */}
            <div className="">
              <ul className="flex gap-5 var(--navlinksColor)">
                {NavbarMenu.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* {Icons section} */}
            <div>
              <FaSearchengin/>
            </div>
            {/* {Mobile Hamburger Menu section} */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
