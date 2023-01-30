import { Outlet } from "@remix-run/react";
import styles from "~/styles/guitarras.css";

export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra colección de guitarras",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function Tienda() {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
  );
}

export default Tienda;
