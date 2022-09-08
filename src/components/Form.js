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
  box-shadow: 1px 1px 5px;
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
    const bim = ((weight / sizeM)).toFixed(2);
    let bimType = 'Zayıf';
    if (bim >= 18.50 && bim <= 24.9) bimType = 'İdeal';
    else if (bim >= 25 && bim <= 29.9) bimType = 'Şişman';
    else if (bim => 30 && bim <= 34.9) bimType = 'Obez';
    else bimType = 'Aşırı Obez';
    
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
    
        const data = {
          date: date.toLocaleDateString(),
          name: name,
          size: size,
          weight: weight,
          bim: bim,
          bimType: bimType,
        };
    
    setHistory([data, ...history]);
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
            <div className="modal-header"> VKE DEĞERİNİZ </div>
            <div className="modal-content">
              <div style={{ paddingTop: '27px' }}>
                <img src='../body-scale-1.png' alt='vücut tartısı' width='135' />
              </div>
              <div>
                <p><span className='popup-title'>İSİM : </span>{history[0].name ? history[0].name : 'Bilinmiyor'}</p>
                <p><span className='popup-title'>VKE DEĞERİ :</span> <strong>{history[0].bim}</strong></p>
                <p><span className='popup-title'>VKE TİPİ :</span> <strong>{history[0].bimType}</strong></p>
                <p>Size uygun diyet programı için <Link to='/diyet'>tıklayınız</Link>.</p>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}

export default Form;