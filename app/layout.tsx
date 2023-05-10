import "./globals.css";
import { Poppins } from "next/font/google";
import Header from './components/Header';
// const inter = Inter({ subsets: ["latin"] });
const popins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: "Next js first app",
  description: "Gen by me from scratch",
  keywords: 'web development full stack'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <Header />
        <main className="container mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
