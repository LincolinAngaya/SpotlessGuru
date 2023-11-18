import Item from "./Item"; // Assuming the Item component is in the same directory
import whitelogo from '../assets/whitelogo.svg'
import { CONTACT, RESOURCES, COMPANY} from "../menu";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-9 text-white text-lg font-bold font-sans justify-center items-center"> 
      <img className="w-auto h-auto max-w-full" src={whitelogo} alt="logo" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={CONTACT}  title="CONTACT"/>
    </div>
  
  );
};

export default ItemsContainer;
