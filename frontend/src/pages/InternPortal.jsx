import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

function InternPortal() {
  const [copied, setCopied] = useState(false);

  const intern = {
    name: "Sridhar",
    email: "sridhar@gmail.com",
    referralCode: "SRID123",
    donations: 7500,
    goal: 10000,
    rewards: ["Bronze Badge", "T-shirt"],
  };

  const referralLink = `https://fundraise.com/signup?ref=${intern.referralCode}`;
  const progressPercent = Math.min((intern.donations / intern.goal) * 100, 100);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto bg-blue shadow-md rounded p-6 mt-6">
        <h1 className="text-2xl text-black font-bold mb-4">Welcome, {intern.name}</h1>
        <p className="mb-2 text-black"><strong>Email:</strong> {intern.email}</p>
        <p className="mb-2 text-black"><strong>Referral Code:</strong> {intern.referralCode}</p>

        <button
          onClick={copyToClipboard}
          className="mt-2 px-4 py-2 bg-blue-600 text-black rounded hover:bg-blue-700"
        >
          Copy Referral Link
        </button>
        {copied && <span className="ml-3 text-green-600">Copied!</span>}

        <div className="mt-6">
          <h3 className="text-black font-medium">Donations Raised</h3>
          <p className="mb-2 text-black">₹{intern.donations} of ₹{intern.goal}</p>
          <div className="w-full bg-black-300 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1 text-black">{progressPercent}% of goal</p>
        </div>

        <div className="mt-6">
          <h3 className="text-black font-medium">Rewards Unlocked</h3>
          <ul className="list-disc ml-6 text-black">
            {intern.rewards.map((reward, i) => (
              <li key={i}>{reward}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Link
            to="/leaderboard"
            className="text-blue-600 hover:underline font-medium"
          >
            View Leaderboard →
          </Link>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default InternPortal;