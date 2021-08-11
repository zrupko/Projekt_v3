import BasketIcon from '../Basket/BasketIcon';

export default function HeaderBasketButton(props) {
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <BasketIcon />
      </span>
      <span>Kosár</span>
      <span className="badge">99</span>
    </button>
  );
}
