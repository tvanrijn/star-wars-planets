import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBox from "./SearchBox";

test("triggers function on change", () => {
  const searchString = "Cato";
  const mockOnSearchChange = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBox searchChange={mockOnSearchChange} />
  );
  const input = getByPlaceholderText("Search planets");
  fireEvent.change(input, { target: { value: searchString } });

  expect(input.value).toBe(searchString);
  expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
});
