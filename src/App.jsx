import './app.css'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

