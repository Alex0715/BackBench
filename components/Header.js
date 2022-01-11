import Image from "next/image";
import {
    MenuIcon,
    ShoppingCartIcon,
    SearchIcon
} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import { useSelector } from 'react-redux';
import React from "react";
import { selectItems } from "../slices/basketSlice";
import Link from "next/link";


function Header() {
    const router= useRouter();
    // const items = useSelector(selectItems);
    return (
        <header>
        <div className="bg-gray-300 flex flex-grow items-center p-1 py-2">
        <Image onClick= {()=> router.push('http://localhost:3000/')}
        src='/logoa.png'
        width={150}
        height={35}
        objectFit="contain"
        className='cursor-pointer'
        />
        <div  className="hidden sm:flex bg-yellow-400 flex items-center rounded-md flex-grow cursor-pointer hover:bg-yellow-500">
        <input className="p-3.5 h-full w-6 flex-grow rounded-l-md flex-shrink px-4" type="text" />
        <Link href='/productsheet'><SearchIcon onClick= {()=> router.push('/productsheet')} className="h-12 p-4"/></Link>
        </div>
        <div className="text-black flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className=" link ">
            <a href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&" >Hello ! Log In</a> 
            <p className="font-extrabold md:text-sm">Account and List</p>   
            </div>            
        <div className=" link ">
            <a href="https://www.amazon.in/ap/signin?_encoding=UTF8&accountStatusPolicy=P1&openid.assoc_handle=inamazon&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fcss%2Forder-history%3Fie%3DUTF8%26ref_%3Dnav_orders_first&pageId=webcs-yourorder&showRmrMe=1" className=" md:text-sm">Retruns</a>
            <p className="font-extrabold md:text-sm">& Orders</p>
        </div>
        <div onClick={()=> router.push("/checkout")} className="relative cursor-pointer flex items-center link ">
            <span className="absolute top-0 right-0 text-black md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold">1</span>
            <ShoppingCartIcon className="h-10"/>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
        </div>
        </div>
        </div>
{/* bottom */}
        <div className="bg-gray-700 flex items-center text-white p-2 space-x-3">
            <p onClick={() =>router.push("/")} className="link flex items-center">
                <MenuIcon className="h-6 mr-1"/>
                All
            </p>
            <a href="https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles_9292c6cb7b394d30b2467b8f631090a7" className="link">Mobiles </a>
            <a href="https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers_17d44cb01bd144359b81b1c10b84dd98" className="link">Best Sellers </a>
            <a href="https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics_c5b70a82461a484189e700166599ce9f" className="link">Electronics </a>
            <a href="https://www.amazon.in/gp/goldbox?ref_=nav_cs_gb_5bf06ae8328043a2beb2754f40a54c84" className="link hidden sm:inline-flex">Todays Deal! </a>
            <a href="https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion_ad6f81eb5d474066bc9e5788a3c19a28" className="link">Fashion </a>
            <a href="https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember_2860122b63884a8688052dc445e46bd9" className="link">Prime </a>
            <a href="https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember_2860122b63884a8688052dc445e46bd9" className="link hidden l  g:inline-flex">Join Prime !</a>
        </div>
        </header>
    )
}

export default Header
