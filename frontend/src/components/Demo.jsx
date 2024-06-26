import { useEffect, useState } from "react";
import axios from "axios";
function Demo() {
    const [jokes, setjokes] = useState([]);
    useEffect(() => {
        axios.get("/api/jokes").then((response) => {
            setjokes(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    })
    return (
        
        <div>
            jokes: {jokes.length}
            <br />
            {
                jokes.map((joke, index) => (
                    <div key={joke.id}>
                        <h3>{joke.title}</h3>
                        <p>{joke.content}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Demo;