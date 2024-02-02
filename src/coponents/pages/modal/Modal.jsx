
import { createPortal } from "react-dom";
import scss from "./Modal.module.scss";
const modalRoot = document.getElementById("portal");

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) {
		return null;
	}

	return createPortal(
		<div className={scss.backdrop} onClick={onClose}>
			<div className={scss.content} onClick={(e) => e.stopPropagation()}>
				{children}
				<button className={scss.button} onClick={onClose}>❌</button>
			</div>
		</div>,
		modalRoot
	);
};

export default Modal;
