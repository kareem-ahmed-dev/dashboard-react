import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import Geography from "./pages/geography/Geography";
import Form from "./pages/form/Form";
import Faq from "./pages/faq/Faq";
import LineChart from "./pages/lineChart/LineChart";
import PieChart from "./pages/pieChart/PieChart";
import BarChart from "./pages/barChart/BarChart";
import NotFound from "./pages/notFound/NotFound";
import Calendar from './pages/calendar/Calendar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "team",
        element: <Team />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "invoices",
        element: <Invoices />
      },
      {
        path: "form",
        element: <Form />
      },
      {
        path: "calendar",
        element: <Calendar />
      },
      {
        path: "faq",
        element: <Faq />
      },
      {
        path: "bar",
        element: <BarChart />
      },
      {
        path: "pie",
        element: <PieChart />
      },
      {
        path: "line",
        element: <LineChart />
      },
      {
        path: "geography",
        element: <Geography />
      },
      {
        path: "notFound",
        element: <NotFound />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
