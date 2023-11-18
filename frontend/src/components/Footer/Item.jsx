import React from "react";


const Item = ({ Links, title }) => {
  return (
    
    <ul>
         <h1 className="mb-1 font-semibold">{title}</h1>
            {Links.map((link) => (
              <li key={link.name}>
  
        <a className="text-white hover:text-sky duration-300 font-sans text-lg cursor-pointer  ml-4" href={link.link}> 
          <div className="flex items-center"><ion-icon  name={link.namee}></ion-icon>
          <h3 className="text-xl font-bold italic font-roboto ml-2">{link.contacts}</h3>
        </div>
        <h1>{link.name}</h1>
        
</a>
          
        </li>
      ))}
    </ul>
  );
};

export default Item;
