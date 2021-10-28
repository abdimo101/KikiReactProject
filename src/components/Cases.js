import { useState, useEffect } from 'react'; 

function Cases() {


    const [ activeCategory, setActiveCategory ] = useState("");
    const [activeColor, setActiveColor] = useState("FFFFFF")

    const categories = [
       { name: "Design companies", color:"#82FF33"},
       { name: "Retail", color:"#FFFE54"}
    ]

    const cases = [
        { name: "Royal Copenhagen"},
        { name: "Montana"},
        { name: "Inspiration"},
        { name: "BOOZT"}
    ]

    useEffect(() => {
    
    }, [activeCategory]);

    function categoryClicked(name)
    {
        setActiveCategory(name)
        setActiveColor("#82FF33")
       
    }

    return ( 
        <div className="cases">
            <h1>Case oversigt</h1>

            {categories.map( c => <button style={{backgroundColor: activeColor}} onClick={() => categoryClicked(c.name)}>{c.name}</button>)}
            <br></br>
            <br></br>
            {cases.map( c => <div>{c.name}</div>)}
           

        </div>
     );

}

export default Cases;