import React from "react";


const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-white hover:text-sky-400 duration-300 font-sans
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
          <div>{link.icon}</div>
        </li>
      ))}
    </ul>
  );
};

export default Item;
