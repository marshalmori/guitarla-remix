import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Vendas de guitarras, blog de música",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagem sobre nós" />
        <div>
          <p>
            Aliquam erat volutpat. Donec convallis, augue nec tempor bibendum,
            neque erat condimentum ligula, sit amet lacinia risus quam tempus
            enim. Phasellus vulputate euismod risus, nec bibendum metus pulvinar
            at. Fusce consectetur enim nisi, id ullamcorper sapien elementum
            vitae. Integer leo lacus, condimentum a odio ut, consectetur egestas
            augue.
          </p>
          <p>
            Aliquam erat volutpat. Donec convallis, augue nec tempor bibendum,
            neque erat condimentum ligula, sit amet lacinia risus quam tempus
            enim. Phasellus vulputate euismod risus, nec bibendum metus pulvinar
            at. Fusce consectetur enim nisi, id ullamcorper sapien elementum
            vitae. Integer leo lacus, condimentum a odio ut, consectetur egestas
            augue.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
