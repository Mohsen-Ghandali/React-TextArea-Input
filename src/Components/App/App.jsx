import Form from "../Forms/Form";

const App = () => {
const changeFirstName=(e)=>{
  console.log(e.target.value);
}
const changeLastName=(e)=>{
  console.log(e.target.value);
}

const changeTextArea=(e)=>{
  console.log(e.target.value);
}
  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2">
      <Form changeFirstName={changeFirstName}  changeLastName={changeLastName} changeTextArea={changeTextArea}/>
    </div>
  );
};

export default App;
