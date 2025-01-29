import { ShoppingCartIcon  } from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return(
        <div className="flex justify-end" >
            <nav className=" flex gap-3 w-full">
                <Link href='/signin' className="flex items-center header-button " >
                    Hello,Signin
                </Link>
                <Link href='/card' className='header-button'>
                 <div className="flex items-end">
                    <ShoppingCartIcon className='h-8 w-8'/>
                    Card
                 </div>
                </Link>
            </nav>
        </div>
    )
}