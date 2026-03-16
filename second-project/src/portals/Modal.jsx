import { createPortal } from "react-dom";
const Modal = (props) => {
  console.log(props); //{open: false , closeModal:f}
  let { open, closeModal } = props;

  //! createPortal(children , domNode)

  if (open == false) {
    return null;
  } else {
    return createPortal(
      <div>
        <h2>Hello , I'm a modal!</h2>
        <button onClick={closeModal}>Close modal</button>
      </div>,
      document.getElementById("portal"),
    );
  }
};
export default Modal;
