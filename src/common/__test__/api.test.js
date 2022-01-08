import axios from "axios";

jest.mock("axios");

test("pass:got status 200", () => {
  axios.get.mockImplementation(() => Promise.resolve({ status: 200 }));
});

test("pass:fetched users array", () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ data: { results: [] } })
  );
});

test("fail:rejected response", () => {
  axios.get.mockImplementation(() => Promise.reject());
});

test("fail:got network error", async () => {
  axios.get.mockImplementationOnce(() =>
    Promise.reject(new Error("Network Error"))
  );
});
