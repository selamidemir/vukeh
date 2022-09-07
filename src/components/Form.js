import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import HistoryContext from '../context/HistoryContext';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Input = styled.input`
  padding: 5px;
  padding-left: 45px;
  font-size: 19px;
  display: block;
  width: 80%;
  // border: 1px solid black;
  border-radius: 5px;
  background-img: url(body-scale.svg);
  background-repead: none;
`;

const Card = styled.div`
  border: 1px #1C626C solid;
  border-radius: 5px;
  background-color: #9CB565;
  padding: 13px;
  max-width: 315px;
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 15px;
`;

const Button = styled.button`
  padding: 7px;
  font-size: 17px;
  margin-top: 15px;
  cursor: pointer;
  background-color: #1C626C;
  color: white;
  border-radius: 5px;
  width: 95%;
`;

const Label = styled.label`
  display: block;
  margin-top: 15px;
`;

const H3 = styled.label`
  color: #1C626C;
  font-size: 21px;
  font-weight: 900;
`;

function Form() {
  const [name, setName] = useState('');
  const [size, setSize] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sizeError, setSizeError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const { history, setHistory } = useContext(HistoryContext);

  const closeModal = () => setOpenModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sizeM = (size / 100) * (size / 100);
    const date = new Date();
    const data = {
      date: date.toLocaleDateString(),
      name: name,
      size: size,
      weight: weight,
      bim: Math.round((weight / sizeM), 2),
    };

    let err = false;
    if (parseInt(weight) <= 0) {
      setWeightError('Lütfen Kilonuzu Giriniz');
      err = true;
    }
    if (parseInt(size) <= 0) {
      setSizeError('Lütfen Boyunuzu Giriniz');
      err = true;
    }
    if (err) return;
    
    setHistory([...history, data]);
    localStorage.setItem("bim_history", JSON.stringify([data, ...history]));

    setName('');
    setSize(0);
    setWeight(0);

    setOpenModal(true);
  }

  return (
    <>
      <Card>
        <form onSubmit={(e) => handleSubmit(e)}>
          <H3>VKE HESAPLA</H3>
          <hr />
          <Label htmlFor='name'>İsim</Label>
          <Input
            name='name' id='name' value={name}
            onChange={(e) => setName(e.target.value)} />
          <Label htmlFor='size'>Boy (cm)</Label>  <span className='error'>{sizeError}</span>
          <Input
            name='size' id='size' type='number' value={size} min='0'
            onChange={(e) => setSize(e.target.value)} />
          <Label htmlFor='weight'>Kilo (kg)</Label>  <span className='error'>{weightError}</span>
          <Input
            name='weight' id='weight' value={weight} min='0'
            type='number' onChange={(e) => setWeight(e.target.value)} />
          <Button type='submit'>Hesapla</Button>
        </form>
      </Card>

      <Popup open={openModal} modal closeOnDocumentClick onClose={closeModal}>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="modal-header"> Modal Title </div>
            <div className="modal-content">
              Sizin VKE değeriniz <strong>{JSON.stringify(history[0].bim)}</strong> şeklindedir. Size uygun diyet programı için <Link to='/diyet'>tıklayınız</Link>.
            </div>
            {/* <div className="actions">
              <button className="button"> Diyet </button>

              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Kapat
              </button>
            </div> */}
          </div>
        )}
      </Popup>
    </>
  );
}

export default Form;