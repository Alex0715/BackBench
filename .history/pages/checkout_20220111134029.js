import Header from "./components/Header"
import Image from "next/image"
import { StarIcon } from "@heroicons/react/outline"

import {useRouter} from "next/router";
import Footer from "./components/Footer";
function checkout() {
    const router= useRouter();
    return (
        <div className="bg-gray-100">
            <Header/>
            <main className="lg:flex max-w-screen-2xl ml-20% mx-auto">
                <div className="flex-grow  shadow-sm">
                    <Image 
                    src="https:links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit="contain"
                    />
                    <div className="flex p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
                    </div>
                    <div className=" flex relative flex-col z-30 p-10 m-5 bg-white ">
                        <h4 className="col-span-3 mx-5">Fjallraven - Foldsack No. 1 Backpack</h4>
                        <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        width={200}
                        height={200}
                        objectFit="contain"
                        />
                        <p className="font-xs">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing.</p>
                        <div className="flex items-center"><StarIcon className="text-yellow-400 h-5" />
                        <StarIcon className="text-yellow-400 h-5" />
                        <StarIcon className="text-yellow-400 h-5" />
                        </div>
                        <p>₹ 5497.5</p>
                        <div className="text-bold border-b pb-4">
                            <p>Delhivery Charges:  0</p>
                            <p>Item Price       :5497.5</p>
                            <p>GRAND TOTAL      :5497.5</p>
                        </div>
                        <button onClick= {()=> router.push('/Billing')} className="text-black bg-yellow-500 hover:bg-yellow-600 flex-grow-0 p-4 rounded-md">Payment Method</button>
                    </div>
                    
                </div>
                
            </main>
            <Footer />
        </div>
    )
}

export default checkout
