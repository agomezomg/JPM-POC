import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe("Layout render", () => {
  it("renders a navbar", () => {
    useRouter.mockReturnValue({ query: {}})
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});