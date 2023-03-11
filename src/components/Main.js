import { useState, useEffect } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        const currentUser = res;
        setUserName(currentUser.name);
        setUserDescription(currentUser.about);
        setUserAvatar(currentUser.avatar);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        const initialCards = res;
        setCards(initialCards);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-outside">
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Изменить аватар"
            onClick={props.onEditAvatar}
          >
            <img className="profile__avatar" src={userAvatar} alt="аватар" />
          </button>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            aria-label="Изменить"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          aria-label="Добавить"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
