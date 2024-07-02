import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sarkariexam360",
  description: "Search and filter various activities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="bg-blue-600 text-white p-4 mb-6 text-center">
          <h1 className="text-2xl font-bold">Sarkariexam360</h1>
        </header>
        <main className="container mx-auto px-4">{children}</main>
        <footer className="mt-8 py-4 text-center text-gray-500">
          <p>&copy; 2024 pravesh Meena. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
