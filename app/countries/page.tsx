import Navbar from "../Navbar/page"
import Link from "next/link"

export default function Countries(){
    return(
        <div>
            <Navbar/>

            <h1 className="text-3xl font-bold flex justify-center items-center">Here are some Countries</h1>

            <div className="font-semibold">
            <li><Link href={"http://localhost:3000/countries/pakistan"}>Pakistan</Link></li>
            <li><Link href={"http://localhost:3000/countries/china"}>China</Link></li> 
            <li><Link href={"http://localhost:3000/countries/turkiye"}>Turkiye</Link></li>
            <li><Link href={"http://localhost:3000/countries/saudiarab"}>Saudiarab</Link></li> 
            <li><Link href={"http://localhost:3000/countries/japan"}>Japan</Link></li>
            </div>     
        </div>
    )
}