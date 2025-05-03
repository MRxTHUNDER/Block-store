// feature-section.tsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom"; // For routing

interface Feature {
    step: string;
    title?: string;
    content: string;
    image: string;
    link?: string;
}

interface FeatureStepsProps {
    features: Feature[];
    className?: string;
    title?: string;
    autoPlayInterval?: number;
    imageHeight?: string;
}

export function FeatureSteps({
                                 features,
                                 className,
                                 title = "How to get Started",
                                 autoPlayInterval = 3000,
                                 imageHeight = "h-[400px]",
                             }: FeatureStepsProps) {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
            } else {
                setCurrentFeature((prev) => (prev + 1) % features.length);
                setProgress(0);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [progress, features.length, autoPlayInterval]);

    return (
        <div className={cn("p-6 md:p-12 bg-gradient-to-br from-white to-gray-50", className)}>
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
                    {title}
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Step Descriptions */}
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={cn(
                                    "flex items-start gap-4 p-4 rounded-xl transition-all duration-300",
                                    index === currentFeature
                                        ? "bg-white shadow-lg ring-2 ring-primary"
                                        : "bg-muted"
                                )}
                                initial={{ opacity: 0.3 }}
                                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div
                                    className={cn(
                                        "min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full text-white text-lg font-bold transition",
                                        index === currentFeature
                                            ? "bg-primary"
                                            : "bg-gray-300 text-gray-800"
                                    )}
                                >
                                    {index <= currentFeature ? <CheckCircle className="w-6 h-6" /> : index + 1}
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                                        {feature.title || feature.step}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 mt-1 leading-relaxed">
                                        {feature.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Section */}
                    <div className={cn("relative rounded-xl overflow-hidden", imageHeight)}>
                        <AnimatePresence mode="wait">
                            {features.map(
                                (feature, index) =>
                                    index === currentFeature && (
                                        <motion.div
                                            key={index}
                                            className="absolute inset-0 rounded-xl overflow-hidden"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Link to={feature.link || "#"}>
                                                <img
                                                    src={feature.image}
                                                    alt={feature.step}
                                                    className="w-full h-full object-cover cursor-pointer"
                                                />
                                                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
                                            </Link>
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
