import React from "react";
import { render } from "@testing-library/react";
import CardList from "./CardList";

test("renders a card for each item in the array", () => {
  const mockPlanets = [{ name: "Cerea" }, { name: "Naboo" }];
  const { getByTestId } = render(<CardList planets={mockPlanets} />);

  expect(getByTestId("cardlist").children.length).toBe(mockPlanets.length);
});
