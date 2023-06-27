import React, {useState} from "react";

const Inputname = () => {

    let [school, setSchool] = useState({});
    const [name, setName] = useState('');
    const [item, setItem] = useState({});
    const [staff, setStaff] = useState("teacher");

    const proceed = (e) => {
        setStaff(`${e.target.name}`)
    }

    const handlename = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name){
        
        if(item?.id){
            let array = [...(school?.[staff] || [])];
            const index = array.findIndex(i=>i.id==item.id);
            console.log(index)
            array[index] = {id:item.id, name:name};
            school = {
                ...school,
                [staff]:array
            }
            setItem({})

            // school = {
            //     ...school,
            //     [staff]:[...(school?.[staff] || []), {name:name, id:id}]
            // }

        } else{
            const id = Math.floor(Math.random() * 10000);
            school = {
                ...school,
                [staff]:[...(school?.[staff] || []), {name:name, id:id}]
            }
        }


        setSchool(school);
        setName('');
        }
    }

    const handledelete = (id) => {

        setSchool(school[staff].map((i) => i.id !== id));
    }

    const handleedit = (item) => {
        setItem(item);
        setName(item?.name);
    }



    console.log(school)
    const hell = "rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
    
    return(
        <div>
            <form onSubmit = { handleSubmit }>
            <br />
            <button type="button" className= {hell} name="teacher" onClick={proceed}>Teacher</button>
            <button type="button" className= {hell} name="student" onClick={proceed}>Student</button>
            <button type="button" className= {hell} name="labstaff" onClick={proceed}>Lab Staff</button>
            <button type="button" className= {hell} name="helper" onClick={proceed}>Helper</button><br /><br />
            <button type="button" className= {hell} name="repair" onClick={proceed}>Repair</button><br /><br />
            <div>{ staff }</div>
            <input
                    type="name"
                    value= {name}
                    id= {staff}
                    onChange={ handlename }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <br />
            
            <button type="submit" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {item?.id?"Update":"Add"}
            </button>
            </form>
            <ul>
                {(school?.[staff] || []).map((schools,index) => (
                <li key={index} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {schools.name} - {schools.id} - <button className= {hell} type="button" onClick={() =>handledelete(schools.id)}>del</button>
                    - <button className= {hell} type="button" onClick={() =>handleedit(schools)}>edit</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Inputname;