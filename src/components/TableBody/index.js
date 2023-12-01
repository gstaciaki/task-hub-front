import React from 'react';
import './TableBody.css';
import UsersIcons from '../UsersIcons';
//<UserIcon text={row.owner} />
const TableBody = (props) => {

    return (
        <tbody className="body">
            {props.rows.map((row) => {
                if (row.field) return (
                    <tr key={row.id}>
                        <td>{row.field}</td>
                    </tr>
                )
                return (
                    <tr key={row.id}>
                        <td>{row.title}</td>
                        <td>{row.createdAt}</td>
                        <td>{row.finishedAt}</td>
                        <td>{<UsersIcons owners={row.owners} />}</td>
                        <td>{row.priority}</td>
                    </tr>
                )
            })}
        </tbody>
    );
}

export default TableBody;
