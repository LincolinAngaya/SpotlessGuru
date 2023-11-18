import React from "react";


const SocialIcons = ({ Icons }) => {
  return (
    <div>
      {Icons.map((icon) => (
        <span
          key={icon.name}
          href={icon.link}  // Add a link property to each icon object
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 cursor-pointer inline-flex items-center
          rounded-full mx-3.5 text-xl hover:text-white hover:hover:text-sky
          duration-300 ">
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
