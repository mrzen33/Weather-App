

export default function App() {
  return (
    <>
      <nav className="navbar border-bottom border-body">
        <div className="container">
          <a className="navbar-brand mb-0 h1" href="/">Weather App</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div className=" justify-content-center d-flex me-2" >
        <div className="card" style={{ width: "28rem" }}>

          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>

      </div>
    </>
  )
}