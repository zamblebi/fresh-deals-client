import React from 'react'



const RegisterForm = () => {
    return (
        <div className="container m-2">
        
            <form action="">
                <div>
                    <label htmlFor="first_name" className="block">First Name</label>
                    <div>
                        <input type="text" placeholder="Jhon" className="bg-gray-200" id="fisrt_name"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="last_name" className="block">Last name</label>
                    <div>
                        <input type="text" id="last_name" className="bg-gray-200 " placeholder="Doe"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block">Email</label>
                    <div>
                        <input type="email" id="email" className="bg-gray-200 " placeholder="xx@xxx.x"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block">Last name</label>
                    <div>
                        <input type="password" id="password" className="bg-gray-200 " placeholder="*****"/>
                    </div>
                </div>
                <div className="mt-2">
                    <button className="btnLogin">Register</button>
                </div>
            </form>
        </div>
    )
}



export default RegisterForm