import Input from '../../UI/Input';

export default function ProductItemForm() {
  return (
    <form className="form">
      <Input
        label="Mennyiség"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Kosárba</button>
    </form>
  );
}
