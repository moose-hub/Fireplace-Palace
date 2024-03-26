import { Aleo } from 'next/font/google';
import './globals.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const aleo = Aleo({ subsets: ['latin'] });

export const metadata = {
  title: '🔥 Fireplace Palace',
  description: 'The fireplace palace website',
};

const navLinks = [
	{ name: "Home", location: "/" },
	{ name: "Meet the Founders", location: "/founders" },
	{ name: "Book a Design Consultation", location: "/booking" },
	{ name: "Blog", location: "/blog" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <Header links={navLinks} text="🔥Fireplace Palace" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
