import { createBrowserRouter } from "react-router";
import { AppLayout } from "@/Layout/Shell/AppLayout";
import { HomePage } from "./HomePage";
import DesignSystemPage from "@/DesignSystem/ShowcasePage/DesignSystemPage";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "design-system", Component: DesignSystemPage },
    ],
  },
]);
