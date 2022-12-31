import logoSneakers from "@/assets/images/logo.svg";
import imagenAvatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartProductHeader from "@/components/header/CartProductHeader";

const MainHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleToggleMenu = () => setIsOpenMenu(!isOpenMenu);

  const handleToggleCart = () => setIsOpenCart(!isOpenCart);

  const MOBILE_MENU_OPEN_CLASS =
    "fixed top-0 left-0 z-20 flex h-full w-4/6 flex-col gap-y-5 p-8 font-bold bg-white border-r-2 border-slate-300 md:font-normal md:border-0";
  return (
    <>
      {isOpenMenu && <span className={`fixed z-10 h-full w-full bg-black opacity-75 md:hidden`}></span>}
      <header className="container relative mx-auto flex items-center gap-8 p-6 md:p-0">
        <button className="md:hidden" onClick={handleToggleMenu}>
          <MenuIcon />
        </button>
        <img src={logoSneakers} alt="Logo Sneakers" className="mr-auto mb-1 h-5 md:mr-0" />{" "}
        {/* mr-auto = Ocupa todo el espacio disponible hacia la derecha */}
        <nav className={`md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 ${isOpenMenu ? MOBILE_MENU_OPEN_CLASS : "hidden"}`}>
          <button className="mb-12 w-5 md:hidden" onClick={handleToggleMenu}>
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
            <CartIcon onClick={handleToggleCart} />
          </button>
          <img src={imagenAvatar} alt="" className="w-10" />

          {isOpenCart && <CartProductHeader />}
        </div>
      </header>
      <hr className="container mx-auto hidden md:block" />
    </>
  );
};

export default MainHeader;
