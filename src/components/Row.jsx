import { Trash } from 'iconsax-react'

import '../css/Table.css'

export default function Row({deleteRow, row, idx}) {

    const aux = (e) => {
        deleteRow(idx)
    }

    return (
        <> 
        <tr className="row-css mg-inline">
            <td>{row.reason}</td>
            <td>{`$${row.amount}`}</td>
            <td>{row.date.split('-').reverse().join('-')}</td>
            <td><button className='trash-btn last-child' onClick={aux}><Trash size={20}/></button></td>
        </tr>
        </>

    )
}