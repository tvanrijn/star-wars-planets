import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("should show planet information", () => {
    const mockProps = {
        name: "Cerea",
        rotation: "27 hours",
        terrain: "mountains, rock arches",
        gravity: '1.5',
        climate: "tropical"
    }

    const { getByTestId, getByRole } = render(
      <Card  {...mockProps} />
    );

    expect(getByRole("heading")).toHaveTextContent(mockProps.name);
    expect(getByTestId("rotation")).toHaveTextContent(mockProps.rotation);
    expect(getByTestId("terrain")).toHaveTextContent(mockProps.terrain);
    expect(getByTestId("gravity")).toHaveTextContent(mockProps.gravity);
    expect(getByTestId("climate")).toHaveTextContent(mockProps.climate);
  });
});
