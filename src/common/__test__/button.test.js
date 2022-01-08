import React from "react";
import JWButton from "../components/JWButton";

import { cleanup, render, fireEvent } from "@testing-library/react";

describe("JWButton", () => {
  afterEach(cleanup);

  const handleButtonClick = jest.fn();

  test("pass:renders Button component", () => {
    const button = render(<JWButton />);
    expect(button).toMatchSnapshot();
  });

  test("pass:handleButtonClick called 1 time ", () => {
    const { queryByText } = render(
      <JWButton handleButtonClick={handleButtonClick} value={"Load More"} />
    );
    const button = queryByText("Load More");
    // console.log(`button`, button);
    fireEvent.click(button);

    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });
});
