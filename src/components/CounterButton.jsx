function CounterButton(props) {
  return (
    <div>
      <p>Ceci est bouton pour {props.label}</p>
      <button onClick={props.modifyCount}> {props.operation}1 </button>
    </div>
  )
}

export default CounterButton;