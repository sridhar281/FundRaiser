import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      <div className="h-20" />
      <main className="flex-grow px-4">{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;