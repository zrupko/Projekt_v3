import ProductItemForm from './ProductItemForm';
import { getFormattedPrice } from '../../helpers';

export default function ProductItem(props) {
  const price = `HUF ${props.price}`;
  return (
    <li className="product">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{getFormattedPrice(price)}</div>
      </div>
      <div>
        <ProductItemForm />
      </div>
    </li>
  );
}
