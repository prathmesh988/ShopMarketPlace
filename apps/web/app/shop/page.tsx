import React from 'react';
import { ShopCard } from '@/components/Shop';
const shopData = [
    {
        image: 'https://via.placeholder.com/150',
        title: 'Product 1',
        price: '$10.00',
        reviews: 10,
        seller: 'Seller 1'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Product 2',
        price: '$20.00',
        reviews: 20,
        seller: 'Seller 2'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Product 3',
        price: '$30.00',
        reviews: 30,
        seller: 'Seller 3'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Product 4',
        price: '$40.00',
        reviews: 40,
        seller: 'Seller 4'
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Product 5',
        price: '$50.00',
        reviews: 50,
        seller: 'Seller 5'
    }
];
export default function ShopPage() {
    return <>
        {shopData.map((data, index) => <ShopCard key={index} />)}

    </>
}