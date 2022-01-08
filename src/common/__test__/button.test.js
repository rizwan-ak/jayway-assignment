import React from "react";
import JWButton from "../components/JWButton";

import { cleanup, render } from "@testing-library/react";

describe("JWButton", () => {
  afterEach(cleanup);

  test("pass:renders Button component", () => {
    const button = render(<JWButton />);
    expect(button).toMatchSnapshot();
  });
});
