import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const initialCandies = ["snickers", "skittles", "twix", "milky way"];
  const [candies, setCandies] = React.useState(initialCandies);
  const dispense = (candy: string) => {
    setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  };
  const dispenseWithCallback = React.useCallback((candy: string) => {
    setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  }, []);
  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul>
            {candies.map((candy) => (
              <li key={candy}>
                <button onClick={() => dispenseWithCallback(candy)}>
                  grab
                </button>{" "}
                {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
