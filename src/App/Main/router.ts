import { createBrowserRouter } from "react-router";
import { AppLayout } from "@/App/Layout/AppLayout";
import { HomePage } from "@/App/Home/HomePage";
import { ExamplePage } from "@/App/ExamplePage/ExamplePage";
import DesignSystemPage from "@/DesignSystem/ShowcasePage/DesignSystemPage";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "design-system", Component: DesignSystemPage },
      { path: "example", Component: ExamplePage },
    ],
  },
]);
