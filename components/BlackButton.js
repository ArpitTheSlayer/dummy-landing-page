"use client";

const BlackButton = ({ text, ref }) => {
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="w-fit bg-gray-800 text-white px-9 py-2.5 cursor-pointer hover:bg-gray-900"
    >
      {text}
    </button>
  );
};

export default BlackButton;
