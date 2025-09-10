import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain effect
    const chars = '01010101ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍABCDEF0123456789QUANTUM∞Ψφλπσθ≡≠≤≥∑∆∇∂∃∀⊕⊗⊙♦♥♠♣';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    // Colors for different elements
    const colors = [
      '#00ff41', // Classic green
      '#00d4aa', // Cyan
      '#0099ff', // Blue
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
    ];

    let frame = 0;

    const draw = () => {
      // Create trailing effect
      ctx.fillStyle = 'rgba(15, 15, 35, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Color gradient effect
        const colorIndex = Math.floor(Math.random() * colors.length);
        const alpha = Math.random() * 0.8 + 0.2;
        ctx.fillStyle = colors[colorIndex] + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frame++;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Matrix canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-80"
        style={{ background: 'transparent' }}
      />
      
      {/* Digital grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Glowing orbs for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/6 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-drift" />
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Scanning lines */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60"
          style={{
            top: '20%',
            animation: 'scan-line 8s linear infinite'
          }}
        />
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40"
          style={{
            top: '60%',
            animation: 'scan-line 12s linear infinite reverse'
          }}
        />
      </div>

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: 'noise 0.2s infinite'
        }}
      />

      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />

      {/* Additional CSS animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        @keyframes scan-line {
          0% { transform: translateY(-100vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
