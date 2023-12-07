import './DetailsBlock.css'

const DetailsBlock = () => {
    return (
        <div className='detailsBlock'>
            <table>
                <thead>Detalhes</thead>
                <tbody>
                    <th>
                        <td>Data de Criacao</td>
                        <td>Data de Finalizacao</td>
                        <td>Prioridade</td>
                        <td>Responsavel</td>
                    </th>
                    <tr>
                        <td>Valor</td>
                        <td>Valor</td>
                        <td>Valor</td>
                        <td>Valor</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsBlock