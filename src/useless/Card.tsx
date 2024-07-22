const Card = ({
  title,
  description,
  x,
  y,
}: {
  title: string;
  description: string;
  x: string;
  y: string;
}) => {
  return (
    <div
      className="scrolling-card z-10 flex flex-col items-center justify-center rounded-md border p-4 text-white"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
