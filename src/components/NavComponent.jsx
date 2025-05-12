import { navLinks } from "../content";
import ButtonComponent from "./ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav
      className="border-b border-aquaishDark flex 
    justify-between items-center max-sm: px-4 sm:px-5 py-4 "
    >
      {/* nav Title */}

      <div className="text-white flex items-center space-x-2">
        <img src="/src/assets/images/notes.png" alt="Logo" />
        <h1 className="max-sm:text-2xl sm:text-3xl font-bold poppins ">
          SmartNotes
        </h1>
      </div>

      {/* nav links */}
      <div className="flex items-center hidden lg:flex">
        <ul className="flex space-x-10 items-center text-lg">
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className="text-white poppins hover:cursor-pointer 
                generalScale"
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>

      {/* nav Links mobile */}

      <div className="md:flex items-center lg:hidden">
        {/* mobile links */}
        <Button
          style={{ background: "none", border: "none" }}
          onClick={handleShow}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-3xl 
              hover:cursor-pointer"
          />
        </Button>

        <Offcanvas
          style={{ border: "1px solid #017373" }}
          show={show}
          onHide={handleClose}
          className="bg-black text-white
            "
        >
          <Offcanvas.Header closeButton className="text-white bg-aquaishDark">
            <Offcanvas.Title className="poppins">SmartNotes</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="flex flex-col h-[100%] items-center text-xl justify-evenly">
              {navLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="listItem text-white poppins hover:cursor-pointer 
                    hover:bg-aquaishDark offcanvaLi w-full text-center py-4 rounded-lg
                    active:brightness-[80%]"
                  >
                    {link}
                  </li>
                );
              })}
                <ButtonComponent
              buttonTxt="Get Started"
              bg="bg-gradient-to-br
               from-aquaish to-aquaishDark"
              hoverEffect="generalScale"
            />
            </ul>
          
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      {/* get started button */}
      <div className="hidden lg:flex">
        <ButtonComponent
          buttonTxt="Get Started"
          bg="bg-gradient-to-br
            from-aquaish to-aquaishDark"
          hoverEffect="generalScale"
        />
      </div>
    </nav>
  );
};

export default NavComponent;
