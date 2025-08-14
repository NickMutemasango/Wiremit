"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiCalendar, FiDollarSign, FiUser, FiClock } from "react-icons/fi";

const transactions = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
  amount: (100 + i * 10).toFixed(2),
  currency: i % 2 === 0 ? "GBP" : "ZAR",
  recipient: `Recipient ${i + 1}`,
  status: i % 3 === 0 ? "Pending" : "Completed",
}));

const ITEMS_PER_PAGE = 5;

export default function TransactionHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#2F3765]">Transaction History</h2>
        <div className="w-8 h-8 rounded-full bg-[#248FA0]/10 flex items-center justify-center">
          <FiClock className="text-[#248FA0]" size={16} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#248FA0]/5">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F3765] uppercase tracking-wider">
                <div className="flex items-center">
                  <FiCalendar className="mr-2 text-[#248FA0]" size={14} />
                  Date
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F3765] uppercase tracking-wider">
                <div className="flex items-center">
                  <FiDollarSign className="mr-2 text-[#248FA0]" size={14} />
                  Amount
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F3765] uppercase tracking-wider">
                <div className="flex items-center">
                  <FiUser className="mr-2 text-[#248FA0]" size={14} />
                  Recipient
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F3765] uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-[#248FA0]/5 transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2F3765]">
                  {tx.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2F3765]">
                  {tx.amount} {tx.currency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2F3765]">
                  {tx.recipient}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      tx.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center px-4 py-2 border border-[#248FA0]/20 rounded-lg text-sm font-medium text-[#2F3765] bg-white hover:bg-[#248FA0]/10 transition disabled:opacity-50"
        >
          <FiChevronLeft className="mr-2 text-[#248FA0]" /> Previous
        </button>
        <span className="text-sm text-[#2F3765]">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="flex items-center px-4 py-2 border border-[#248FA0]/20 rounded-lg text-sm font-medium text-[#2F3765] bg-white hover:bg-[#248FA0]/10 transition disabled:opacity-50"
        >
          Next <FiChevronRight className="ml-2 text-[#248FA0]" />
        </button>
      </div>
    </div>
  );
}