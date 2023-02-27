import Incomes from './pages/Incomes.jsx'
import Expenses from './pages/Expenses.jsx'
import Navbar from './pages/Navbar.jsx'
import { useRef } from 'react'

import { Route, Routes } from 'react-router-dom'
import Title from './components/Title.jsx'

function App() {

  const formRef = useRef()



  const closeForm = () => {
    formRef.current.classList.toggle('closed-form');
}

  return (
    <div className="main-body">
        <Title/>
        <div className='app-container mg-inline p-block'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Incomes formRef={formRef} closeForm={closeForm}/>} />
            <Route path='/expenses' element={<Expenses formRef={formRef} closeForm={closeForm}/>} />
          </Routes>
        </div>
        
    </div>
  )
}

export default App
