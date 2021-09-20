import { render, screen, cleanup, act, rerender } from "@testing-library/react";
import Home from "../Home";
import { getAllPokemon as getAllPokemonMock } from "../../api/index";

jest.mock("../../api/index");

afterEach(() => {
  cleanup();
});

test("should render Home component", async () => {
  getAllPokemonMock.mockResolvedValue({
    results: [
      { dreamworld: "example.com", name: "poke", artwork: "example.com" },
    ],
  });

  await act(async () => {
    const { rerender } = render(<Home />);
    rerender(<Home />);
  });

  const pagination = screen.getByTestId("home-pagination");
  expect(pagination).toBeInTheDocument();

  const title = screen.getByText(/Our Poke`mon/i);
  expect(title).toBeInTheDocument();
  expect(getAllPokemonMock).toBeCalled();
});

// test("should")
