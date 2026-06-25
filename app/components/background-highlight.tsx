import { useCallback, useEffect, useRef } from 'react';

export function BackgroundHighlight() {
  const highlightRef: React.RefObject<HTMLDivElement | null> = useRef(null);
  const animationFrameRef: React.RefObject<number | null> = useRef(null);

  const state = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    targetOpacity: 0,
    currentOpacity: 0,
    isActive: false,
  });
  const hideTimer = useRef<number>(0);

  // 事件监听器
  const handleMouseMove = useCallback((e: MouseEvent) => {
    state.current.targetX = e.clientX;
    state.current.targetY = e.clientY;
    if (!state.current.isActive) {
      state.current.isActive = true;
      state.current.targetOpacity = 1;
    }
  }, []);
  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    state.current.targetX = touch.clientX;
    state.current.targetY = touch.clientY;
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    const animate = () => {
      const s = state.current;

      // console.log({
      //   ht: hideTimer.current,
      //   cx: s.currentX,
      //   cy: s.currentY,
      //   tx: s.targetX,
      //   ty: s.targetY,
      //   to: s.targetOpacity,
      //   co: s.currentOpacity,
      //   ia: s.isActive,
      // });
      if (!s.isActive) {
        hideTimer.current = 0;
      }
      if (
        Math.round(s.currentX) === s.targetX &&
        Math.round(s.currentY) === s.targetY
      ) {
        hideTimer.current = hideTimer.current + 1;
        if (s.isActive && hideTimer.current > 300) {
          state.current.isActive = false;
          state.current.targetOpacity = 0;
        }
      } else {
        hideTimer.current = 0;
      }

      // 线性插值 (Lerp) - 可调整系数控制缓动速度
      const positionLerp = 0.08; // 位置跟随速度
      const opacityLerp = 0.1; // 透明度变化速度

      s.currentX += (s.targetX - s.currentX) * positionLerp;
      s.currentY += (s.targetY - s.currentY) * positionLerp;
      s.currentOpacity += (s.targetOpacity - s.currentOpacity) * opacityLerp;

      // 虽然直接操作DOM不太好，但是它快啊
      if (highlightRef.current) {
        highlightRef.current.style.transform = `translate3d(${s.currentX}px, ${s.currentY}px, 0) translate(-50%, -50%)`;
        highlightRef.current.style.opacity = s.currentOpacity.toString();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <div
      className="z-1 fixed top-0 bottom-0 left-0 right-0 w-screen h-screen pointer-events-none"
      aria-hidden
    >
      <div
        ref={highlightRef}
        className="absolute w-3/5 aspect-square blur-3xl will-change-transform contain-layout contain-style contain-paint"
        style={{
          background: `
            radial-gradient(circle at center, rgba(107, 52, 85, 0.15) 0%, transparent 50%),
            radial-gradient(circle at center, rgba(107, 52, 85, 0.1) 30%, transparent 65%),
            radial-gradient(circle at center, rgba(107, 52, 85, 0.05) 0%, transparent 40%)
          `,
          transform: 'translate3d(0, 0, 0)',
          opacity: 0,
        }}
      ></div>
    </div>
  );
}
