import logoSneakers from "@/assets/images/logo.svg";
import imagenAvatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import imgCartSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

const MainHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const MOBILE_MENU_OPEN_CLASS = "absolute top-0 left-0 z-10 flex h-full w-4/6 flex-col gap-y-5 bg-white p-8 font-bold";

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className="container relative mx-auto flex items-center gap-8 p-6 md:p-0 ">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img src={logoSneakers} alt="Logo Sneakers" className="mr-auto mb-1 h-5 md:mr-0" />{" "}
        {/* mr-auto = Ocupa todo el espacio disponible hacia la derecha */}
        <nav className={`md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 ${isOpenMenu ? MOBILE_MENU_OPEN_CLASS : "hidden"}`}>
          <button className="mb-12 w-5 md:hidden" onClick={handleCloseMenu}>
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

          <section className="absolute top-[125%] left-0 z-10 hidden w-full bg-red-300">
            <div className="mx-4 rounded-lg bg-white">
              <h4 className="p-5 font-bold">Cart</h4>
              <hr />
              <div className="grid grid-cols-[1fr_4fr_1fr] gap-4 p-5">
                <img className="rounded-lg" src={imgCartSmall} alt="" />
                <div className="">
                  <h6>Fall Limited Edition Sneakers</h6>
                  <div>
                    <span>$125.00 x 3</span>
                    <span className="font-bold">$375.00</span>
                  </div>
                </div>
                <button>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </section>
        </div>
      </header>
      <hr className="container mx-auto hidden md:block" />
    </>
  );
};

export default MainHeader;
