

const App = () => {

  const PostFormData=(event)=>{
    event.preventDefault();
  }

  return(
    <div>
      <form onSubmit={PostFormData}>
        <input placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
};

export default App;
