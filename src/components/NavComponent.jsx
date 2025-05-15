import { navLinks } from "../MapLinks/LinksMapping";
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavComponent = () => {
  const [language, setLanguage] = useState("EN");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="flex justify-between  sm: px-10 annoying:px-10 lg:px-[5rem] py-4">
        {/* nav title */}
        <div className="">
          <h1 className="font-bold text-5xl">
            Jad<span className="text-orange-600">oo</span>
          </h1>
        </div>

        {/* nav links */}
        <div className="flex hidden  annoying:hidden lg:flex">
          <ul className="flex items-center space-x-20 ">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="hover:cursor-pointer hover:text-orange-600
                transition-all text-md"
                >
                  {link}
                </li>
              );
            })}

            {/* sign up button and select option */}

            <ButtonComponent
              buttonTxt="Sign Up"
              styles="border border-black px-4 py-2 rounded-md
             hover:bg-black hover:text-white transition-all"
            />

            <div className="flex items-center flex-1">
              <h4>{language}</h4>
              <Dropdown >
                <Dropdown.Toggle
                  style={{
                    background: "none",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu className="">
                  <Dropdown.Item onClick={() => setLanguage("EN")}>
                    EN
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage("FC")}>
                    FC
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage("SP")}>
                    SP
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </ul>
        </div>

        {/* mobile or tablet screens nav links */}
        <div className="flex justify-center items-center annoying:flex lg:hidden">
          <Button
            style={{ background: "none", border: "none", color: "black" }}
            onClick={handleShow}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="hover:cursor-pointer max-sm: text-3xl sm:text-3xl annoying:text-4xl"
            />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="text-4xl font-bold">
                Jad<span className="text-orange-600">oo</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="">
              <ul className="flex items-center w-full flex-col h-[100%] justify-between py-4">
                {navLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:cursor-pointer hover:text-orange-600
                transition-all"
                    >
                      {link}
                    </li>
                  );
                })}

                {/* sign up button and select option */}

                <ButtonComponent
                  buttonTxt="Sign Up"
                  styles="border border-black px-4 py-2 rounded-md
             hover:bg-black hover:text-white transition-all"
                />

                <div className="flex items-center">
                  <h4>{language}</h4>
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{
                        background: "none",
                        color: "black",
                        border: "none",
                      }}
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setLanguage("EN")}>
                        EN
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setLanguage("FC")}>
                        FC
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setLanguage("SP")}>
                        SP
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default NavComponent;
