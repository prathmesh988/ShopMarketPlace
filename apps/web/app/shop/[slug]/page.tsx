"use client";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Carousel } from "@/components/Product";


export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = {
    title: "Carlin KanCan Jeans",
    price: "$59.00",
    rating: 4.6,
    reviews: 165,
    description: [
      "High Rise",
      "Fading/Whiskering",
      "Slim Straight Fit",
      "Raw Edge Hems",
      "Zip Fly with Double Button Closure",
    ],
    images: ["https://plus.unsplash.com/premium_photo-1667480556783-119d25e19d6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVtbXl8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtbXl8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1559116315-702b0b4774ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVtbXl8ZW58MHx8MHx8fDA%3D"], // Replace with actual images
  };



  return (
    <div className=" flex flex-col md:flex-row md:justify-between p-6 max-w-full mx-auto gap-2 w-full">
      {/* Product Image Section */}

      <div className="w-full">
        <Carousel Images={product.images} />

      </div>


      {/* Product Info Section */}
      <div className="w-full flex justify-center">
        <div>
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-lg font-bold text-gray-700">{product.price}</p>

          {/* Ratings */}
          <div className="flex items-center gap-1 my-2">
            <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
          </div>

          {/* Description */}
          <ul className="list-disc list-inside text-gray-600">
            {product.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-4 flex gap-4">
            <Button className="bg-purple-600 text-white">Add to Cart</Button>
            <Button className="bg-black text-white">Buy Now</Button>
          </div>


        </div>

      </div>
    </div>
  );
}
