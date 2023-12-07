import React from 'react';
import './TableBody.css';
import UsersIcons from '../UsersIcons';

const TableBody = ({ rows, onClick }) => {
    return (
        <tbody className="body">
            {rows.map((row) => {
                if (row.field) {
                    return (
                        <tr key={row.id} onClick={() => onClick(row)}>
                            <td>{row.field}</td>
                        </tr>
                    );
                }

                return (
                    <tr key={row.id} onClick={() => onClick(row)}>
                        <td>{row.title}</td>
                        <td>{row.createdAt}</td>
                        <td>{row.finishedAt}</td>
                        <td>{<UsersIcons owners={row.owners} />}</td>
                        <td>{row.priority}</td>
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
