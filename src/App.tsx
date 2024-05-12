import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/slices/slice';
import { RootState } from './store/store';
import Header from './components/Header/Header'


function App() {
  const count = useSelector((state: RootState) => state.example.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <Header />
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <h2>redux + typeScript</h2>
    </>
  )
}

export default App
