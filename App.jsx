import "./App.css";
function App ()  {
return (
   <div>
    <nav className="container">
      <div className="logo">
        <img src="/src/si.webp" alt=""/>
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Specifications</li>
        <li href="#">Location</li>
        <li href="#">Contact US</li>
      </ul>
      <button>Login</button>
    </nav>
    <main className="hero">
      <div className="content">
        <h1>S21 Ultra 5G</h1>
        <p>Meet Galaxy S21 Ultra 5G.1<br></br>Stunning photo and video resolution.<br></br> A blazing fast processor. <br></br>First ever S Pen compatibility. <br></br>It's an Ultra that easily lives up to its name.</p>
        <div className="a-buttons">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On </p>
          <div className="brand-icons">
            <img src="/src/av2.webp" alt=""/>
            <img src="/src/f.webp" alt=""/>
            <img src="/src/m.webp" alt=""/>
          </div>
        </div>
      </div>
      <div className="image"><img src="/src/s1.jpg"/></div>
      </main>
      </div>
  );
};
export default App;
