import React from "react";
import JWList from "../components/JWList";

import { cleanup, render } from "@testing-library/react";

describe("JWList", () => {
  afterEach(cleanup);

  const user = { name: "John Doe", pic: "test", city: "Stockholm" };
  test("pass:renders list component", () => {
    const list = render(
      <JWList city={user.city} pic={user.pic} city={user.city} />
    );
    expect(list).toMatchSnapshot();
  });
});
