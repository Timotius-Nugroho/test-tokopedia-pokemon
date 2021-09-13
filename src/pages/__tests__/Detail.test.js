import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Detail from "../Detail";

afterEach(() => {
  cleanup();
});

test("should render Detail component", () => {
  render(<Detail {...{ location: { search: "?name=pokemontest" } }} />);

  const attrTitle = screen.getByText(/pokemontest/i);
  expect(attrTitle).toBeInTheDocument();
});

test("Catch pokemon button", async () => {
  render(<Detail {...{ location: { search: "?name=pokemontest" } }} />);

  const buttonCatch = screen.getByTestId("detail-button-catch");
  expect(buttonCatch).toBeInTheDocument();
  fireEvent.click(buttonCatch);
});
