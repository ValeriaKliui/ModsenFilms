import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Sort } from '../components/Sort/Sort';
import { Button } from '../components/Button/Button';
export const Main = () => {
  return (
    <>
      <Header />
      <Sort />
      <Button text="Show More" />
      <Footer />
    </>
  );
};
