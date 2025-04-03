import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArticlesPage from "../components/pages/ArticlesPage";
import HomePage from "../components/pages/HomePage";
import Article from "../components/articles/Article";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/home/articles", element: <ArticlesPage /> },
      { path: "/home/articles/:article_id", element: <Article /> },
    ],
  },
]);
