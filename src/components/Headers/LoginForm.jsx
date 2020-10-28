import React from 'react'


const LoginForm = () => {
    return (
        <div>
            <form action="" className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label htmlFor="inline-email" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input type="text" id="inline-email" className="bg-gray-300 apparence-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 laeding-tight focus:outline-none focus:bg-white focus:border-green-200"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
 export default LoginForm