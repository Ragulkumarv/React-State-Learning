export default function Fruits(props) {
  return (
    <div>
      {props.fruits.map((props) => (
        <p key={props.id}>{props.fruitName}</p>
      ))}
    </div>
  );
}
