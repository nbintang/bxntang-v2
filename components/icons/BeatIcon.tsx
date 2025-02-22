import * as React from "react";
import { motion } from "motion/react";

const AnimatedBeatIcon = ({ barCount = 5 }: { barCount?: number }) => {
  const [barHeights, setBarHeights] = React.useState<number[]>(
    Array(barCount).fill(10)
  );
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights(
        Array(barCount)
          .fill(0)
          .map(() => Math.floor(Math.random() * 25) + 5)
      );
    }, 300);
    return () => clearInterval(interval);
  }, [barCount]);
  return (
    <div className="flex gap-[0.5px]  overflow-hidden  items-end">
      {barHeights.map((height, index) => (
        <motion.div
          key={index}
          initial={{ height: 1 }}
          animate={{ height }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="w-[0.10rem] bg-[#1DB954] "
          style={{ minHeight: 1 }}
        />
      ))}
    </div>
  );
};

export default AnimatedBeatIcon;
