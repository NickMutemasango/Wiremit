export type Transaction = {
  id: number;
  date: string;
  amount: string;
  currency: "GBP" | "ZAR";
  recipient: string;
  status: "Pending" | "Completed";
};