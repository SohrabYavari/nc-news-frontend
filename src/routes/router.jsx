import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArticlesPage from "../components/pages/ArticlesPage";
import HomePage from "../components/pages/HomePage";

export const router =
  createBrowserRouter([
    {
      path: "/nc-news",
      element: <App />,
      children: [
        {path: '', element: <HomePage />},
        {path: '/nc-news/articles', element: <ArticlesPage />}
      ]
    }
  ]);
