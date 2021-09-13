import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render navbar component", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const navElement = screen.getByTestId("navbar-test");
  expect(navElement).toBeInTheDocument();
  expect(navElement).toHaveTextContent("Catch Pokemon");
});

test("should render navbar logo goto my-poke page", async () => {
  render(
    <Router>
      <Navbar {...{ location: { pathname: "/my-poke" } }} />
    </Router>
  );

  const navLogo = screen.getByTestId("navbar-goto-my-poke");
  expect(navLogo).toBeInTheDocument();
  fireEvent.click(navLogo);
});
