import { Header } from '@src/components';
import { cartActions } from '@src/store/modules/cart';
import { Product } from '@src/store/modules/products/products.types';
import { AppState } from '@src/store/store.type';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

const CartPage = () => {
  const dispatch = useDispatch();

  const cart: Array<Product> = useSelector(({ cart }: AppState) => cart);

  const handleRemove = (product: Product) => {
    dispatch(cartActions.removeProduct(product));
  };

  const cartMap = cart.map((product, index) => {
    const key = `product-${product}-${index}`;
    return (
      <li key={key}>
        <p>{product.name}</p>
        <button type="button" onClick={() => handleRemove(product)}>Remover</button>
      </li>
    );
  });

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main>
        {cart.length > 0 ? (
          <div>
            <ul>
              {cartMap}
            </ul>
            <button type="button">Checkout</button>
          </div>
        ) : (
          <p>Nenhum produto no carrinho.</p>
        )}
      </main>
      <footer>
        <p>Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default CartPage;
