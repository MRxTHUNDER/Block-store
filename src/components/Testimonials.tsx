import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${
                    index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
            />
        ));
    };

    return (
        <main className="container mx-auto px-6 py-8">
            <section className="mt-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Product Reviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            device: "Wingbits",
                            review:
                                "Wingbits has truly transformed my workflow. Its intuitive interface and robust performance make data collection seamless and efficient. Highly recommended for professionals needing reliable tech!",
                            reviewer: "Saurav Mishra",
                            gender: "male",
                        },
                        {
                            device: "Goednet",
                            review:
                                "Goednet stands out with its superior connectivity and user-friendly setup. The consistent performance and sleek design make it a must-have for anyone looking to enhance their network experience.",
                            reviewer: "Sahil",
                            gender: "male",
                        },
                        {
                            device: "Geopluse",
                            review:
                                "Geopluse delivers exceptional accuracy and fast data processing. It's become an indispensable tool in our fieldwork, offering unmatched reliability and ease of use.",
                            reviewer: "Harshita",
                            gender: "female",
                        },
                        {
                            device: "WeatherXM",
                            review:
                                "WeatherXM provides incredibly precise weather data and forecasts. Its durability and advanced features are perfect for both casual users and professionals alike.",
                            reviewer: "Harsh Yadav",
                            gender: "male",
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-[#0f1729] rounded-xl p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                {renderStars(5)}
                            </div>
                            <p className="text-gray-400">{item.review}</p>
                            <div className="mt-4 flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                                    {item.gender === "male" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20 2h-5a1 1 0 000 2h2.586l-3.464 3.464A6.957 6.957 0 0012 7a7 7 0 107 7c0-1.482-.455-2.854-1.236-3.99L21 6.414V9a1 1 0 002 0V4a2 2 0 00-2-2zM9 20a5 5 0 110-10 5 5 0 010 10z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 14a5 5 0 100-10 5 5 0 000 10zm0 2c-3.033 0-5.5 2.243-5.5 5a1 1 0 002 0c0-1.656 1.57-3 3.5-3s3.5 1.344 3.5 3a1 1 0 002 0c0-2.757-2.467-5-5.5-5z" />
                                        </svg>
                                    )}
                                </div>
                                <span className="font-medium">{item.reviewer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Testimonials;
