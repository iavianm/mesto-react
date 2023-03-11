function Input(props) {
  return (
    <>
      <input
        id={props.id}
        className={`popup__input ${props.class}`}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
        minLength={props.min}
        maxLength={props.max}
      />
      <span className={`popup__input-error ${props.id}-error`}></span>
    </>
  );
}

export default Input;
