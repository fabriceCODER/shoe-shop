
import React from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";


import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 

const items = [
  { icon: <BsFillTelephoneFill />, description: "+212 000 xx xx xx" },
  { icon: <AiOutlineMail />, description: "example@gmail.com" },
  { icon: <AiOutlineGlobal />, description: "your address here" },
];

const ProductCard = ({ name, price, description, imageUrl }: any) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg">
    <img className="w-full" src={imageUrl} alt={name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <p className="text-gray-900 text-xl mt-2">${price.toFixed(2)}</p>
    </div>
    <div className="px-6 py-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Add to Cart
      </button>
    </div>
  </div>
);

const ProductsPage: React.FC = () => {

  const shoes = [
    {
      id: 1,
      name: 'Jordan 1',
      price: 89.99,
      description: 'A comfortable and lightweight for hooping',
      imageUrl: '/shoe2.jpg',
    },
    {
      id: 2,
      name: 'Jordan 1',
      price: 129.99,
      description: 'Durable hiking boot with great ankle support.',
      imageUrl: '/shoe2.jpg',
    },
    {
      id: 1,
      name: 'Jordan 1',
      price: 99.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe2.jpg', 
    },
    {
      id: 1,
      name: 'Jordan 1',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe2.jpg',
    },
    {
      id: 1,
      name: 'Nike Airforce ',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe.jpg', 
    },
    {
      id: 1,
      name: 'Nike Airforce ',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe.jpg', 
    },
    {
      id: 1,
      name: 'Nike Airforce ',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe.jpg', 
    },
    {
      id: 1,
      name: 'Nike Airforce ',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe.jpg',
    },
    {
      id: 1,
      name: 'Ja one',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe2.jpg', 
    },
    {
      id: 1,
      name: 'Ja one',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe2.jpg', 
    },
    {
      id: 1,
      name: 'Ja one',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe2.jpg',
    },
    {
      id: 1,
      name: 'Ja one',
      price: 89.99,
      description: 'A comfortable and lightweight running shoe.',
      imageUrl: '/shoe2.jpg',
    },
  ];



    const stars = [
      {
        id: 1,
        name: 'Jordan 1',
        price: 89.99,
        description: 'A comfortable and lightweight for hooping',
        imageUrl: '/ja.jpg', // /images/shoe1.jpg
      },
      {
        id: 2,
        name: 'Jordan 1',
        price: 129.99,
        description: 'Durable hiking boot with great ankle support.',
        imageUrl: '/ja.jpg',
      },
      {
        id: 1,
        name: 'Jordan 1',
        price: 99.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/ja.jpg', 
      },
      {
        id: 1,
        name: 'Jordan 1',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/ja.jpg',
      },
      {
        id: 1,
        name: 'Nike Airforce ',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/morant.jpg', 
      },
      {
        id: 1,
        name: 'Nike Airforce ',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/morant.jpg', 
      },
      {
        id: 1,
        name: 'Nike Airforce ',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/morant.jpg', 
      },
      {
        id: 1,
        name: 'Nike Airforce ',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/morant.jpg',
      },
      {
        id: 1,
        name: 'Ja one',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/ja.jpg', 
      },
      {
        id: 1,
        name: 'Ja one',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/ja.jpg', 
      },
      {
        id: 1,
        name: 'Ja one',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/ja.jpg',
      },
      {
        id: 1,
        name: 'Ja one',
        price: 89.99,
        description: 'A comfortable and lightweight running shoe.',
        imageUrl: '/ja.jpg',
      },
    ];
  
  
  return (
    <div className="bg-blue-50 p-8">
      
      <div className="container mx-auto">
        
        <div className="mx-3 py-5 text-center">
      <div className="flex gap-3 flex-wrap justify-around">
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-bold text-2xl">
          You wanna get package?
        </div>
        <ul className="text-blue-400 flex flex-wrap gap-2 md:gap-8 justify-center text-center">
          {items.map(({ icon, description }, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shoes.map((shoe) => (
            <ProductCard key={shoe.id} {...shoe} />
          ))}
        </div>
        <h2 className='p-6 text-center font-semi-bold text-black text-3xl'>Expore popular packages for NBA stars and other celebrities in the world</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stars.map((stars) => (
            <ProductCard key={stars.id} {...stars} />
          ))}
      </div>
     </div>
    </div>
  );
};

export default ProductsPage;
