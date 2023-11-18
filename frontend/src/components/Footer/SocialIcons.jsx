import React from "react";


const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-sky">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          href={icon.link}  // Add a link property to each icon object
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-white hover:bg-sky
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
