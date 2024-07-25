import { Dimensions } from "react-native";
export const FLEX = { flex: 1 };

export const SCREEN_WIDTH = Dimensions.get("screen").width;

export const services = [
  { bgColor: "lightGreen", name: "paper_plane", title: "Send Money" },
  { bgColor: "lightPink", name: "remita", title: "Remita" },
  { bgColor: "pink", name: "note", title: "Pay Bills" },
  { bgColor: "lightBlue", name: "phone", title: "Airtime" },
  { bgColor: "neutral", name: "loan", title: "Loans" },
  { bgColor: "lightGrey", name: "tv", title: "Cable Tv" },
  { bgColor: "lightBlue", name: "line_chart", title: "Invest" },
  { bgColor: "blue", name: "bulb", title: "Electricity" },
];

export const transactions = [
  {
    name: "Toby Adewole",
    date: "13 Nov 2022, 12:00PM",
    amount: "15, 000",
    balance: "NGN101,203.94",
    debit: true,
  },
  {
    name: "Ammah Jacobs",
    date: "20 Nov 2022, 1:00AM",
    amount: "15, 000",
    balance: "NGN101,203.94",
    debit: false,
  },
  {
    name: "Mike Oshadami",
    date: "25 Nov 2022, 3:00PM",
    amount: "45, 000",
    balance: "NGN101,203.94",
    debit: true,
  },
];

export const cards = [
  {
    accountType: "Savings Account Balance",
    balance: "NGN102,238.71",
    accountName: "Adewole Damilare",
    accountNumber: "2040011238",
  },
  {
    accountType: "Investment Account Balance",
    balance: "NGN500,567.71",
    accountName: "Adewole Damilare",
    accountNumber: "2040011238",
  },
  {
    accountType: "USD Account Balance",
    balance: "USD 302,238.00",
    accountName: "Adewole Damilare",
    accountNumber: "4582565936",
  },
]
