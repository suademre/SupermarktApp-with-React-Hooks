import React,{ useContext } from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import {SupermarktContext} from "../App"

export default function Categories() {
    const contex = useContext(SupermarktContext);
    console.log(contex);

    const array = ['red','yellow','green','orange','blue','black','white']
    
    return (
        <Card.Group>
            {contex.state.categorie.map((categori,id)=>
                
            <Card fluid color={array[id]} header='Option 1' key={id}>
        
                <Link to={`/categori/${categori.id}`}>{categori.sef}</Link>
            </Card>  
            )}  
                    
            
        </Card.Group>
    )
}
