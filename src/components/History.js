import React, { useContext } from 'react';
import HistoryContext from '../context/HistoryContext';

function History() {
    const { history } = useContext(HistoryContext);
    const makeRow = (item, key) => (
        <tr key={key}>
            <td>{item.date}</td>
            <td>{item.weight}</td>
            <td>{item.size}</td>
            <td>{item.bim}</td>
        </tr>);
    return (
        <div className='history'>
            <h3>VKE Önceki Ölçümler</h3>
            <table className='history-table'>
                <thead><tr><th>Tarih</th><th>Kilo (kg)</th><th>Boy (cm)</th><th>VKE</th></tr></thead>
                <tbody>
                    {
                        history.map((item, key) => makeRow(item, key))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default History;