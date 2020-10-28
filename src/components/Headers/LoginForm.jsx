import React from 'react'


const LoginForm = () => {
    return (
        <div className="m-2">
            <form action="" className="w-full max-w-sm m-auto h-auto pt-20 flex flex-col justify-center">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label htmlFor="inline-email" className="labelLogin">
                            Email
                        </label>
                    </div>

                    <div className="md:w-2/3">
                        <input type="text" id="inline-email" className="inputLogin"/>
                    </div>

                </div>
                <div className="md:flex md:items-center mb-6">

                <div className="md:w-1/3">
                    <label htmlFor="inline-password" className="labelLogin">
                        Password
                    </label>
                </div>

                <div className="md:w-2/3">
                    <input type="password" for="inline-password" className="inputLogin"/>
                </div>
                
                </div>
                
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3 w-full m-auto">
                        <button className="btnLogin">Connect</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
 export default LoginForm