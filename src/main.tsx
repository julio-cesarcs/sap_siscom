import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Table from "./components/Table";
import Header from "./components/Header";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex min-h-screen flex-col gap-5 bg-[#333]">
      <Header />
      <Table />
      <Footer />
    </div>
  </StrictMode>,
);
