const WhiteButton = ({ text }) => {
  return (
    <button className="w-fit bg-white text-black px-9 py-2.5 cursor-pointer hover:bg-gray-200">
      {text}
    </button>
  );
};

export default WhiteButton;
