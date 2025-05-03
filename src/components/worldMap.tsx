"use client";
import { WorldMap } from "./ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
    return (
        <div className=" py-10 dark:bg-black bg-gray-300 w-full px-6 sm:px-10 lg:px-20 xl:px-40">
            <div className="max-w-7xl mx-auto text-center">
                <p className="font-bold text-xl md:text-4xl dark:text-white text-blue-600">
                    Remote{" "}
                    <span className="text-black">
            {"Connectivity".split("").map((word, idx) => (
                <motion.span
                    key={idx}
                    className="inline-block"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                    {word}
                </motion.span>
            ))}
          </span>
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    Break free from traditional boundaries, connect from anywhere.
                    {/*at the comfort of your own. Goednet Perfect for Travellers.*/}
                </p>
            </div>
            <WorldMap
                dots={[
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                        }, // Alaska (Fairbanks)
                        end: {
                            lat: 34.0522,
                            lng: -118.2437,
                        }, // Los Angeles
                    },
                    {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 28.644800, lng: 77.216721 }, // New Delhi
                    },
                    {
                        start: { lat: 28.644800, lng: 77.216721 }, // New Delhi
                        end: { lat: 19.076090, lng: 72.877426 }, // Vladivostok
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: 35.68949, lng: 139.69171 }, // Nairobi
                    },
                ]}
            />
        </div>
    );
}
