import React, { useState } from "react";
import StarLogo from "../Assets/Icons/starLogo";
import MenuOptions from "../components/Header/MenuOptions";
import FindStore from "../components/Header/FindStore";
import SignButton from "../components/Header/SignButton";
import JoinButton from "../components/Header/JoinButton";
import Arrow from "../Assets/Icons/Arrow";
import MenuItem from "../components/Header/MenuItem";
import { Divide as Hamburger } from "hamburger-react";
import "../styles/upperHeader.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "auto" : "hidden";
  };
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="z-[2] upperHeader relative">
      <div className="px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:mx-[auto] min-[1520px]:max-w-[1440px] min-[1520px]:px-[0] min-[1520px]:relative">
        <div className="flex items-center">
          <div>
            <div className="mr-[1.6rem] my-[1.6rem] md:mr-[2.4rem] lg:mr-[4rem] w-[32px] h-[32px] min-[375px]:w-[40px] min-[375px]:h-[40px] md:w-[51px] md:h-[51px] min-[1702px]:absolute min-[1702px]:right-[100%] min-[1702px]:top-[50%] min-[1702px]:translate-y-[-50%]">
              <a href="/" className="block">
                <StarLogo />
              </a>
            </div>
          </div>
          <div className="hidden md:flex lg:items-center grow">
            <MenuOptions />
            <div className="rightPart flex items-center ml-auto gap-x-[4.8rem] shrink-0 text-[1.4rem]">
              <FindStore />
              <div className="flex gap-[16px] items-center">
                <SignButton innerText={"Sign In"} />
                <JoinButton innerText={"Join now"} />
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 top-0 right-0 w-[44px] mx-[1.6rem] md:mx-[2.4rem] md:hidden"
            onClick={() => {
              handleNav();
              setOpenMenu(false);
            }}
          >
            <span className="absolute top-[50%] translate-y-[-50%] right-[10%]">
              <Hamburger
                color="#00000094"
                toggled={isOpen}
                size="24"
                rounded
                toggle={setOpen}
              />
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? `md:hidden bg-black/[.38] fixed left-0 w-full h-[calc(100%-64px)] top-[64px] min-[375px]:h-[calc(100%-72px)] min-[375px]:top-[72px] md:h-[calc(100%-83px)] md:top-[83px] ease-in duration-300`
            : "bg-transparent ease-in duration-300"
        }
      >
        <div
          className={`bg-[#fff] pt-[3.2rem] overflow-auto fixed right-0 w-[80vw] bottom-auto top-[64px] h-[calc(100%-64px)] min-[375px]:h-[calc(100%-72px)] min-[375px]:top-[72px] md:h-[calc(100%-83px)] md:top-[83px] text-left md:hidden ease-out duration-300 ${
            nav ? `left-[20vw]` : `left-[100%]`
          }`}
          style={{
            boxShadow:
              "inset 0 4px 3px -3px rgb(0 0 0 / 10%), inset 0 4px 2px -2px rgb(0 0 0 / 7%)",
          }}
        >
          <div>
            <div className="shrink-0">
              <ul className="tracking-widest">
                <li onClick={handleMenu}>
                  <button className="py-[1.6rem] px-[3.2rem] text-[1.9rem] decoration-none flex flex-row-reverse justify-between w-full md:text-[2.4rem]">
                    <div className="relative w-[24px] h-[24px] rotate-[270deg]">
                      <Arrow />
                    </div>
                    <span>Menu</span>
                  </button>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-left block py-[1.6rem] px-[3.2rem] w-full text-[1.9rem] decoration-none md:text-[2.4rem]"
                  >
                    Rewards
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.starbucks.com/gift"
                    className="text-left block py-[1.6rem] px-[3.2rem] w-full text-[1.9rem] decoration-none md:text-[2.4rem]"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <hr
              aria-hidden="true"
              className="mt-[1.6rem] mb-[3.2rem] mx-[3.2rem]"
            />
            <div className="inline-block px-[2.4rem]">
              <div className="ml-auto text-[1.4rem] shrink-0">
                <SignButton innerText={"Sign In"} />
                <JoinButton innerText={"Join now"} />
                <div className="block text-center pr-[0.8rem] mt-[1.6rem]">
                  <FindStore />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-[#fff] block w-[80vw] fixed overflow-auto  top-[64px] h-[calc(100%-64px)] min-[375px]:h-[calc(100%-72px)] min-[375px]:top-[72px] md:h-[calc(100%-83px)] bottom-auto ease-out duration-300 ${
              openMenu ? `right-0 left-[20vw]` : `right-[-100%] left-[100%]`
            }`}
            style={{
              boxShadow:
                "inset 0 4px 3px -3px rgba(0,0,0,.1), inset 0 4px 2px -2px rgba(0,0,0,.07)",
            }}
          >
            <ul className="absolute top-0 left-0 w-full block">
              <li onClick={handleMenu}>
                <button
                  className="relative text-center bg-[#f9f9f9] py-[1.6rem] px-[3.2rem] w-full block text-[1.9rem] no-underline"
                  style={{ boxShadow: "inset 0 4px 5px -3px rgba(0,0,0,.2)" }}
                >
                  <div className="absolute left-[24px] top-[16px] h-[24px] w-[24px] align-middle rotate-90">
                    <Arrow />
                  </div>
                  <span>Menu</span>
                </button>
              </li>
              <li>
                <MenuItem
                  link={"https://www.starbucks.com/menu"}
                  innerText={"All products"}
                />
              </li>
              <li>
                <MenuItem
                  link={"https://www.starbucks.com/menu/featured/"}
                  innerText={"Featured"}
                />
              </li>
              <li>
                <MenuItem
                  link={"https://www.starbucks.com/menu/previous"}
                  innerText={"Previous"}
                />
              </li>
              <li>
                <MenuItem
                  link={"https://www.starbucks.com/menu/favorites"}
                  innerText={"Favorites"}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
