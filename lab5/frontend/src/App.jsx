const Hello = () => {
  return <h2>Welcome to react 19!</h2>;
};

function Book() {
  return (
    <>
      <h1>Let's React</h1>
      <h2>Price: 999</h2>
      <h3>Rating: 4.9</h3>
    </>
  );
}

export default function App() {
  return (
    <>
      <h1 className="text-4xl text-center">
        Hello React
      </h1>

      <Hello />
      <Book />
    </>
  );
}