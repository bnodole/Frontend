import React, { useState } from 'react'

const CustomUseState = () => {
    var [data,setData] = useState(0);
    function increase() {
        setData(data+1);
    }
    function decrease() {
        setData(data-1);
    }
    function reset() {
        setData(data=0);
    }
  return (
    <div>
        <h1>COUNTER</h1>
        <h2 className='text-green-700'>{data}</h2>
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default CustomUseState