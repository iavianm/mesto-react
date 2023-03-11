import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  return (
    <body className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name={"info"}
        title={"Редактировать профиль"}
        button={"Сохранить"}
        label={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <Input
          id={"info-name"}
          class={"info-popup__input-name"}
          type={"text"}
          name={"inputName"}
          placeholder={"Ваше имя"}
          min={"2"}
          max={"40"}
        />
        <Input
          id={"info-description"}
          class={"info-popup__input-description"}
          type={"text"}
          name={"inputDescription"}
          placeholder={"Род деятельности"}
          min={"2"}
          max={"200"}
        />
      </PopupWithForm>
      <PopupWithForm
        name={"card"}
        title={"Новое место"}
        button={"Создать"}
        label={"Создать"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <Input
          id={"card-title"}
          class={"card-popup__input-title"}
          type={"text"}
          name={"inputTitle"}
          placeholder={"Название"}
          min={"2"}
          max={"200"}
        />
        <Input
          id={"card-url"}
          class={"card-popup__input-url"}
          type={"url"}
          name={"inputUrl"}
          placeholder={"Ссылка на картинку"}
        />
      </PopupWithForm>
      <PopupWithForm
        name={"change_avatar"}
        title={"Обновить аватар"}
        button={"Сохранить"}
        label={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <Input
          id={"avatar-url"}
          class={"popup__input_type_link"}
          type={"url"}
          name={"inputAvatarUrl"}
          placeholder={"Ссылка на картинку"}
        />
      </PopupWithForm>
      <PopupWithForm
        name={"card-delete"}
        title={"Вы уверены?"}
        button={"Да"}
        label={"Подтвердить"}
        onClose={closeAllPopups}
      ></PopupWithForm>

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
        isOpen={isImagePopupOpen}
      />
    </body>
  );
}

export default App;
