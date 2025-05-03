import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "./button";
import {useNavigate} from "react-router-dom";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/coming-soon");

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    // Optional: auto-hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="w-full bg-gray-200">
      <div className="container mx-auto">
        <div className="flex gap-8 py-15 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-5xl max-w-2xl tracking-tighter text-center text-black font-regular">
              <span className="text-spektr-cyan-50">Start Your Mining Journey</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              We help minimize downtime and quickly restore your mining operations. Use our AI-powered solution to get your earnings back to normal as soon as possible, reducing potential losses from inactive mining periods.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <div className="relative">
            <Button size="lg" className="gap-4 bg-blue-400" variant="outline" onClick={handleClick}>
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            {showPopup && (
                <div className="absolute left-1/2 top-full z-10 mt-2 w-max -translate-x-1/2 rounded bg-white p-2 text-black shadow-lg border border-gray-200">
                  Call us at: <strong>+91 9876543210</strong>
                </div>
            )}
            </div>
            <Button size="lg" className="gap-4" onClick={handleNavigate}>
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
