import { Cart } from "@/types/Cart";
import { Product } from "@/types/Product";
import { useAtom } from "jotai";
import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";

const cartAtom = withImmer(atomWithStorage<Cart[]>("gift-orchid-cart", []));

export const useGetCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (product: Product) => {
    setCart((cart) => {
      const existingProduct = cart.find((c) => c.product.pid === product.pid);
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        cart.push({ product: product, count: 1 });
      }
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((cart) => {
      const existingProduct = cart.find((c) => c.product.pid === product.pid);
      if (existingProduct) {
        existingProduct.count -= 1;
      }
    });
  };

  const clearCart = () => setCart([]);

  const totalCartItems = cart.reduce(
    (acc: number, obj: Cart) => acc + obj.count,
    0
  );

  return {
    cart,
    totalCartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
