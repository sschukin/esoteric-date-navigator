
import { useMemo } from "react";

const BackgroundPattern = () => {
  const stars = useMemo(() => {
    const result = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.2;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      
      result.push({ size, opacity, top, left, delay });
    }
    return result;
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sacred geometry pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,37,69,0.15)_0%,transparent_70%)]" />
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'rgba(255, 215, 0, 0.8)',
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            animationDuration: `${3 + star.delay}s`,
          }}
        />
      ))}
      
      {/* Large glowing circles */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] rounded-full bg-accent/5 blur-[80px] animate-pulse" style={{ animationDuration: '7s' }} />
    </div>
  );
};

export default BackgroundPattern;
