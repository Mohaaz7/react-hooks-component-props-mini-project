// src/__tests__/ArticleList.test.js
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import ArticleList from "../components/ArticleList";

const testPosts = [
  {
    id: 1,
    title: "Sample Post",
    date: "January 1, 2025",
    preview: "This is a preview."
  }
];

test("renders article titles", () => {
  const { getByText } = render(<ArticleList posts={testPosts} />);
  expect(getByText("Sample Post")).toBeInTheDocument();
});
