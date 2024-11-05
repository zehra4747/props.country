import Link from "next/link";
export default function Navbar(){
    return(
      <div>
      <ul className="flex gap-5 bg-blue-800 py-3 text-white">
    <li> <Link href="/">Home</Link> </li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/countries">Countries</Link></li>
    </ul>
     
      </div>
    );
  };
