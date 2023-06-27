import React, {useState} from "react";

const Userinput = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState([]);

    const handlename = (e) => {
        setName(e.target.value);
    }

    const handleemail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
         if (name === '' || email === ''){
            return;
         }

         setUser([...user,{name, email}]);

         setName('');
         setEmail('');
    }

    
    return(
        <div>
        <form onSubmit = { handleSubmit }>
            <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name:
                </label>
                <div className="mt-2">
                <input
                    type="text"
                    value = {name}
                    id="name"
                    autoComplete="name"
                    onChange= { handlename }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email:
                </label>
                <div className="mt-2">
                <input
                    type="email"
                    value= {email}
                    id="email"
                    autoComplete="email"
                    onChange={ handleemail }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <br />
            <button type="submit" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add
            </button>
        </form>

    <ul>
        {user.map((users,index) => (
        <li key={index} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {users.name} - {users.email}
        </li>
        ))}
    </ul>
    </div>
    );
}

export default Userinput;