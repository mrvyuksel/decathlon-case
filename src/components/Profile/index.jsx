import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './index.module.css';

function Profile({ data }) {
    return (
        <Container>
            <Row>
                {data.map((profile, index) =>
                    <Col lg="3" key={index} >
                        <Link to={`/profile/${profile.id}`} className={styles.profileList}>
                            <div className={styles.profileBoxItem} >
                                <div className={styles.profileImg}>
                                    <img src={profile.picture} alt="" />
                                </div>
                                <div className={styles.profileBoxText}>
                                    {profile.title}.{profile.firstName} {profile.lastName}
                                </div>
                            </div>
                        </Link>
                    </Col>
                )}
            </Row>

        </Container>
    )
}

export default Profile