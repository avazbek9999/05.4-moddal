import React from 'react';
import './App.scss';
import Modal from './Components/Modal/Modal';

function App() {
  const [open, setOpen] = React.useState(false);
	return (
    <>
      <button className="open__btn" onClick={()=>setOpen(true)}>Open</button>
			<Modal open={open} setOpen={setOpen} />
		</>
	);
}

export default App;
