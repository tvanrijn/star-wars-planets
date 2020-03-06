import React from "react";
import { render } from "@testing-library/react";
import Scroll from "./Scroll";

test("renders its children", () => {
  const { getByTestId } = render(
    <Scroll>
      <div data-testid="child" />
    </Scroll>
  );
  const container = getByTestId("scroll-container");

  expect(container.children.length).toBe(1);
  expect(getByTestId("child")).toBeDefined();
});
