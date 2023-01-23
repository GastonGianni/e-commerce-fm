import React from "react";

const MainFooter = () => {
  return (
    <div className="mx-4 flex flex-wrap justify-evenly gap-4 border-t md:h-24 md:flex-row md:gap-0">
      <p className="mt-3 cursor-pointer text-sm text-slate-700">Trabaja con nosotros</p>
      <p className="mt-3 cursor-pointer text-sm text-slate-700">Términos y condiciones</p>
      <p className="mt-3 cursor-pointer text-sm text-slate-700">Accesibilidad</p>
      <p className="mt-3 cursor-pointer text-sm text-slate-700">Ayuda</p>
      <p className="mt-3 cursor-pointer text-sm text-slate-700">Privacidad</p>
      <p className="mt-3 cursor-pointer text-sm text-slate-700">Defensa del Consumidor</p>
    </div>
  );
};

export default MainFooter;
