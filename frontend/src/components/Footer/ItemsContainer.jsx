import Item from "./Item"; // Assuming the Item component is in the same directory

import { CONTACT, RESOURCES, COMPANY } from "../menu";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={CONTACT} title="CONTACT" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />

    </div>
  );
};

export default ItemsContainer;
