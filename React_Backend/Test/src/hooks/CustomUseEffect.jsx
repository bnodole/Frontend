import React, { useEffect } from 'react'

const CustomUseEffect = () => {
    useEffect(()=>{
        console.log("first")
        return ()=>{
            console.log("FUnction")
        }
    })
    return (
      <div>
          <div>
              <button>Increase</button>
              <button>Decrease</button>
              <button>Reset</button>
          </div>
      </div>
    )
}

export default CustomUseEffect