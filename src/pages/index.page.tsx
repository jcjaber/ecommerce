import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FeaturedProducts } from '../components';
import productsActions from '../store/modules/products/products.actions';
import { Product } from '../store/modules/products/products.types';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const products: Array<Product> = [
      {
        id: 0,
        name: 'Produto 1',
        description: 'Descrição produto 1',
        image: {
          alt: 'Imagem do produto 1',
          src: ''
        },
        price: 10,
        feature: true
      },
      {
        id: 1,
        name: 'Produto 2',
        description: 'Descrição produto 2',
        image: {
          alt: 'Imagem do produto 2',
          src: ''
        },
        price: 20,
        feature: false
      }
    ];

    dispatch(productsActions.setProducts(products));

  }, [dispatch]);

  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta content="Generated by create next app" />
      </Head>

      <main>
        <h1>Hello World!</h1>
        <FeaturedProducts />
      </main>

      <footer>
       <p>Todos os direitos reservados</p>
      </footer>
    </>
  );
};

export default Home;
