function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.fname.value);
    console.log(event.target.elements.lname.value);
  };

  return (
    <>
      <form className="p-10 gap-5" onSubmit={handleSubmit}>
        <input type="text" name="fname" placeholder="enter firstname" />
        <input type="text" name="lname" placeholder="enter lastname" />
        <button type="submit" className="bg-green-400 px-4 py-2">
          Click
        </button>
      </form>
    </>
  );
}

export default App;
