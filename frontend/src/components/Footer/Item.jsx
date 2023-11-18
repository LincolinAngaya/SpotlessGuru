import React from "react";


const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
        <a
  className="text-white hover:text-sky-400 duration-300 font-sans
          text-sm cursor-pointer leading-6 ml-4 capitalize"
  href={link.link}
>
{link.icon} <span className="mr-2"></span> {link.name}
          
          </a>
          <div></div>
        </li>
      ))}
    </ul>
  );
};

export default Item;
