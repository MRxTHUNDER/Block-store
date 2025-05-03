import React from 'react';
import { Construction, Sparkles } from 'lucide-react';

interface ComingSoonProps {
    title?: string;
    description?: string;
}

export function ComingSoon({
                               title = "Coming Soon",
                               description = "We're working hard to bring you something amazing. Stay tuned!"
                           }: ComingSoonProps) {
    return (
        <div className="min-h-screen bg-[#000000] flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                        <Construction className="w-16 h-16 text-white animate-bounce" />
                        <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-2 -right-2 animate-pulse" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        {title}
                    </h1>

                    <p className="text-lg text-white/80 max-w-md">
                        {description}
                    </p>

                    <div className="flex space-x-3 mt-8">
                        <div className="w-3 h-3 rounded-full bg-white/60 animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-white/60 animate-pulse delay-75"></div>
                        <div className="w-3 h-3 rounded-full bg-white/60 animate-pulse delay-150"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}