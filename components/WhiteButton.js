const WhiteButton = ({ text }) => {
  return (
    <button className="bg-white text-black px-9 py-2.5 cursor-pointer hover:bg-gray-200">
      {text}
    </button>
  );
};

export default WhiteButton;
