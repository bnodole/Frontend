import React, { useEffect, useState } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

export const Darkmode = () => {
    const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("dark"):"light");
    useEffect(
        ()=>{
            const element =  document.documentElement;

            if(theme === "dark"){
                element.classList.add("dark");
                localStorage.setItem("theme","dark");
            }else{
                element.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        },[theme]
    )
  return (
    <>
    {
        (theme === "dark") ? <BiSolidSun onClick={()=>setTheme("light")}/> : <BiSolidMoon onClick={()=>setTheme("dark")}/> 
    }
    </>
  )
}
