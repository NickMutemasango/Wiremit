// "use client";

// import { redirect } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import { useEffect } from "react";
// import Navbar from "../components/ui/Navbar";
// import SendMoney from "../components/dashboard/SendMoney";
// import AdsCarousel from "../components/dashboard/AdsCarousel";
// import TransactionHistory from "../components/dashboard/TransactionHistory";

// export default function DashboardPage() {
//   const { user, loading } = useAuth();

//   useEffect(() => {
//     if (!loading && !user) {
//       redirect("/login");
//     }
//   }, [user, loading]);

//   if (loading || !user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <main className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             <SendMoney />
//             <TransactionHistory />
//           </div>
//           <div className="lg:col-span-1">
//             <AdsCarousel />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import SendMoney from "../components/dashboard/SendMoney";
import AdsCarousel from "../components/dashboard/AdsCarousel";
import TransactionHistory from "../components/dashboard/TransactionHistory";
import { FiSend, FiDollarSign, FiPieChart, FiClock } from "react-icons/fi";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      redirect("/login");
    }
  }, [user, loading]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#248FA0]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2F3765]">
            Welcome to pocket money app
          </h1>
          <p className="text-[#248FA0] mt-2">Here's your financial overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#248FA0]/10 text-[#248FA0] mr-4">
                <FiDollarSign size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Balance</p>
                <p className="text-xl font-semibold text-[#2F3765]">
                  $2,450.00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#248FA0]/10 text-[#248FA0] mr-4">
                <FiSend size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Sent</p>
                <p className="text-xl font-semibold text-[#2F3765]">
                  $1,250.00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#248FA0]/10 text-[#248FA0] mr-4">
                <FiPieChart size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Transactions</p>
                <p className="text-xl font-semibold text-[#2F3765]">24</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-[#248FA0]/10 text-[#248FA0] mr-4">
                <FiClock size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-xl font-semibold text-[#2F3765]">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Send Money Section */}

            <SendMoney />

            {/* Transaction History */}

            <TransactionHistory />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-[#2F3765] mb-6">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 rounded-lg bg-[#248FA0]/5 hover:bg-[#248FA0]/10 transition">
                  <div className="w-8 h-8 rounded-full bg-[#248FA0]/10 flex items-center justify-center mr-3">
                    <FiDollarSign className="text-[#248FA0]" size={16} />
                  </div>
                  <span className="text-[#2F3765]">Request Money</span>
                </button>
                <button className="w-full flex items-center p-3 rounded-lg bg-[#248FA0]/5 hover:bg-[#248FA0]/10 transition">
                  <div className="w-8 h-8 rounded-full bg-[#248FA0]/10 flex items-center justify-center mr-3">
                    <FiPieChart className="text-[#248FA0]" size={16} />
                  </div>
                  <span className="text-[#2F3765]">View Analytics</span>
                </button>
              </div>
            </div>

            {/* Ads Carousel */}

            <AdsCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
