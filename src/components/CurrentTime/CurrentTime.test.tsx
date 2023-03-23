import { render, screen } from "@testing-library/react";
import { CurrentTime } from "./index";

describe("CurrentTime", () => {
  it("should render the formatted current time", () => {
    jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));
    render(<CurrentTime />);

    expect(
      screen.getByText(/This page was loaded at 1:00 PM/i)
    ).toBeInTheDocument();
  });
});
