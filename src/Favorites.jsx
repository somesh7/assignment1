import React, { useEffect, useState }  from "react";
import axios from "axios";
 


const Favorites = ()  => {
    const [name, setName] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://assignment-machstatz.herokuapp.com/planet`);
            console.log(res);

        }
        getData();
    });
    return (
        <>
        <div className="fav_div">
       <select value={name} onChange={(event) => {
     setName(event.target.value);

  }}>

 
  
  <option value="mercury">Mercury</option>
  <option value="venus">Venus</option>
  <option value="earth">Earth</option>
  <option value="mars"> Mars</option>
  <option value="ceres"> Ceres</option>
  <option value="saturn">Saturn</option>
  <option value="pluto">Pluto</option>
  <option value="haumea">Haumea</option>
  <option value="makemake">Makemake</option>
  <option value="eris">Eris</option>
</select>

<h1 className="heading"> My Favorite planet is {name}. </h1>
</div>
    </>
    );
}

export default Favorites;