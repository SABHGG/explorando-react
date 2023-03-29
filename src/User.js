export function User({ name, amount, address, phone, married }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Tiene ${amount} dolares.</p>
      <ul>
        <li>{address.city}</li>
        <li>{address.country}</li>
      </ul>
      <p>{phone}</p>
      <p>{married ? "Casado" : "Soltero"}</p>
    </div>
  );
}
