const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      console.log("Clicked"); // Check if handleClick is called
      if (bigShoeImg !== imgURL.bigShoe) {
        console.log("Changing bigShoeImage"); // Check if this condition is met
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    console.log("bigShoeImg:", bigShoeImg);
    console.log("imgURL.bigShoe:", imgURL.bigShoe);
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgURL.bigShoe
            ? 'border-coral-red'
            : 'border-transparent'
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
  