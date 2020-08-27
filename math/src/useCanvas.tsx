import { useRef, useEffect } from "react";

const useCanvas = (draw: Function, options = { context: "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext(options.context || "2d");
    let frameCount = 0;
    let animationFrameId: number;
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return canvasRef;
};
export default useCanvas;
