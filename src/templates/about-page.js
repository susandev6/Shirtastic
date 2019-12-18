import React from "react" 

import styles from "./about-page.module.scss" 
import { Col, Row } from "react-bootstrap" 
import Img from "gatsby-image" 
import PropTypes from "prop-types" 
 
export const AboutPageTemplate = ({ title, contacts, description, logo }) => { 
  return ( 
    <div className={styles.aboutContainer}> 
      <h1>{title}</h1> 
      {logo && logo.childImageSharp ? ( 
        <Img className="col-sm-10 col-lg-4 mb-4" fluid={logo.childImageSharp.fluid} /> 
      ) : ( 
        logo && <img src={logo} alt="Netlify image preview" /> 
      )} 
      <div dangerouslySetInnerHTML={{ __html: description }} /> 
      {contacts && ( 
        <div className="d-flex align-items-center flex-column w-100 justify-content-between"> 
          <h3 className="my-3 text-center">Contact information:</h3> 
          <Row className="w-100"> 
            <Col xs={12} sm={6} className="text-center"> 
              Email: {contacts.email} 
            </Col> 
            <Col xs={12} sm={6} className="text-center"> 
              Phone: {contacts.phone} 
            </Col> 
          </Row> 
        </div> 
      )} 
    </div> 
  ) 
} 
 
AboutPageTemplate.propTypes = { 
  title: PropTypes.string.isRequired, 
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]), 
  contacts: PropTypes.object, 
  description: PropTypes.string, 
} 