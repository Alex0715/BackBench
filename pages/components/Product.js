import Image from "next/dist/client/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import {addToBasket} from "../slices/basketSlice";

function Product({id,title,price,description,category,image}) {
    //  const dispatch = useDispatch();
    const [rating]=useState(
        Math.floor(Math.random()*(5-1))+1
    );
    const addItemToBasket = () => {
        const product={
            id,title,price,description,category,image,
        };
        dispatch(addToBasket(product));
    };
    return (
        <main className="relative flex flex-col z-30 p-10 m-5 bg-white">
        <p className="absolute top-2 right-2 text-xs">{category}</p>

        <Image className="flex" src={image} height={200} width={200} objectFit="contain"/>
        <h4 className="font-bold">{title}</h4>   
        <div className="flex"> 
            {Array(rating)
            .fill()
            .map((_,i) => (
                <StarIcon className="text-yellow-400 h-5" />
            ))
            }        
        </div>
        <p>₹{price*50}</p>
        <p className="text-xs p-2">{description}</p>

        <button className="bg-yellow-500 hover:bg-yellow-600 flex-grow-0 p-4 rounded-md">Add to Basket</button>
        </main>
    )
}

export default Product
