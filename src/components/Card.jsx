const Card = ({ children }) => {
  return (
    <div className="relative h-full w-full rounded-md border-2 p-8">
      {children}
    </div>
  );
};

export default Card;
