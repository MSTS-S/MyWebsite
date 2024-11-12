import React from 'react';
import './QualificationStyleComponent.css';

function QualificationTable({ data }) {
  return (
    <table className="date-text-table">
      <thead>
        <tr>
          <th className="date-col">取得年月日</th>
          <th className="text-col">資格</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="date-col">{item.date}</td>
            <td className="text-col">{item.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default QualificationTable;