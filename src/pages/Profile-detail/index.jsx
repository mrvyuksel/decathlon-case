import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { getUserDetail } from "../../core/services/Api";
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GoogleMap from 'google-map-react';

import Header from '../../components/Header';

import styles from './index.module.css';



function profileDetail() {
  
  const AnyReactComponent = ({ text }) => <div onClick={() => console.log('Click on marker!', text)}>{text}</div>;
  const { slug } = useParams();
  const [user, setuser] = useState({});

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const getUserData = async () => {
    const userDetail = await getUserDetail(slug);
    setuser(userDetail)
  }

  useEffect(() => {
    getUserData()
  }, [])


  return (
    <>
      <Header />
      <Container>
        <div className={styles.profileDetail}>
          <Row>
            <Col lg="4">
              <div className={styles.profilePic}>
                <img src={user.picture} alt="" />
              </div>

            </Col>
            <Col lg="4" >
              <div className={styles.profileDetailInfo}>
                <div className={styles.name}>{user.title}.{user.firstName} {user.lastName}</div>
                <div><span>Birth</span>{moment(user.dateOfBirth).format('DD/MM/YYYY')}</div>

                <div><span>E-Mail</span>{user.email}</div>
                <div><span>Phone</span>{user.phone}</div>
                <div><span>Gender</span> {user.gender}</div>
              </div>
            </Col>
            <Col lg="4" >
              {console.log("first", user)}
            <GoogleMap
                bootstrapURLKeys={{ key: "AIzaSyCK5Emc18o2VaHeJzls5hRUWzSZqECrwMI" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMap>
            </Col>
          </Row>
        </div>

      </Container>

    </>
  )
}

export default profileDetail