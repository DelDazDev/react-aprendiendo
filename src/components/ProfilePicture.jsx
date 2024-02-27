function ProfilePicture() {
  const imageUrl = "./src/assets/cachorrolince.jpg";

  const clickImagen = (e) => (e.target.style.display = "none");

  return (
    <div>
      <img onClick={(e) => clickImagen(e)} src={imageUrl} width="300px" />
    </div>
  );
}

export default ProfilePicture;
