import { useDispatch } from "react-redux";
import { CDN_URL } from "../utlis/constant";
import { addItem, removeItem } from "../utlis/cartSlice";
import { useState } from "react";

const ItemList = ({ items, isInCartPage }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-black border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-green-300 shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              
              {isInCartPage && (
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-green-300 shadow-lg"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove -
                </button>
              )}
            </div>
          </div>
          <img src={CDN_URL + item.card.info.imageId} className="w-20" alt="item"></img>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
