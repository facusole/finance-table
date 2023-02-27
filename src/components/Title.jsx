import '../css/Title.css'

export default function Title() {
    return (
        <div className='mg-inline p-block'>
            <h1 className='main-title' style={{fontWeight: 600, letterSpacing: '-1px'}}>Keep track of your economy 💸</h1>
            <sub className='sub-title'>Track your incomes and expenses, all in one table</sub>
        </div>
        
    )
}