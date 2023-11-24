"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { a } from "react-spring";

const Footer = () => {
  const pathName = usePathname().slice(1);
  const msg = useTranslations('about');
  return (

    <footer className="bg-transprent text-center rounded-lg shadow m-4 dark:bg-gray-400">
      <div className="w-full text-white mx-auto max-w-screen-xl p-4 md:flex justify-center">
        <span className="text-sm mb text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="#" className="hover:underline">La Formula Capital Group</a>
        </span>
      </div>


      <div className="w-full text-white mx-auto max-w-screen-xl p-0 flex justify-center">
        <span className="text-sm mb text-gray-500 sm:text-center dark:text-gray-400">


          <Link
            href={`/pdf/${encodeURIComponent("/disc.pdf")}`}
            target="_blank"
          >
            <div className="hover:text-primary text-center pr-4 xs:pr-0"><u>{msg('disclaimer')}</u></div>
          
          </Link>

          <Link
            href={`/pdf/${encodeURIComponent("/terms.pdf")}`}
            target="_blank"
            className="hover:text-primary"
          >
            <div className="text-center"><u>{msg('terms')}</u></div>
          </Link>




        </span>
      </div>

    </footer>






  );
};

export default Footer;
