import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './index.module.css';


function Post({ data }) {
    return (
        <Container>
            <Row>
                {data.map((post, index) =>
                    <Col lg="6" key={index}>
                        <div className={styles.postBoxItem} >
                            <div className={styles.profileInfo}>
                                <Link to={`/profile/${post.owner.id}`}>
                                    <div className={styles.profileInfoImg}>
                                        <img src={post.owner.picture} alt="" />
                                    </div>
                                    <div className={styles.profileInfoText}>{post.owner.firstName} {post.owner.lastName}</div>
                                </Link>
                            </div>
                            <div className={styles.postContent}>
                                <div className={styles.postBoxImg}>
                                    <img src={post.image} alt="" />
                                </div>
                                <div className={styles.postBoxText}>
                                    <span>
                                        {moment(post.publishDate).format('DD/MM/YYYY h:mm:s')}
                                    </span>
                                    <p>
                                        {post.text}
                                    </p>
                                    <div className={styles.postTags}>
                                        {post.tags.map(tag => <span>{tag}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>

        </Container>
    )
}

export default Post