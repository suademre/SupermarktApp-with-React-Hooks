import React,{ useContext } from 'react'
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react'
import {SupermarktContext} from "../App"


export default function Searchbar() {
    const context = useContext(SupermarktContext);
    
    return (
        <div className="surch">
            <Input name="search" icon="search" placeholder="Search.." onChange={(e)=>{context.dispatch({type:"SET_SEARCH", payload: e.target.value})}} >

            </Input>
            <br/>
            <Link to="/">Ana Sayfa</Link>
            <Link to="/cards">Cards</Link>

            
        </div>
    )
}
