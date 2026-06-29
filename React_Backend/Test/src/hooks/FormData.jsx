import React, { useState } from 'react'

const FormData = () => {
    const [datas,setDatas] = useState({
        username: "",
        email: "",
        password: ""
    });

    //One Basic Way (Not Recommended to use document methods in js)
    // function addData(e) {
    //     e.preventDefault();
    //     const name = document.getElementById("username").value;
    //     const email = document.getElementById("email").value;
    //     const password = document.getElementById("password").value;
    //     setDatas(datas.name = name);
    //     setDatas(datas.email = email);
    //     setDatas(datas.password = password);
    //     console.log(datas);
    // }

    //Another Way
    function handleForm(e){
        const {name,value} = e.target;
        setDatas({...datas, [name]:value});
    }

    function addData(e){
        e.preventDefault();
        console.log(datas);
    }
  return (
    <div>
        <form action="">
            <input type="text" name="username" id="username" onChange={handleForm} className='border border-black'/><br />
            <input type="email" name="email" id="email" onChange={handleForm} className='border border-black'/><br />
            <input type="password" name="password" id="password" onChange={handleForm} className='border border-black'/><br />
            <button onClick={addData}>Submit</button>
        </form>
    </div>
  )
}

export default FormData