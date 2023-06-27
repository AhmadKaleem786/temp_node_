import React, { useState} from "react";

const Grocerystore = () => {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState(0);
    const [itemlist,setItemlist] = useState([]);
    const [add, setAdd] = useState(true);
    const [grocery, setGrocery] = useState([]);
    const [total, setTotal] = useState(0);

    const additems = (e) => {
        setAdd(e);
    }

    const handleproduct = (e) =>{
        setItem(e.target.value)
    }

    const handleprice = (e) =>{
        setPrice(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item !== ''  && price !== 0){
            setItemlist([...itemlist, {item: item, price: price}])
        }
        setItem('');
        setPrice(0);
    }

    const handledelete = (i) => {
        setItemlist(itemlist.filter((a)=> a.item !== i.item));
    }

    const handleclear = (i) =>{
        setGrocery([]);
        setTotal(0);
    }

    const handlegrocery = (i) =>{
        let array = [...grocery];
        let index = grocery.findIndex(a => a.item === i.item);
        if(index === -1){
            setGrocery([...grocery, {item: i.item, price: i.price, quantity: 1}])
        }
        else{
            array[index] = {item: i.item, price: i.price, quantity: array[index].quantity+1}
            setGrocery(array);
        }
        setTotal(total+Number(i.price));
    }

    return(
        <div>
            <h3 class="text-lg font-bold dark:text-white">Please select from options given below:</h3><br />
            <button type="button" class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" onClick={()=>additems(true)}>
                Add items
            </button><>&emsp;&emsp;</>
            <button type="button" class="bg-blue-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-green-500 rounded" onClick={()=>additems(false)}>
                Choose items
            </button><br />
            
            {add?
            <>
            <form onSubmit={ handleSubmit }>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
                <input type="text" value={ item } id="Item_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={ handleproduct }/>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" value={ price } id="Item_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={ handleprice }/>
            </div><br />
            <button type="submit" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add
            </button>
            </form>
            </>
            :<></>}<br />
            <u1>
                {itemlist?.map((i) => (
                    <>
                    <button type="button" class="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded" onClick={()=>handlegrocery(i)}>
                        {i.item} {i.price}\-
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md" onClick={()=>handledelete(i)}>
	                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	                </svg>  
                    </button>
                    <>&emsp;&emsp;</>
                    </>
                ))}
                <br />
            </u1><br />
            {add?<></>:<u1>
                {grocery.map((i, index) => (
                    <>
                        <li key={index} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {i.item} x({i.quantity}) - {i.price*i.quantity}
                        </li>
                    </>
                ))}<br />
                <h3 className="rounded-md bg-pink px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Total: {total}</h3>
                <br />
                <button type="button" class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md" onClick={ handleclear}>
	            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
	            </svg>
	            Clear
                </button>
            </u1>
            }

            
        </div>
        
    )
}

export default Grocerystore;