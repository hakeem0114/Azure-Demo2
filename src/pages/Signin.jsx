//React Imports
import { useState } from "react"


const Signin = () => {



    //Controlled variables
    const [formData, setFormData] = useState(
        {
            email: "",
            password:"",
        }
    )


    async function handleSubmit(event){
        event.preventDefault()  
        
        console.log(formData)

        //POST REQ
        const response = await fetch('/api/register', 
           {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        email:formData.email,
                        password:formData.password, 
                    }
                ),
            }
        );

        //From backend
        const data = await response.json();

        if (response.ok) { //.ok return true if succesful response
        console.log('User registered successfully:', data);
        } else {
                console.error('Error registering user:', data.message);
            }

    }

    function handleChange(event){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


  return (
    // <div>Signin</div>\
        <div id="#signin" className=" rounded-lg h-2/3 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
            </div>


            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Email address</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input 
                                id="email" name="email" placeholder="user@example.com" type="email"
                                 required="" value={formData.email} onChange={handleChange}
                                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-red-100 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />

                                <div className="hidden absolute inset-y-0 right-0 pr-3  items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" name="password" type="password" required="" 
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    value={formData.password} onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-3">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember" type="checkbox" value="1" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
                                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
                            </div>

                            <div className="text-sm leading-5">
                                <a href="#"
                                    className=" font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Sign in
                                </button>
                            </span>
                        </div>
                        <a href="#"
                            className="  font-thin text-blue-500 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            create a new acccount
                        </a>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default Signin