// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function Leaderboard() {
//   const currentUser = "Sridhar";

//   const leaderboard = [
//     { name: "Aarav", donations: 12000, referralCode: "AAR123" },
//     { name: "Sridhar", donations: 7500, referralCode: "SRID123" },
//     { name: "Meera", donations: 5000, referralCode: "MEE456" },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Fixed Navbar */}
//       <header className="fixed top-0 left-0 right-0 z-50">
//         <Navbar />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow pt-20 px-4">
//         <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
//           <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">Leaderboard</h1>

//           <table className="w-full table-auto border-collapse">
//             <thead>
//               <tr className="bg-blue-100 text-blue-900">
//                 <th className="px-4 py-2 text-left">#</th>
//                 <th className="px-4 py-2 text-left">Name</th>
//                 <th className="px-4 py-2 text-left">Donations</th>
//                 <th className="px-4 py-2 text-left">Referral Code</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaderboard.map((intern, index) => (
//                 <tr
//                   key={index}
//                   className={`border-b ${
//                     intern.name === currentUser ? "bg-green-100 font-semibold" : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <td className="px-4 py-2">{index + 1}</td>
//                   <td className="px-4 py-2">{intern.name}</td>
//                   <td className="px-4 py-2">₹{intern.donations}</td>
//                   <td className="px-4 py-2">{intern.referralCode}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <p className="mt-4 text-sm text-gray-500 text-center">
//             Highlighted row indicates your current rank.
//           </p>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Leaderboard;


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Leaderboard() {
  const currentUser = "Sridhar";

  const leaderboard = [
    { name: "Aarav", donations: 12000, referralCode: "AAR123" },
    { name: "Sridhar", donations: 7500, referralCode: "SRID123" },
    { name: "Meera", donations: 5000, referralCode: "MEE456" },
    { name: "suraj", donations: 3000, referralCode: "SUE457" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Leaderboard</h1>

          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-100 text-blue-900 text-sm md:text-base">
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Donations</th>
                  <th className="px-4 py-3 text-left">Referral Code</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((intern, index) => (
                  <tr
                    key={index}
                    className={`border-b text-gray-800 text-sm md:text-base ${
                      intern.name === currentUser
                        ? "bg-green-100 font-semibold"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{intern.name}</td>
                    <td className="px-4 py-3">₹{intern.donations.toLocaleString()}</td>
                    <td className="px-4 py-3">{intern.referralCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Highlighted row indicates your current rank.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Leaderboard;