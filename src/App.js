import React, {createContext, useEffect, useReducer} from 'react'
import 'semantic-ui-css/semantic.min.css'
import Searchbar from './component/Searchbar'
import reducer from './Reducer'
import axios from "axios"
import Categories from './component/Categories'
import {Route} from "react-router-dom";

import CategiriesDetay from "./component/CategiriesDetay";
import Cards from './component/Cards'
import Header from './component/Header'
import "./style.css"


const initialstate = ({categorie:[],products:[],card:[],search:"",}) // butun stateleri burda tanimliyoruz ve kulaniyoruz


export default function App() {

  const[state, dispatch] = useReducer(reducer, initialstate);
  
  useEffect(()=>{
    axios.get('http://localhost:3001/category')
    .then(response=>{
      dispatch({type:"SET_CATEGORIE", payload:response.data})
    })
  },[])

  return (
    <SupermarktContext.Provider value={{state,dispatch,name:"Suad"}}>
      <Header></Header>
      {/* <Searchbar></Searchbar>
      <Categories></Categories> */}
      <Route path="/" exact component={Categories}/>
      <Route path="/categori/:id" component={CategiriesDetay}/>
      <Route path="/cards" component={Cards} />
      
    </SupermarktContext.Provider>
  )
}

export const SupermarktContext = createContext();


