import './Modal.scss';

function Modal({ open, setOpen }) {
	return (
		<>
			<div
				className={`modal ${open && 'modal--open'}`}
				onClick={(evt) => {
					if (
						evt.target.matches('.modal') ||
						evt.target.matches('.modal__btn')
					) {
						setOpen(false);
					}
				}}>
				<div className='modal__inner'>
					<h1 className='modal__headding'>Title</h1>
					<button className='modal__btn'>Close</button>
				</div>
			</div>
		</>
	);
}
export default Modal;
