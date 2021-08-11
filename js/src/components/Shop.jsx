import { Fragment, useState } from 'react';

import Header from './Layout/Header';
import Products from './Products/Products';
import Basket from './Basket/Basket';

export default function Shop() {
  const [basketShow, setBasketShow] = useState(false);

  const showBasketHandler = () => {
    setBasketShow(true);
  };

  const hideBasketHandler = () => {
    setBasketShow(false);
  };

  return (
    <Fragment>
      {basketShow && <Basket onClose={hideBasketHandler} />}
      <Header onShowBasket={showBasketHandler} />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}
