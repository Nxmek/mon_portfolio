import mc from "./buttons.module.scss";
const Buttons = ({ textBtn, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${mc.darkBtn} ${className}`}>
      {textBtn}
    </button>
  );
};
export default Buttons;
