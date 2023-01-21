export default function Main(props) {
  return <Header msg={props.msg} />;
}
function Header(props) {
  return (
    <div className="h1_color">
      <h1>Header Part</h1>
      <Wrapper msg={props.msg} />
    </div>
  );
}
function Wrapper(props) {
  return (
    <div className="h2_color">
      <h2>Wrapper Part</h2>
      <FooterButton msg={props.msg} />
    </div>
  );
}
function FooterButton(props) {
  return (
    <div className="h3_color">
      <h3>Button Part</h3>
      <button onClick={() => alert(props.msg)}>Click here</button>
    </div>
  );
}
