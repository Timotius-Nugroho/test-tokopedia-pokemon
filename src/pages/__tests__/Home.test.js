import { render, screen, cleanup } from "@testing-library/react";
import Home from "../Home";

afterEach(() => {
  cleanup();
});

test("should render Home component", () => {
  render(<Home />);

  const pagination = screen.getByTestId("home-pagination");
  expect(pagination).toBeInTheDocument();

  const title = screen.getByText(/Our Poke`mon/i);
  expect(title).toBeInTheDocument();
});
