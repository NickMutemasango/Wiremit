// "use client";

// import { useState, useEffect } from "react";
// import Input from "../../components/ui/Input";
// import Button from "../../components/ui/Button";
// import { CURRENCIES, MIN_AMOUNT, MAX_AMOUNT } from "@/lib/constants";
// import { calculateRecipientAmount } from "@/lib/helpers";
// import toast from "react-hot-toast";

// export default function SendMoney() {
//   const [amount, setAmount] = useState("");
//   const [currency, setCurrency] = useState<"GBP" | "ZAR">("GBP");
//   const [fee, setFee] = useState(0);
//   const [recipientAmount, setRecipientAmount] = useState(0);
//   const [exchangeRate, setExchangeRate] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch exchange rates
//     const fetchRates = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           "https://68976304250b078c2041c7fc.mockapi.io/api/wiremit/InterviewAPIS"
//         );
//         const data = await response.json();
        
//         // Find the rate for the selected currency
//         const rateObj = data.find((item: any) => item[currency]);
//         if (rateObj) {
//           setExchangeRate(rateObj[currency]);
//         }
//       } catch (error) {
//         toast.error("Failed to fetch exchange rates");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRates();
//   }, [currency]);

//   useEffect(() => {
//     if (amount && exchangeRate) {
//       const numericAmount = parseFloat(amount);
//       const { fee, recipientAmount } = calculateRecipientAmount(
//         numericAmount,
//         currency,
//         exchangeRate
//       );
//       setFee(fee);
//       setRecipientAmount(recipientAmount);
//     }
//   }, [amount, currency, exchangeRate]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const numericAmount = parseFloat(amount);

//     if (numericAmount < MIN_AMOUNT || numericAmount > MAX_AMOUNT) {
//       toast.error(`Amount must be between $${MIN_AMOUNT} and $${MAX_AMOUNT}`);
//       return;
//     }

//     toast.success("Money sent successfully!");
//     // Here you would typically make an API call to process the transaction
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg ">
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <Input
//               label="Amount to Send (USD)"
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               min={MIN_AMOUNT}
//               max={MAX_AMOUNT}
//               step="0.01"
//               required
//             />
//             <p className="text-sm text-gray-500 mt-1">
//               Min: ${MIN_AMOUNT}, Max: ${MAX_AMOUNT}
//             </p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Recipient Currency
//             </label>
//             <select
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value as "GBP" | "ZAR")}
//               className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             >
//               {CURRENCIES.map((curr) => (
//                 <option key={curr.value} value={curr.value}>
//                   {curr.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-md">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <p className="text-sm text-gray-500">Transaction Fee</p>
//               <p className="font-medium">
//                 {fee.toFixed(2)} {currency}
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Recipient Gets</p>
//               <p className="font-medium">
//                 {recipientAmount.toFixed(2)} {currency}
//               </p>
//             </div>
//           </div>
//         </div>

//         <Button type="submit" disabled={loading} className="w-full">
//           {loading ? "Processing..." : "Send Money"}
//         </Button>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Input from "../../components/ui/Input";
// import Button from "../../components/ui/Button";
// import { CURRENCIES, MIN_AMOUNT, MAX_AMOUNT } from "@/lib/constants";
// import { calculateRecipientAmount } from "@/lib/helpers";
// import toast from "react-hot-toast";
// import { FiSend, FiDollarSign, FiArrowRight, FiInfo } from "react-icons/fi";

// export default function SendMoney() {
//   const [amount, setAmount] = useState("");
//   const [currency, setCurrency] = useState<"GBP" | "ZAR">("GBP");
//   const [fee, setFee] = useState(0);
//   const [recipientAmount, setRecipientAmount] = useState(0);
//   const [exchangeRate, setExchangeRate] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchRates = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           "https://68976304250b078c2041c7fc.mockapi.io/api/wiremit/InterviewAPIS"
//         );
//         const data = await response.json();
        
//         const rateObj = data.find((item: any) => item[currency]);
//         if (rateObj) {
//           setExchangeRate(rateObj[currency]);
//         }
//       } catch (error) {
//         toast.error("Failed to fetch exchange rates");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRates();
//   }, [currency]);

//   useEffect(() => {
//     if (amount && exchangeRate) {
//       const numericAmount = parseFloat(amount);
//       const { fee, recipientAmount } = calculateRecipientAmount(
//         numericAmount,
//         currency,
//         exchangeRate
//       );
//       setFee(fee);
//       setRecipientAmount(recipientAmount);
//     }
//   }, [amount, currency, exchangeRate]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const numericAmount = parseFloat(amount);

//     if (numericAmount < MIN_AMOUNT || numericAmount > MAX_AMOUNT) {
//       toast.error(`Amount must be between $${MIN_AMOUNT} and $${MAX_AMOUNT}`);
//       return;
//     }

//     toast.success("Money sent successfully!");
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-semibold text-[#2F3765]">Send Money</h2>
//         <div className="w-8 h-8 rounded-full bg-[#248FA0]/10 flex items-center justify-center">
//           <FiSend className="text-[#248FA0]" size={16} />
//         </div>
//       </div>
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <Input
//               label="Amount to Send (USD)"
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               min={MIN_AMOUNT}
//               max={MAX_AMOUNT}
//               step="0.01"
//               required
//               icon={<FiDollarSign className="text-[#248FA0]" />}
//             />
//             <p className="text-xs text-gray-500 mt-2 flex items-center">
//               <FiInfo className="mr-1 text-[#248FA0]" size={14} />
//               Min: ${MIN_AMOUNT}, Max: ${MAX_AMOUNT}
//             </p>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-[#2F3765] mb-1">
//               Recipient Currency
//             </label>
//             <div className="relative">
//               <select
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value as "GBP" | "ZAR")}
//                 className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#248FA0]/50 focus:border-[#248FA0] appearance-none bg-white"
//               >
//                 {CURRENCIES.map((curr) => (
//                   <option key={curr.value} value={curr.value}>
//                     {curr.label}
//                   </option>
//                 ))}
//               </select>
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <FiArrowRight className="text-[#248FA0]" size={18} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#248FA0]/5 p-4 rounded-lg border border-[#248FA0]/10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <p className="text-sm text-[#2F3765]/80">Transaction Fee</p>
//               <p className="text-lg font-semibold text-[#2F3765]">
//                 {fee.toFixed(2)} {currency}
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-[#2F3765]/80">Recipient Receives</p>
//               <p className="text-lg font-semibold text-[#2F3765]">
//                 {recipientAmount.toFixed(2)} {currency}
//               </p>
//             </div>
//           </div>
//         </div>

//         <Button 
//           type="submit" 
//           disabled={loading} 
//           className="w-full bg-[#248FA0] hover:bg-[#248FA0]"
//         >
//           {loading ? (
//             <div className="flex items-center justify-center">
//               <svg
//                 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                 ></path>
//               </svg>
//               Processing...
//             </div>
//           ) : (
//             <div className="flex items-center justify-center ">
//               <FiSend className="mr-2" size={18} />
//               Send Money
//             </div>
//           )}
//         </Button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { CURRENCIES, MIN_AMOUNT, MAX_AMOUNT } from "@/lib/constants";
import { calculateRecipientAmount } from "@/lib/helpers";
import { FiSend, FiDollarSign, FiArrowRight, FiInfo, FiCheckCircle } from "react-icons/fi";

export default function SendMoney() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState<"GBP" | "ZAR">("GBP");
  const [fee, setFee] = useState(0);
  const [recipientAmount, setRecipientAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://68976304250b078c2041c7fc.mockapi.io/api/wiremit/InterviewAPIS"
        );
        const data = await response.json();
        
        const rateObj = data.find((item: any) => item[currency]);
        if (rateObj) {
          setExchangeRate(rateObj[currency]);
        }
      } catch (error) {
        // Error handling would go here
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [currency]);

  useEffect(() => {
    if (amount && exchangeRate) {
      const numericAmount = parseFloat(amount);
      const { fee, recipientAmount } = calculateRecipientAmount(
        numericAmount,
        currency,
        exchangeRate
      );
      setFee(fee);
      setRecipientAmount(recipientAmount);
    }
  }, [amount, currency, exchangeRate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (numericAmount < MIN_AMOUNT || numericAmount > MAX_AMOUNT) {
      // Error handling would go here
      return;
    }

    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setAmount("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FiCheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#2F3765] mb-2">Payment Successful!</h3>
              <p className="text-[#2F3765]/80 mb-6">
                You've sent {amount} USD which converted to {recipientAmount.toFixed(2)} {currency}.
              </p>
              <Button 
                onClick={closeSuccessModal} 
                className="bg-[#248FA0] hover:bg-[#1a6f7c] w-full"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#2F3765]">Send Money</h2>
        <div className="w-8 h-8 rounded-full bg-[#248FA0]/10 flex items-center justify-center">
          <FiSend className="text-[#248FA0]" size={16} />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              label="Amount to Send (USD)"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              step="0.01"
              required
              icon={<FiDollarSign className="text-[#248FA0]" />}
            />
            <p className="text-xs text-gray-500 mt-2 flex items-center">
              <FiInfo className="mr-1 text-[#248FA0]" size={14} />
              Min: ${MIN_AMOUNT}, Max: ${MAX_AMOUNT}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2F3765] mb-1">
              Recipient Currency
            </label>
            <div className="relative">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as "GBP" | "ZAR")}
                className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#248FA0]/50 focus:border-[#248FA0] appearance-none bg-white"
              >
                {CURRENCIES.map((curr) => (
                  <option key={curr.value} value={curr.value}>
                    {curr.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiArrowRight className="text-[#248FA0]" size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#248FA0]/5 p-4 rounded-lg border border-[#248FA0]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-[#2F3765]/80">Transaction Fee</p>
              <p className="text-lg font-semibold text-[#2F3765]">
                {fee.toFixed(2)} {currency}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#2F3765]/80">Recipient Receives</p>
              <p className="text-lg font-semibold text-[#2F3765]">
                {recipientAmount.toFixed(2)} {currency}
              </p>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-[#2F3765] hover:bg-[#1a6f7c]"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <FiSend className="mr-2" size={18} />
              Send Money
            </div>
          )}
        </Button>
      </form>
    </div>
  );
}