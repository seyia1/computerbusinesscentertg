
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { getCartItemCount } from '@/lib/data';

const Shop = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={getCartItemCount()} />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Notre Boutique</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection de produits informatiques et téléphoniques de haute qualité.
            </p>
          </div>
          
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
