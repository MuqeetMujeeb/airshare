import { ReactLenis } from '@studio-freight/react-lenis';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <ReactLenis root>
      <div className="flex flex-col min-h-screen w-full relative">
        <Header />
        <main className="flex-1 w-full flex justify-center flex-col pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
