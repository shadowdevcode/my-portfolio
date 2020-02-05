import React from "react"
import "./header.styles.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import aboutStyle from "../pages/About.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      />

      <div className="header-main">
        <div className="dev">
          <h1>{data.site.siteMetadata.title}</h1>
          <span className="attr">Tech Savvy</span>
          <span className="dot">•</span>
          <span className="attr">Blogger</span>
          <span className="dot">•</span>
          <span className="attr">Passionate</span>
        </div>
        <div className="icons">
          <a href="https://github.com/shadowdevcode/">
            <i className="fab fa-github" />
          </a>
          <a href="https://medium.com/@vijay.b.sehgal/">
            <i className="fab fa-medium" />
          </a>
          <a href="https://www.linkedin.com/in/vijay-b-sehgal/">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://twitter.com/vijaysehgal4u/">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://drive.google.com/open?id=1vZRHW3LmaGZ1LT20cW_pV12QEhYXfbXq">
            Resume
          </a>
        </div>
        <span className="pages-link">
          <Link to="/">Portfolio</Link>|<Link to="/blog">Blog</Link>|
          <Link to="/about">About</Link>
        </span>

        <hr />
      </div>
    </div>
  )
}

export default Header
