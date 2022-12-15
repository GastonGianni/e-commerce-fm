import logoSneakers from "@/assets/images/logo.svg";
import imagenAvatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";

const MainHeader = () => {
  const [navOpenClass, setNavOpenClass] = useState("hidden md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0");

  const handleOpenMenu = () => {
    setNavOpenClass("absolute z-10 top-0 left-0 flex h-full w-4/6 flex-col gap-y-5 bg-white p-8 font-bold");
  };
  const handleCloseMenu = () => {
    setNavOpenClass("hidden md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0");
  };
  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-6 md:p-0 ">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img src={logoSneakers} alt="Logo Sneakers" className="mr-auto mb-1 h-5 md:mr-0" />{" "}
        {/* mr-auto = Ocupa todo el espacio disponible hacia la derecha */}
        <nav className={navOpenClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader linkName="Collection" />
          <NavLinkHeader linkName="Men" />
          <NavLinkHeader linkName="Women" />
          <NavLinkHeader linkName="About" />
          <NavLinkHeader linkName="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={imagenAvatar} alt="" className="w-10" />
        </div>
      </header>
      <hr className="container mx-auto hidden md:block" />
    </>
  );
};

export default MainHeader;
