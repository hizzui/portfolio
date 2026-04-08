import React, { useRef } from 'react';

const SKILLS = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'JavaScript',
  'React',
  'Node.js',
  'Tailwind CSS',
  'Figma',
  'GSAP',
  'Git',
  'Linux',
  'Nginx',
  'JWT',
  'SQLAlchemy',
];

const SKILL_COLORS = ['#FF9500', '#FFB84D', '#FFAA66', '#FF8C42', '#FF7F3F'];

export const Footer: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (innerRef.current) {
      innerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black border-t-4 border-black z-50 overflow-hidden">
      <style>{`
        @keyframes scroll-carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
      <div className="flex items-center h-14 overflow-hidden">
        <div
          ref={innerRef}
          className="flex gap-2 px-6 flex-shrink-0"
          style={{
            animation: 'scroll-carousel 45s linear infinite',
            width: 'calc(300%)',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* First set */}
          {SKILLS.map((skill, idx) => (
            <span
              key={`${skill}-1-${idx}`}
              className="px-3 py-2 border-2 text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all hover:text-black cursor-pointer rounded"
              style={{
                borderColor: SKILL_COLORS[idx % SKILL_COLORS.length],
                color: SKILL_COLORS[idx % SKILL_COLORS.length],
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = SKILL_COLORS[idx % SKILL_COLORS.length];
                target.style.color = '#000000';
                target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = 'transparent';
                target.style.color = SKILL_COLORS[idx % SKILL_COLORS.length];
                target.style.transform = 'scale(1)';
              }}
            >
              {skill}
            </span>
          ))}
          {/* Duplicate set for infinite scroll */}
          {SKILLS.map((skill, idx) => (
            <span
              key={`${skill}-2-${idx}`}
              className="px-3 py-2 border-2 text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all hover:text-black cursor-pointer rounded"
              style={{
                borderColor: SKILL_COLORS[idx % SKILL_COLORS.length],
                color: SKILL_COLORS[idx % SKILL_COLORS.length],
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = SKILL_COLORS[idx % SKILL_COLORS.length];
                target.style.color = '#000000';
                target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = 'transparent';
                target.style.color = SKILL_COLORS[idx % SKILL_COLORS.length];
                target.style.transform = 'scale(1)';
              }}
            >
              {skill}
            </span>
          ))}
          {/* Third set for seamless infinite loop */}
          {SKILLS.map((skill, idx) => (
            <span
              key={`${skill}-3-${idx}`}
              className="px-3 py-2 border-2 text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all hover:text-black cursor-pointer rounded"
              style={{
                borderColor: SKILL_COLORS[idx % SKILL_COLORS.length],
                color: SKILL_COLORS[idx % SKILL_COLORS.length],
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = SKILL_COLORS[idx % SKILL_COLORS.length];
                target.style.color = '#000000';
                target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.backgroundColor = 'transparent';
                target.style.color = SKILL_COLORS[idx % SKILL_COLORS.length];
                target.style.transform = 'scale(1)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
