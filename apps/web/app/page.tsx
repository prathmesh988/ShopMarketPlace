import React from 'react';
import { ShopCard } from '@/components/Shop';


const ShopData2 = [
  {
    seller: 'seller 1',
    Products: [{
      image: 'https://heroui.com/images/album-cover.png',
      title: 'Product 1',
      price: '$10.00',
      reviews: 10,
      isAvailable: true,
      Product: 'ProductDummy'
    },
    {
      image: 'https://heroui.com/images/album-cover.png',
      title: 'Product 2',
      price: '$10.00',
      reviews: 10,
      isAvailable: true,
      Product: 'ProductDummy'
    }, {
      image: 'https://heroui.com/images/album-cover.png',
      title: 'Product 3',
      price: '$10.00',
      reviews: 10,
      isAvailable: true,
      Product: 'ProductDummy'
    },

    ]
  }
  , {
    seller: 'seller 2',
    Products: [{
      image: 'https://heroui.com/images/album-cover.png',
      title: 'Product 1',
      price: '$10.00',
      reviews: 10,
      isAvailable: true,
      Product: 'ProductDummy'
    },
    {
      image: 'https://heroui.com/images/album-cover.png',
      title: 'Product 2',
      price: '$10.00',
      reviews: 10,
      isAvailable: true,
      Product: 'ProductDummy'
    }, {
      image: 'https://heroui.com/images/album-cover.png',
      title: 'Product 3',
      price: '$10.00',
      reviews: 10,
      isAvailable: true,
      Product: 'ProductDummy'
    },

    ]
  }
]
export default function ShopPage() {
  return <>
    <div
      className=' w-full'
    >


      {
        // shopData.sort((a, b) => a.seller.localeCompare(b.seller))
        //   .map((data, index) => <ShopCard key={index} {...data} />)
        ShopData2.map((seller) => <>
          <div
            className='flex flex-col gap-2 m-3'
          >
            <span> {seller.seller}</span>
            <div
              className='flex  gap-3 flex-wrap'
            >
              {
                seller.Products.map((Product) => (<ShopCard {...Product} />))
              }

            </div>
          </div>
        </>)
      }
    </div>
  </>
}


