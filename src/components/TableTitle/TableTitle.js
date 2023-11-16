import './TableTitle.css'

const TableTitle = () => {

    const fields = ['Prop 1', 'Prop 2', 'Prop 3']

    return (
        <thead className="title">
            <tr>
                {fields.map((field, index) => {
                    return <th key={index}>{field}</th>
                })}
            </tr>
        </thead>
    )
}

export default TableTitle