import { Add } from "iconsax-react"
import { useEffect } from "react"
import { useState } from "react"

export default function Form({handleSubmit, handleSetNewRow, newRow, formRef, closeForm}) {

    const [disabled, setDisabled] = useState(true)

    useEffect(()=> {
        setDisabled(newRow.reason === '' || newRow.amount === '' || newRow.date === '')
    }, [newRow])

    return (
        <>
            
            <form onSubmit={handleSubmit} className='form-inputs closed-form' ref={formRef}>
                <div className="p-block form-title-container">
                    <div className="form-title-headings">
                        <h1 className="mg-inline form-title">Create new entry</h1>
                        <sub className="mg-inline sub-title">Enjoy your money and spend wisely!</sub>
                    </div>
                    <button onClick={closeForm} className="form-title-btn"><Add className="rotate" size={24} /></button>
                </div>

                <div className="inputs-container p-block">
                    <div className="input-container">
                        <label htmlFor="reason" className="mg-inline label-styling">Title or reason</label>
                        <input
                            type="text"
                            name="reason"
                            value={newRow.reason}
                            autoComplete="off"
                            onChange={handleSetNewRow}
                            placeholder="Reason"
                            className="input-styling mg-inline"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="amount" className="mg-inline label-styling">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={newRow.amount}
                            autoComplete="off"
                            onChange={handleSetNewRow}
                            placeholder="Amount"
                            className="input-styling mg-inline"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="date" className="mg-inline label-styling">Date</label>
                        <input type="text"
                            name="date"
                            value={newRow.date}
                            autoComplete="off"
                            onChange={handleSetNewRow}
                            onFocus={e => e.target.type = 'date'}
                            onBlur={e => e.target.type = 'text'}
                            className="input-styling mg-inline"
                            placeholder="Select a date"
                            required />
                    </div>
                    <button type="submit"
                        disabled = {disabled}
                        className="form-btn input-styling mg-inline"
                    > + Add new 
                    </button>
                </div>
            </form>
        </>
    )
}