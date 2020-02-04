import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'

export const query = graphql`
query {
    file(relativePath: { eq: "images/about.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        
        fluid(maxHeight: 700, maxWidth: 500) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
  console.log(query)
  return (
    <Layout>
      <h2>Hello, My name is Vijay Sehgal</h2>

      <div className={aboutStyle.main}>


        <div className={aboutStyle.izquierda}>
          <div className={aboutStyle.imagen}> <Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} /></div>
          <div className={aboutStyle.texto}>

            <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"/><p>Gurugram, India</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"/><p>Kurukshetra University</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"/>Python, Django, Rest Framework, RDBMS, etc</div>



          </div>

        </div>
        <div className={aboutStyle.derecha}>
          <u><strong><h2>What I hope to do</h2></strong></u>
          <p>
            My mission & passion as a developer is to contribute to applications
            that empower, motivate & bring change in lives of people. I
            believe that through code we can make the world a better place by
            building products. Yes, let's change the world together!
          </p>
          <u><strong><h4>More About Myself</h4></strong></u>
          <p>
            I am a Tech-Savvy person. On my free time, I read tech blogs,
            contribute to Quora, Medium, etc & take online courses in order
            to help me develop a growing mindset and become a better
            developer. I relish the thrill of learning new coding languages
            and sharing with others my insights. Throughout this journey, I
            have learnt to stay calm and be positive under pressure.
          </p>

          <div className={aboutStyle.logoContainer}>
            <p>Some of the tech I like:</p>
            <img alt="Python" className={aboutStyle.logo} src="./logos/python.svg" />
            <img alt="Gatsby" className={aboutStyle.logo} src="./logos/gatsby.svg" />
            <img alt="Django" className={aboutStyle.logo} src="./logos/django.svg" />
            <img alt="PostgreSQL" className={aboutStyle.logo} src="./logos/postgresql.svg" />
          </div>


          <div className={aboutStyle.socialContainer}>
            <p>Send me a message!</p>
            <a className={aboutStyle.social} href="https://github.com/shadowdevcode"><i className="fab fa-github"/></a>
            <a className={aboutStyle.social} href="https://www.instagram.com/vijaybsehgal/"><i className="fab fa-instagram"/></a>
            <a className={aboutStyle.social} href="mailto:vijay.b.sehgal@gmail.com?Subject=Hello"><i className="far fa-envelope"/></a>
            <a className={aboutStyle.social} href="https://www.facebook.com/vijay.b.sehgal"><i className="fab fa-facebook"/></a>
            <a className={aboutStyle.social} href="https://join.skype.com/invite/eIfMcxuaGSwz"><i className="fab fa-skype"/></a>
          </div>


        </div>

      </div>
    </Layout>
  )
}

export default About