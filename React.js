function rc(){
    let r=document.getElementById("react");
    const root = ReactDOM.createRoot(r);
    root.render(<Jeact></Jeact>);
}
var rr="vandhitha";
class Jeact extends React.Component {
    
    render() {
      return <h2>Hello {rr}!!</h2>;
    }
  }