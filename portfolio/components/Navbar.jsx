

const Navbar = () => {
    return ( 
        <nav className="bg-zinc-900 flex justify-between py-5">
            <h1 className="text-cyan-300 text-2xl mx-20">Timothy Cafarella</h1>
            <ul className="text-white mx-20 flex flex-row">
                <li className="px-4">About</li>
                <li className="px-4">Skills</li>
                <li className="px-4">My Work</li>
            </ul>
        </nav>
     );
}
 
export default Navbar;