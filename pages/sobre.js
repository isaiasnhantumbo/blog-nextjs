import Link from 'next/link';

function Title(props) {
  return <h1 style={{ color: props.color }}>{props.children}</h1>;
}

export default function Sobre() {
  return (
    <div>
      <header>
        <Title color="red">Pagina sobre</Title>
      </header>

      <Link href="/">
        <a href="">Link para Home</a>
      </Link>
    </div>
  );
}
