import React from "react";
import JWCard from "../components/JWCard";

import { cleanup, render } from "@testing-library/react";

describe("JWCard", () => {
  afterEach(cleanup);

  const user = { name: "John Doe", pic: "test", city: "Stockholm" };
  test("pass:renders card component", () => {
    const card = render(
      <JWCard city={user.city} pic={user.pic} city={user.city} />
    );
    expect(card).toMatchSnapshot();
  });
});
