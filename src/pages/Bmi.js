import React from 'react';
import { Link } from 'react-router-dom';

function Bmi() {
  return (
    <div>
      <h2>Vücut Kitle Endeksi Nedir?</h2>
      <div>
      <img src='./body-scale-1.png' alt='tartı' width='325' style={{float: 'right'}}/>
        <p>İnsan vücudunda bulunan yağ oranını tespit etmek için kullanılan bir değerdir. Gün geçtikçe daha popüler olan VKE ( VKI, BMI olarakda isimlendirilir), obezite durumunu tespit etmek için kullanılan bir değerdir.</p>

        <p>Tüm insanlarda doğru değer vermeyebilir. Çünkü bir sporcunun vücut kitle endeksi ile sürekli oturan bir kişinin vücut kitle endeksi aynı değildir. Bu nedenle bir uzman tarafından yapılmasında fayda vardır. Vücut kitle endeksi ile elde edilen değer, zayıflık veya kiloluk arasındaki yeri belirler. </p>

        <h3>Vücut Kitle Endeksi Tablosu</h3>
        <p>Aşağıdaki tabloda VKE DEĞER aralığı ve ona karşılık gelen VKE TİPİ bulunmaktadır.</p>
        <table>
          <tr>
            <th>VKE DEĞERİ</th><th>VKE TİPİ</th>
          </tr><tr>
            <td>&lsaquo; 18,5</td><td>ZAYIF</td>
          </tr><tr>
            <td>18,5 - 25</td><td>İDEAL</td>
          </tr><tr>
            <td>25 - 29.9</td><td>KİLOLU</td>
          </tr><tr>
            <td>30 - 34,9</td><td>OBEZ</td>
          </tr><tr>
            <td>35 &rsaquo;</td><td>İDEAL</td>
          </tr>
        </table>

        <p>VKE tinipiniz öğrenmek için <Link to='/'>tıklayınız</Link>.</p>
      </div>
    </div>
  );
}

export default Bmi;