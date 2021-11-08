//app.jsx============================================
// import React from 'react';
// import './App.scss';
// import Modal from './Components/Modal/Modal';

// function App() {
//   const elModal = React.useRef();
// 	return (
// 		<>
//       <button className='open-button' onClick={ () => {
//         elModal.current.classList.add('modal--open');
//       }}>
// 				Open
// 			</button>
// 			<Modal elModal={elModal} />
// 		</>
// 	);
// }

// export default App;

//modaljsx====================================
// import './Modal.scss';

// function Modal({ elModal }) {
// 	const henadelClick = (evt) => {
// 		const hesRemover =
// 			evt.target.matches('.modal') || evt.target.matches('.modal__btn');
// 		if (hesRemover) {
// 			elModal.current.classList.remove('modal--open');
// 		}
// 	};
// 	return (
// 		<>
// 			<div className='modal' ref={elModal} onClick={henadelClick}>
// 				<div className='modal__inner'>
// 					<h1 className='modal__headding'>Title</h1>
// 					<button className='modal__btn'>Close</button>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
// export default Modal;
