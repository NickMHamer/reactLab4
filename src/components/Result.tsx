export function Result(props: { gif: any }) {
  return (
    <div>
      <h1>{props.gif.title}</h1>
      <img src={props.gif.images.original.url} />
      <h2>
        <a href={props.gif.url}>Link</a>
      </h2>
    </div>
  );
}
