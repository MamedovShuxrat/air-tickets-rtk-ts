import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/slices/slice';
import { RootState } from './store/store';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MainBlock from './components/MainBlock/MainBlock'


function App() {
  const count = useSelector((state: RootState) => state.example.value)
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <main >
        <div className="container">
          <div className="page">
            <Sidebar />
            <MainBlock />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
