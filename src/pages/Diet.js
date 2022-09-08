import React, {useState} from 'react';

function DietInfo() {
    return (
        <>
            <h3>Kahvaltı</h3>
            <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Amet consectetuer adipiscing elit</li>
                <li>Euismod tincidunt ut laoreet</li>
                <li>Diam nonummy nibh</li>
            </ul>
            <h3>Ara Öğün</h3>
            <ul>
                <li>Lorem ipsum dolor</li>
                <li>Sit amet consectetuer</li>
            </ul>
            <h3>Öğlen Yemeği</h3>
            <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Amet consectetuer adipiscing elit</li>
                <li>Euismod tincidunt ut laoreet</li>
                <li>Diam nonummy nibh</li>
            </ul>
            <h3>Ara Öğün</h3>
            <ul>
                <li>Lorem ipsum dolor</li>
                <li>Sit amet consectetuer</li>
            </ul>
            <h3>Akşam Yemeği</h3>
            <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Amet consectetuer adipiscing elit</li>
                <li>Euismod tincidunt ut laoreet</li>
                <li>Diam nonummy nibh</li>
            </ul>
            <h3>Ara Öğün</h3>
            <ul>
                <li>Lorem ipsum dolor</li>
                <li>Sit amet consectetuer</li>
            </ul>
        </>
    );
}

function ThinnessDiet() {
    return (
        <>
            <h2>Zayıf Kişi Diyeti</h2>
            <img src='https://images.unsplash.com/photo-1541766574321-8b81276f2102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='diet yemek' />
            <DietInfo />
        </>
    )
}

function NormalDiet() {
    return (
        <>
            <h2>İdeal Kilolu Kişi Dieti</h2>
            <img src='https://images.unsplash.com/photo-1556386734-4227a180d19e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80' alt='diet yemek' />
            <DietInfo />
        </>
    )
}

function OverweightDiet() {
    return (
        <>
            <h2>Kilolu Kişi Diyeti</h2>
            <img src='https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80' alt='diet yemek' />
            <DietInfo />
        </>
    );
}

function ObeseDiet() {
    return (
        <>
            <h2>Obez Diyeti</h2>
            <img src='https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='diet yemek' />
            <DietInfo />
        </>
    );
}

function Obese1Diet() {
    return (
        <>
            <h2>Aşırı Obez Diyeti</h2>
            <img src='https://images.unsplash.com/photo-1556386470-bcdc6a5e9b9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80' alt='diet yemek' />
            <DietInfo />
        </>
    );
}

function Diet() {
    const [dietType, setDietType] = useState('thinness');
    return (
        <div className='diet'>
            {/* <div className='diet-info'>Lütfen VKE TİPİNİZE göre uygun diyet programını seçiniz.</div> */}

            <div className='diet-links'>
                <button onClick={() => setDietType('thinness')}>ZAYIF</button> 
                <button onClick={() => setDietType('normal')}>İDEAL</button>
                <button onClick={() => setDietType('overweight')}>KİLOLU</button>
                <button onClick={() => setDietType('obese')}>OBEZ</button>
                <button onClick={() => setDietType('obese1')}>AŞIRI OBEZ</button>
            </div>

            <div className='diet-infarmation'>
                { dietType === 'thinness' ? <ThinnessDiet /> : ''}
                { dietType === 'normal' ? <NormalDiet /> : ''}
                { dietType === 'overweight' ? <OverweightDiet /> : ''}
                { dietType === 'obese' ? <ObeseDiet /> : ''}
                { dietType === 'obese1' ? <Obese1Diet /> : ''}
            </div>
        </div>
    );
}

export default Diet;