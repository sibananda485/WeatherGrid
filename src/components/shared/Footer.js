import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-200 px-2 sm:px-10">
      <ul className="grid grid-cols-2 sm:flex gap-4">
        <li className="col-span-2 mr-auto">
          Developed by -{" "}
          <a className="hover:text-blue-600" href="tel:+918433980976">
            @Sibananda
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-600"
            href="https://github.com/sibananda485"
          >
            Github
          </a>
        </li>
        <li>
          <a className="hover:text-blue-600" href="">
            SourceCode
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-600"
            href="https://wa.me/+918433980976?text=Hii%20Shiva!,%20i%27m%20interested%20for%20a%20new%20project."
          >
            Whatsapp
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-600"
            href="https://www.linkedin.com/in/sibananda485/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
