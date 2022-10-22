const Images = ({ images, images_class }) => {
  return (
    <>
      <img src={images} alt="shopping_offer" className={images_class} />
    </>
  );
};

export default Images;
