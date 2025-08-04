// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Fundraising Portal</h1>
      <div className="space-x-6">
        <Link to="/portal" className="hover:text-yellow-500">Intern Portal</Link>
        <Link to="/leaderboard" className="hover:text-green-500">Leaderboard</Link>
        <Link to="/login" className="hover:underline">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;