"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    isError: false,
  });
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(auth);
      setModalContent({
        title: "Success",
        message: "You have been logged out successfully.",
        isError: false,
      });
      setShowStatusModal(true);
      router.push("/login");
    } catch (error) {
      setModalContent({
        title: "Error",
        message: "Failed to log out. Please try again.",
        isError: true,
      });
      setShowStatusModal(true);
    } finally {
      setIsLoggingOut(false);
      setShowLogoutModal(false);
    }
  };

  const closeModal = () => {
    setShowLogoutModal(false);
    setShowStatusModal(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Confirm Logout</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
              <Button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className={isLoggingOut ? "opacity-75" : ""}
              >
                {isLoggingOut ? "Logging out..." : "Log Out"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Status Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3
                className={`text-xl font-bold ${
                  modalContent.isError ? "text-red-600" : "text-green-600"
                }`}
              >
                {modalContent.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="mb-6">{modalContent.message}</p>
            <div className="flex justify-end">
              <Button onClick={closeModal}>OK</Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold text-[#248FA0]">Wiremit</h1>
        <div className="flex items-center space-x-4">
          {user && (
            <>
             
              <Button
                onClick={() => setShowLogoutModal(true)}
                className="px-3 py-1 text-sm"
                variant="outline"
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}