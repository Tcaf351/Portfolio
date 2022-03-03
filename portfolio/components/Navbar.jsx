

const Navbar = () => {
    return ( 
        <nav className="bg-slate-800 flex justify-between py-5">
            <h1 className="text-sky-400 text-2xl ml-28 ease-in-out duration-500 hover:text-3xl hover:text-cyan-300">Timothy Cafarella</h1>
            <ul className="text-white mx-20 flex flex-row">
                <li className="px-4 hover:text-red-500 duration-300"><a href="#about">About</a></li>
                <li className="px-4">Skills</li>
                <li className="px-4">My Work</li>
            </ul>
        </nav>
     );
}
 
export default Navbar;