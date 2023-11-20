import React from 'react';
import './TableBody.css';
import UserIcon from '../UserIcon';

const TableBody = (props) => {

    return (
        <tbody className="body">
            {props.rows.map((row, index) => (
                <tr key={index}>
                    {Object.keys(row).map(prop => {
                        return <td> {prop == 'owner' && row[prop] ? <UserIcon text={row[prop]} /> : row[prop]} </td>
                    })}
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;
