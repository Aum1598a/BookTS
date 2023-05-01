import "./Navber.css"
function Navber() {
  return (
    <div className="BGcolor">
          <div className="container bg-secondary-subtle">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img
                src="https://cdn.discordapp.com/attachments/1048191083911323648/1089869484380147854/Untitled-2.png"
                alt=""
                width={140}
              />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link textColor" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link textColor" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link textColor" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link textColor">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  
  );
}

export default Navber;
