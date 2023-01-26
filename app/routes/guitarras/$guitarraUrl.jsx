export async function loader({ params }) {
  const { guitarraUrl } = params;
  console.log(guitarraUrl);

  return {};
}

function Guitarra() {
  return <div>GuitarraUrl</div>;
}

export default Guitarra;
