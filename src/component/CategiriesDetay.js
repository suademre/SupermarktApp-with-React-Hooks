import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { SupermarktContext } from '../App'

export default function CategiriesDetay(props) {
    const [products, setProducts] = useState([]);
    const data = useContext(SupermarktContext);

    console.log(data);
    const {id} = props.match.params; // 
    

    useEffect(()=>{
        axios.get(`http://localhost:3001/products?category.id=${id}&_limit=20`).then(response=>{
            setProducts(response.data);
        })
    },[])

    const handleSubmit = (dataa)=>{
        data.dispatch({type:"SET_CARD",payload:dataa})
    }

    
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            Categories Detay
            <Link to="/">Ana Sayfa</Link>
            <br/>
            {products.map((product,key)=>{
                return(
                    <Card key={key} className="cart">
                        <Image src={product.img} className="img" ui={false} />
                        <Card.Content className="details">
                        <Card.Header >Name : {product.name}</Card.Header>
                        <Card.Meta >
                            <span className='date'>Categorie : {product.category.name}</span>
                        </Card.Meta>
                        <Card.Description >
                            Properties: {product.variant}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='lira' />
                            {product.price}
                        </a>
                        </Card.Content>
                        <Button basic color='red' content='Add to Cart' onClick={()=>handleSubmit(product)}/>
                    </Card>
                )
            })}
        </div>
    )
}
