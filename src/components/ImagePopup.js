function ImagePopup(props) {
  return (
    <div className={`popup image-popup ${props.isOpen ? "popup_opened" : ""}`}>
      <figure className="popup__container-image">
        <img
          className="popup__photo"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__figcaption">{props.card.name}</figcaption>
        <button
          aria-label="Закрыть"
          className="popup__close-button image-popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
