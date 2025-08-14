import { auth } from "@/config/firebase";

export const getCurrentUser = async () => {
  try {
    const user = auth.currentUser;
    return user;
  } catch (error) {
    return null;
  }
};

export const calculateRecipientAmount = (
  amount: number,
  currency: "GBP" | "ZAR",
  exchangeRate: number
) => {
  const feePercentage = currency === "GBP" ? 0.1 : 0.2;
  const fee = Math.ceil(amount * exchangeRate * feePercentage * 100) / 100;
  const recipientAmount =
    Math.ceil(amount * exchangeRate * (1 - feePercentage) * 100) / 100;

  return { fee, recipientAmount };
};