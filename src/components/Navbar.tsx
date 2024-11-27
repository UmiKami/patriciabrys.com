import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className=" p-4">
            <div className="container mx-auto flex justify-center">
                <ul className="flex space-x-4 gap-8 font-serif">
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                    <li><Link to="/typography" className="hover:text-gray-400">Typography</Link></li>
                    <li><Link to="/keepings" className="hover:text-gray-400">Keepings</Link></li>
                    <li><Link to="/untold-stories" className="hover:text-gray-400">Untold Stories</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar