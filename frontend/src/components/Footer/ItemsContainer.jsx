import Item from "./Item"; // Assuming the Item component is in the same directory
import whitelogo from '../assets/whitelogo.svg'
import { CONTACT, RESOURCES, COMPANY} from "../menu";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-5 px-4 py-7 text-white text-lg font-bold font-sans justify-left items-left"> 
    <img className="w-1/2 h-auto max-w-full" src={whitelogo} alt="logo" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="SERVICES" />
      <Item Links={CONTACT}  title="CONTACT"/>
    </div>
  
  );
};

export default ItemsContainer;
