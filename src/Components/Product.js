import React from 'react';
import Products_Items from './productList';
import Card from './Card';
import "./product.css"

// function addcard(product){
//     return(
//     <Card
//         title= {Products_Items.title}
//         price= {Products_Items.price}
//         description= {Products_Items.description}
//         img={Products_Items.image}
//     />
//     )
// }

function Product() {
    return (
        <div className='main'>
            <h1 >New products</h1>
            <hr className='lineone'></hr>
            <div className='product'>
                <div className='apparel'>
                    <ul>

                        <li>Apparel</li>
                        <li>Accesories</li>
                        <li>best selling</li>
                        <li>50% off</li>
                        </ul>
                        
                </div>
                <div className='cardcontainer1'>
                    {/* <div>{Products_Items.map(addcard)}
                    </div> */}
                    <Card
                        title={Products_Items[0].title}
                        img={Products_Items[0].image}
                        description={Products_Items[0].description}
                        price={Products_Items[0].price}
                    />
                    <Card
                        title={Products_Items[1].title}
                        img={Products_Items[1].image}
                        description={Products_Items[1].description}
                        price={Products_Items[1].price}
                    />
                    <Card
                        title={Products_Items[2].title}
                        img={Products_Items[2].image}
                        description={Products_Items[2].description}
                        price={Products_Items[2].price}
                    />
                    <Card
                        title={Products_Items[3].title}
                        img={Products_Items[3].image}
                        description={Products_Items[3].description}
                        price={Products_Items[3].price}
                    />

                    <Card
                        title={Products_Items[4].title}
                        img={Products_Items[4].image}
                        description={Products_Items[4].description}
                        price={Products_Items[4].price}
                    />
                    <Card
                        title={Products_Items[5].title}
                        img={Products_Items[5].image}
                        description={Products_Items[5].description}
                        price={Products_Items[5].price}
                    />
                    <Card
                        title={Products_Items[6].title}
                        img={Products_Items[6].image}
                        description={Products_Items[6].description}
                        price={Products_Items[6].price}
                    />
                    <Card
                        title={Products_Items[7].title}
                        img={Products_Items[7].image}
                        description={Products_Items[7].description}
                        price={Products_Items[7].price}
                    />
                    <Card
                        title={Products_Items[8].title}
                        img={Products_Items[8].image}
                        description={Products_Items[8].description}
                        price={Products_Items[8].price}
                    />
                    <Card
                        title={Products_Items[9].title}
                        img={Products_Items[9].image}
                        description={Products_Items[9].description}
                        price={Products_Items[9].price}
                    />
                    <Card
                        title={Products_Items[10].title}
                        img={Products_Items[10].image}
                        description={Products_Items[10].description}
                        price={Products_Items[10].price}
                    />
                    <Card
                        title={Products_Items[11].title}
                        img={Products_Items[11].image}
                        description={Products_Items[11].description}
                        price={Products_Items[11].price}
                    />
                    <Card
                        title={Products_Items[12].title}
                        img={Products_Items[12].image}
                        description={Products_Items[12].description}
                        price={Products_Items[12].price}
                    />
                    <Card
                        title={Products_Items[13].title}
                        img={Products_Items[13].image}
                        description={Products_Items[13].description}
                        price={Products_Items[13].price}
                    />
                    <Card
                        title={Products_Items[14].title}
                        img={Products_Items[14].image}
                        description={Products_Items[14].description}
                        price={Products_Items[14].price}
                    />
                    <Card
                        title={Products_Items[15].title}
                        img={Products_Items[15].image}
                        description={Products_Items[15].description}
                        price={Products_Items[15].price}
                    />  
                    <Card
                        title={Products_Items[16].title}
                        img={Products_Items[16].image}
                        description={Products_Items[16].description}
                        price={Products_Items[16].price}
                    />
                    <Card
                    title={Products_Items[17].title}
                    img={Products_Items[17].image}
                    description={Products_Items[17].description}
                    price={Products_Items[17].price}
                    />  
                    <Card
                    title={Products_Items[18].title}
                    img={Products_Items[18].image}
                    description={Products_Items[18].description}
                    price={Products_Items[18].price}
                    /> 
                    <Card
                    title={Products_Items[19].title}
                    img={Products_Items[19].image}
                    description={Products_Items[19].description}
                    price={Products_Items[19].price}
                    />
                    
                </div>
            </div>

        </div>
        // <Card 
        //   title= {Products_Items.title}
        //   price= {Products_Items.price}
        //   description= {Products_Items.description}
        //   rating= {Products_Items.rating}
        //   category= {Products_Items.category}

        // />

    )

}



export default Product;

/* <Card 


*/