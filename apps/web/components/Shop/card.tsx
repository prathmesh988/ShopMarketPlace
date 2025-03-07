'use client'

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image"
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

interface ShopCardProps {
    image: string,
    isAvailable: Boolean,
    reviews: number,
    Product: string,
}

export const ShopCard = ({ image, isAvailable, reviews, Product }: ShopCardProps) => {
    return <>
        <Card className="pt-5 w-[180px]">
            <div className=" flex justify-between w-[100%] px-2">

                <p className="text-tiny ">{isAvailable ? <div
                    className="text-green-500"
                >Available </div> : "Available soon."}</p>
            </div>

            <p className="self-start px-2  pb-2">{Product}</p>
            <Card isFooterBlurred className="border-none relative" radius="lg">

                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover "
                        height={200}
                        src={image}
                        width={200}
                    />

                </motion.div>


                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">


                    <p>reviews: {reviews}</p>
                    <Button
                        className="text-tiny text-white bg-black/20"
                        color="default"
                        radius="lg"
                        size="sm"
                        variant="flat"
                    >
                        {isAvailable ? "Shop" : "Notify Me"}
                    </Button>

                </CardFooter>
            </Card>
        </Card>


    </>
}