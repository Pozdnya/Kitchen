import Kitchen from "./components/Kitchen/Kitchen";

const products = [
  "мясо",
  "сыр",
  "кетчуп",
  "спагетти",
  "тесто",
  "рыба",
  "картошка",
  "морковь",
  "буряк",
];

function App() {
  return (
    <div className="container">
      <Kitchen products={products} />
    </div>
  );
}

export default App;
