import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Login(){
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[value, setValue] = useState([])

    const login = () =>{
        if(!email || !password){
            alert("required email and password")
            return
        }

        // object create karta hai
        const newdata ={
            email,
            password,
        } 

        // old and newdata add
        setValue([...value, newdata])
        
        setEmail("")
        setPassword("")  
    }

    useEffect(() => {
        console.log(value)
    }, [value])

    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-purple-100">
                <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
                    <h1 className="text-center text-2xl font-bold text-green-600 mb-5">Login Form</h1>

                    <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 mb-5 border border-gray-300 outline-none rounded-xl focus:ring-1 focus:ring-green-300"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />

                    <input 
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full p-3 mb-5 border border-gray-300 outline-none rounded-xl focus:ring-1 focus:ring-green-300"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                    
                    <button 
                    onClick={login}
                    className="bg-green-600 w-full border p-3 rounded-2xl font-semibold text-white  hover:bg-green-700 duration-500">
                        Login
                    </button>
                </div> 
                {/* {
                    value.map((item, index) => (
                    <div key={index}>
                        <p>{item.email}</p>
                        <p>{item.password}</p>
                    </div>
                    ))
                } */}
            </div>
        </>
    )
}
export default Login