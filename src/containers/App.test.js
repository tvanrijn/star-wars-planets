import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { render, wait } from "@testing-library/react";
import App, { GET_PLANETS } from "./App";

test("shows the loading bar while loading", () => {
  const mocks = [
    {
      request: {
        query: GET_PLANETS
      },
      result: {
        loading: true
      }
    }
  ];

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(getByText("Loading")).toBeDefined();
});

test("shows an error message when loading failed", async () => {
  const mocks = [
    {
      request: {
        query: GET_PLANETS
      },
      result: {
        loading: false,
        error: "error message"
      }
    }
  ];

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await wait(() =>
    expect(getByText("Sorry, something went wrong.")).toBeInTheDocument()
  );
});

test("shows title, searchbox and list of cards when loading was succesfull", async () => {
  const mocks = [
    {
      request: {
        query: GET_PLANETS
      },
      result: {
        loading: false,
        data: {
          planets: [
            {
              name: "Cato",
              rotation_period: "24 hours",
              terrain: "rocky mountains",
              gravity: "1.5",
              climate: "moderate"
            },
            {
              name: "Alderaan",
              rotation_period: "24 hours",
              terrain: "rocky mountains",
              gravity: "1",
              climate: "moderate"
            }
          ]
        }
      }
    }
  ];

  const { getByTestId, getByPlaceholderText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await wait(() =>
    expect(getByTestId("title", "Star wars planets")).toBeInTheDocument()
  );

  expect(getByPlaceholderText("Search planets")).toBeInTheDocument(); 
  expect(getByTestId("cardlist")).toBeInTheDocument();

}, 30000);
