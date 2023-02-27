import Row from "./Row"

import '../css/Table.css'

export default function Table({ rows, deleteRow }) {
    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                        <tr className="mg-inline table-titles">
                            <th>Title or reason</th>
                            <th>Amount</th>
                            <th>Date of creation</th>
                            <th className='last-child' style={{'color': 'hsl(0, 69%, 56%)'}}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => (
                            <Row idx={idx} rows={rows} row={row} deleteRow={deleteRow} key={Math.random() * 10000} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
