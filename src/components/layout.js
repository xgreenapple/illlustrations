import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      <div className="announce-wrapper ph">
        <div className="container">
        
        </div>
      </div>
      <section className="header_section">
        <div className="container">
          <nav>
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
            <ul className="buttons links">
              <li>
                <a className="btn-tw" href="https://twitter.com/intent/tweet?text=Open%20source%20illustrations%20kit%20with%20100%20awesome%20vectors.%20Check%20https%3A//illlustrations.co%20by%20@realvjy">Share on twitter <img src="/twitter.svg"/></a>
              </li>

            </ul>
          </nav>


        </div>
      </section>
      </>
    )
    return (
      <div className="illlustrations_main">
        <header>{header}</header>
        <main className="up_i">{children}</main>
        <footer className="container footer">
          <div className="dev-credit">
          <div className="logo">
            <div className="nav">
              <a href="/"><img src="/logo-foot.svg"/></a>
            </div>
            <div className="menu">
              <a href="/license">Free for Commercial and Personal Use</a>
            </div>
          </div>
          <h3>Design & devlop <a href="https://vijayverma.co">vijay verma</a> </h3>
          <ul className="scl-lnk">
            <li><a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg"/></a></li>
            <li><a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg"/></a></li>
            <li><a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg"/></a></li>
          </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
