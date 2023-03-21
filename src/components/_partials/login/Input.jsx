
function Input({ type, id, Class, autoComplete = "off", focus = false, name }) {
  // console.log(`Type: ${type}\nID: ${id}\nClass: ${Class}\nAutoComplete: ${autoComplete}\nFocus: ${focus}`);
  return (
    <input
      type={type}
      id={id}
      autoFocus={focus}
      className={Class}
      autoComplete={autoComplete}
      name={name}
    />
  );
}

export default Input;
