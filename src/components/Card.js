function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <img
        className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button
        className="element__delete"
        aria-label="Удалить"
        type="button"
      ></button>
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-button-group">
          <button
            className="element__like"
            aria-label="Оценка"
            type="button"
          ></button>
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
