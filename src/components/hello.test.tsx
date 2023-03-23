import { render, screen } from "@testing-library/react";
import { Hello } from "./hello";

describe("Hello", () => {
  it("should render the Hello component", () => {
    render(<Hello />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Maz Hermon tech test starter",
      })
    ).toBeInTheDocument();
  });
});
