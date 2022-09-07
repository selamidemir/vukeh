import React, { useContext } from 'react';
import Form from '../components/Form';
import styled from 'styled-components';
import History from '../components/History';
import HistoryContext from '../context/HistoryContext';

const Card = styled.div`
  padding: 13px;
  max-width: 315px;
  width: 100%;
  height: 100%;
  color: black;
  font-weight: 500;
  font-size: 21px;
  font-shadow: 2px 2px;
`;

function Home() {
  const {history} = useContext(HistoryContext);

  return (
    <div style={{ width: '100%', maxWidth: '768px' }}>

      <div className='beetwen-box'>
        <Card>
          <div className='info'><img src='./body-scale-1.png' width='125' alt='tartı' />Sağlıklı bir yaşam için VKE değerinizi düzenli kotrol ediniz. Bunun için sayfamızdan yardım alabilirsiniz. İsminizi, boy ve kilonuzu giriniz ve hesapla düğmesine tıklayınız.</div>
          <hr />
          <div style={{ color: 'red', fontWeight: '900' }}>Unutmayın isminizi girdiğinizde, daha sonraki sayfamızı ziyaret ettiğinizde önceki kayıtlarınızı da görebileceksiniz.</div>
        </Card>

        <Form />

      </div>

      {
        history.length ? <History /> : ''
      }

    </div>
  );
}

export default Home;