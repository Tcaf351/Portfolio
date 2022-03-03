

const Footer = () => {
    const date = new Date().getFullYear();

    return ( 
        <footer className="flex items-center justify-center py-10 bg-slate-800 text-gray-100">
            <p className="text-lg">Timothy Cafarella &copy; copyright { date }</p>
        </footer>
     );
}
 
export default Footer;