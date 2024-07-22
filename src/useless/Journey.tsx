import { useEffect, useRef, useState } from "react";
import Card from "./Card.tsx";
import { throttle } from "../utils.ts";

const item = {
  id: 1,
  title: "Title 1",
  description: "Description 1",
};
const Journey = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pos, setPos] = useState({ x: 80, y: 100 });
  const amplitude = 30; // Height of the wave
  const frequency = 0.005; // Frequency of the wave
  const phaseShift = 1; // Phase shift of the wave
  const verticalShift = 0; // Vertical position of the wave

  const drawSineWave = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    //scaling the canvas and drawing context
    // Get the device pixel ratio
    const ratio = window.devicePixelRatio || 1;

    // Scale the canvas by the device pixel ratio
    canvasRef.current.width *= ratio;
    canvasRef.current.height *= ratio;
    // Scale the drawing context back down by the same ratio
    ctx.scale(ratio, ratio);

    ctx.save(); // Save the current state

    ctx.translate(
      canvasRef.current.width / (2 * ratio),
      canvasRef.current.height / (2 * ratio)
    );

    // Rotate the context by 45 degrees
    ctx.rotate(Math.PI / 4);

    ctx.beginPath();
    ctx.moveTo(-500, verticalShift);

    for (let x = -500; x < canvasRef.current.width; x += 1) {
      const y =
        amplitude * Math.sin(2 * Math.PI * frequency * x + phaseShift) +
        verticalShift;
      ctx.lineTo(x, y);
    }

    // Translate back to the top left corner
    ctx.strokeStyle = "aqua";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.translate(-canvasRef.current.width / 2, -canvasRef.current.height / 2);
    ctx.restore(); // Restore the previous state
  };
  const handleScroll = (e) => {
    e.preventDefault();
    const scrollTop = e.target.documentElement.scrollTop;
    const orgX = (1 - scrollTop / window.innerHeight) * 50 + 20;
    const orgY = 90 - 10 * Math.sin(2 * Math.PI * frequency * scrollTop);
    setPos({ x: orgX, y: orgY });
  };

  window.addEventListener("scroll", throttle(handleScroll, 50));
  useEffect(() => {
    drawSineWave();
  }, [canvasRef.current]);
  return (
    <div>
      <canvas
        ref={canvasRef}
        id="myCanvas"
        style={{
          width: "100vw",
          position: "fixed",
          top: 10,
        }}
      ></canvas>
      <div className="scroll-watcher"></div>

      <Card key={item.id} {...item} x={pos.x + "vw"} y={pos.y + "vh"} />
      <Card
        key={item.id}
        title="title 2"
        description="description 2"
        x={pos.x + 10 + "vw"}
        y={pos.y + 10 + "vh"}
      />
    </div>
  );
};
export default Journey;
