import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomePage } from "./HomePage";
import { AppLayout } from "@/Layout/Shell/AppLayout";
import DesignSystemPage from "@/DesignSystem/ShowcasePage/DesignSystemPage";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "design-system", Component: DesignSystemPage },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
