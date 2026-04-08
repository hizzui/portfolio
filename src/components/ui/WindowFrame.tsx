'use client';

import { Minimize2, Minus, Square, X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import type { WindowState } from '../../types';

interface WindowFrameProps {
  window: WindowState;
  titleOverride?: string;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onFocus: (id: string) => void;
  updatePosition: (id: string, x: number, y: number) => void;
  children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  window: win,
  titleOverride,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  updatePosition,
  children,
}) => {
  const dragStartPos = useRef({ x: 0, y: 0 });
  const windowStartPos = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    if (win.isMaximized) return;
    if (isMobile) return; // Disable dragging on mobile

    isDraggingRef.current = true;
    onFocus(win.id);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    windowStartPos.current = { x: win.x, y: win.y };

    if (windowRef.current) {
      windowRef.current.style.transition = 'none';
      windowRef.current.style.boxShadow = '2px 2px 0px rgba(0,0,0,0.5)';
      windowRef.current.style.transform = 'translate(2px, 2px)';
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const dx = e.clientX - dragStartPos.current.x;
      const dy = e.clientY - dragStartPos.current.y;

      const newX = Math.max(0, windowStartPos.current.x + dx);
      const newY = Math.max(0, windowStartPos.current.y + dy);

      updatePosition(win.id, newX, newY);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      if (windowRef.current) {
        windowRef.current.style.transition = 'all 300ms cubic-bezier(0.25, 1, 0.5, 1)';
        windowRef.current.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.7)';
        windowRef.current.style.transform = 'translate(0, 0)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [win.id, updatePosition]);

  const isEffectiveMaximized = win.isMaximized && !win.isMinimized;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const style: React.CSSProperties = isEffectiveMaximized || isMobile
    ? {
        position: 'fixed',
        top: isMobile ? '80px' : '16px',
        left: '16px',
        right: '16px',
        bottom: isMobile ? '80px' : '16px',
        width: 'auto',
        height: 'auto',
        zIndex: win.zIndex + 100,
      }
    : {
        position: 'absolute',
        top: win.y,
        left: win.x,
        width: win.width ? `${win.width}px` : undefined,
        height: win.height ? `${win.height}px` : undefined,
        zIndex: win.zIndex,
      };

  const headerBg =
    win.headerColor ||
    (win.type === 'about'
      ? 'bg-orange-500'
      : win.type === 'work'
        ? 'bg-orange-500'
        : win.type === 'contact'
          ? 'bg-orange-500'
          : win.type === 'stack'
            ? 'bg-orange-500'
            : 'bg-green-500');

  if (win.isMinimized) {
    return null;
  }

  return (
    <div
      ref={windowRef}
      className={`border-4 border-black bg-white flex flex-col overflow-hidden rounded-lg shadow-[4px_4px_0_rgba(0,0,0,0.7)]`}
      style={{
        ...style,
        transition: 'all 300ms cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      onMouseDown={() => onFocus(win.id)}
    >
      <div
        className={`flex justify-between items-center p-3 border-b-4 border-black text-white font-bold cursor-move select-none ${headerBg}`}
        onMouseDown={handleMouseDown}
      >
        <span className="truncate mr-2 text-sm">{titleOverride || win.title}</span>
        <div className="flex gap-2 items-center flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose(win.id);
            }}
            className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-black bg-red-500 hover:opacity-80 active:scale-90 transition-all"
            title="Close"
          >
            <X size={12} strokeWidth={3} className="text-black pointer-events-none" />
          </button>
          {!isMobile && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMinimize(win.id);
                }}
                className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-black bg-yellow-300 hover:opacity-80 active:scale-90 transition-all"
                title="Minimize"
              >
                <Minus size={12} strokeWidth={3} className="text-black pointer-events-none" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMaximize(win.id);
                }}
                className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-black bg-green-400 hover:opacity-80 active:scale-90 transition-all"
                title={win.isMaximized ? 'Restore' : 'Maximize'}
              >
                {win.isMaximized ? (
                  <Minimize2 size={10} strokeWidth={3} className="text-black pointer-events-none" />
                ) : (
                  <Square size={10} strokeWidth={3} className="text-black pointer-events-none" />
                )}
              </button>
            </>
          )}
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-500 cubic-bezier(0.25, 1, 0.5, 1) ${
          win.isMinimized ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <div
            className="p-3 sm:p-6 pb-12 sm:pb-8 overflow-y-scroll break-words"
            style={{
              maxHeight: win.height ? `${win.height - 80}px` : (win.isMaximized || isMobile ? 'calc(100vh - 90px)' : '384px'),
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              touchAction: 'pan-y',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
