import Product from "./Product"

function ProductFeed({products}) {
    return (
        <div>
        <div className="grid  grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4">
            {products
            .slice(0,4)
            .map(({id,title,price,description,category,image}) => (
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
        </div>
            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
        <div className="md:col-span-full">
        {products
            .slice(4,5)
            .map(({id,title,price,description,category,image}) => (
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}

        </div>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4">
        {products
            .slice(5,products.length)
            .map(({id,title,price,description,category,image}) => (
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}

        </div>
    
        </div>
    )
    
}

export default ProductFeed
