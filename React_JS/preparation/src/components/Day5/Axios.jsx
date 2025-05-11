import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    let url = `https://fakestoreapi.com/products`

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data);
            setFilteredData(response.data);

            const uniqueCategories = ['all', ...new Set(response.data.map(val => val.category))];
            setCategories(uniqueCategories)
            // console.log(response.data)
        })
        .catch((e)=> console.log("This is Axios Error : ",e)) 
    },[]);
    
    
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        if(category === 'all'){setFilteredData(data)}
        else {
            const filtered = data.filter(val => val.category === category)
            setFilteredData(filtered)
        }
    }

  return (
    <>
        <h1>Hi Shasha, How are You?  </h1>
        
        <select onChange={handleCategoryChange} value={selectedCategory} >
            {
                categories.map((cat, index) => (
                    <option key={index} value={cat} > {cat} </option>
                ))
            }
        </select>

        {
            filteredData.map((val) => (
                <p key={val.id} > {val.id} - {val.title} = <b>{val.price} </b> </p>
            ))
        }
     
    </>
 



)
}

export default Axios







// Example 2 :
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Axios() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // let url = 'https://jsonplaceholder.typicode.com/users'
//     let url = 'https://fakestoreapi.com/products'
//     async function fetchData() {
//       try {
//         const res = await axios.get(url);
//         setUsers(res.data);
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <ul>
//       {users.map(user => <li key={user.id}>{user.title} - <b>{user.price}</b></li>)}
//     </ul>
//   );
// }

// export default Axios