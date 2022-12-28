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
  const [isOpenCart, setIsOpenCart] = useState(false);

  const MOBILE_MENU_OPEN_CLASS =
    "fixed top-0 left-0 z-20 flex h-full w-4/6 flex-col gap-y-5 p-8 font-bold bg-white border-r-2 border-slate-300 md:font-normal md:border-0";

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const handleOpenCart = () => setIsOpenCart(!isOpenCart);

  return (
    <>
      {isOpenMenu && <span className={`fixed z-10 h-full w-full bg-black opacity-75 md:hidden`}></span>}
      <header className="container relative mx-auto flex items-center gap-8 p-6 md:p-0">
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
            <CartIcon onClick={handleOpenCart} />
          </button>
          <img src={imagenAvatar} alt="" className="w-10" />

          {isOpenCart && (
            <section className="absolute top-[125%] left-0 z-10 w-full md:top-[80%] md:left-[60%] md:w-3/6 lg:w-5/12 xl:left-[70%] xl:w-4/12 2xl:left-[78%] 2xl:w-3/12">
              <div className="mx-4 rounded-lg bg-white pb-7 shadow-2xl">
                <h4 className="p-5 font-bold">Cart</h4>
                <hr />
                <div className="grid grid-cols-[1fr_4fr_1fr] gap-4 p-5">
                  <img className="min-w-[55px] rounded-lg" src={imgCartSmall} alt="" />
                  <div className="flex-col items-center justify-center">
                    <h6 className="text-sm text-dark-grayish">Fall Limited Edition Sneakers</h6>
                    <div className="flex gap-3">
                      <span className="text-sm text-dark-grayish">$125.00 x 3</span>
                      <span className="text-sm font-bold">$375.00</span>
                    </div>
                  </div>
                  <button>
                    <DeleteIcon />
                  </button>
                </div>
                <div className="mx-auto flex w-5/6 items-center justify-center">
                  <button className="w-full rounded-lg bg-orange-personal px-2 py-3 font-bold text-white shadow-lg hover:bg-orange-400">
                    Checkout
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </header>
      <hr className="container mx-auto hidden md:block" />
    </>
  );
};

export default MainHeader;
