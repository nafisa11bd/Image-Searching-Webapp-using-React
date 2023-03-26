function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt="pocha" />
    </div>
  );
}

export default ImageShow;
