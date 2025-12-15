"use client";

const WhiteButton = ({ text, ref }) => {
  const handleClick = () => {
    if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-fit bg-white text-black px-9 py-2.5 cursor-pointer hover:bg-gray-200"
    >
      {text}
    </button>
  );
};

export default WhiteButton;
