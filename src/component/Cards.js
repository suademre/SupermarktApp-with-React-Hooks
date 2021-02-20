import React,{ useContext } from 'react'
import{SupermarktContext} from '../App'
import {Button, Card, Icon, Image } from 'semantic-ui-react'


export default function Cards() {

    const context = useContext(SupermarktContext);

    const handleClick = (id)=>{
        const tampon = context.state.card.filter((f)=>f.id!==id)
        context.dispatch({type:"DELETE_CARD", payload:tampon})
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>

            {context.state.card.map((product,id)=>{
                return (
                    <Card key={id} className="cart">
                        <Image src={product.img} className="img" ui={false} />
                        <Card.Content>
                        <Card.Header>Name : {product.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Categorie : {product.category.name}</span>
                        </Card.Meta>
                        <Card.Description>
                            Properties: {product.variant}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='lira' />
                            {product.price}
                        </a>
                        </Card.Content>
                         <Button basic color='red' content='Delete to Cart' onClick={()=>handleClick(product.id)}/>
                    </Card>
                )
            })}
            
        </div>
    )
}


