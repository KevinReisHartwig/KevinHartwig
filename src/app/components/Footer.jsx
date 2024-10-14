import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex justify-between items-center">
        <span>
          <Image 
            src="/images/projects/logo.png" 
            alt="Logo" 
            width={50} 
            height={50} 
            style={{ borderRadius: '50%' }}
            className="h-auto w-auto" 
          />
        </span>
        <p className="text-slate-600">Copyright &copy; 2024. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
