import React ,{useEffect ,useState } from 'react'

export default function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datos, setDatos] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/api/users")
          .then(res => res.json() )
          .then( (result) => {

            setIsLoaded(true);
            setDatos(result.datos)

          } , (error) =>{
              setIsLoaded(true);
              setError(error)
          } )
          
    } ,[])




    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
    return (
        <React.Fragment>
            
        
            <ul style={{backgroundColor: "white"}}> 
            LIsta de usuarios
           
        {datos.map(dato => (
          <li key={dato.id}>
            {dato.name} {dato.email}
          </li>
        ))}
      
      
      

            </ul>

            

       </React.Fragment>
    )
        } 
}
