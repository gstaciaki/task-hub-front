import React from 'react';
import './TableBody.css';
import UsersIcons from '../UsersIcons';

const TableBody = ({ rows, onClick, isNewTaskFieldPresent, newTaskField }) => {

  const priorityMap = {
    'urgent': 'Urgente',
    'high': 'Alta',
    'normal': 'Média',
    'low': 'Baixa'
  }

  return (
    <tbody className="body">
      {rows.map((row) => {
        if (row.field && isNewTaskFieldPresent) {
          return (
            <React.Fragment key={row.id}>
              <tr>
                <td colSpan="5">{newTaskField}</td>
              </tr>
              <tr key={row.id} onClick={() => onClick(row)}>
                <td>{row.field}</td>
              </tr>
            </React.Fragment>
          );
        }

        return (
          <tr key={row.id} onClick={() => onClick(row)}>
            <td>{row.title}</td>
            <td>{row.created_at}</td>
            <td>{row.finished_at}</td>
            <td>{<UsersIcons owners={row.owners} />}</td>
            <td>{priorityMap[row.priority]}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
