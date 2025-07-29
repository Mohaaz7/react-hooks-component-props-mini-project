import React from "react";
import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const testPosts = [
  {
    id: 1,
    title: "Sample Post",
    date: "July 29, 2025",
    preview: "This is a sample preview",
    minutes: 5,
  },
];

test("renders article titles", () => {
  const { getByText } = render(<ArticleList posts={testPosts} />);
  expect(getByText("Sample Post")).toBeInTheDocument();
});
