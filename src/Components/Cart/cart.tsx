import { Layout } from "../Layout/layout";

const cartItems =[{
    id:1,
    name:"Product 1",
    price:100,
    image: "https://via.placeholder.com/150"
},{
    id:2,
    name:"Product 2",
    price:30,
    image: "https://via.placeholder.com/150"
},
];


export default function Cart(){
    return (
        <>
        <Layout>
            <div>{cartItems.map((item)=>(
                <div className="grid gap-4 flex-row" key={item.id}>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div className="flex gap-2">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            </div>
            ))}
            </div>
        </Layout>
        </>
    );
}