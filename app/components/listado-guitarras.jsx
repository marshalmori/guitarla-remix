import { Fragment } from "react";
import Guitarra from "~/components/guitarra";

export default function ListadoGuitarras({ guitarras }) {
  return (
    <Fragment>
      <h2 className="heading">Nuestra Colección</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
    </Fragment>
  );
}
