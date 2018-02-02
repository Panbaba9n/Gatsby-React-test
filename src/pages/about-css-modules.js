import React from "react";
import styles from "./about-css-modules.module.css";

import Container from "../components/container";

const User = props =>
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt=""/>
        <div className={styles.description}>
            <h2 className={styles.username}>
                {props.username}
            </h2>
            <p className={styles.excerpt}>
                {props.excerpt}
            </p>
        </div>
    </div>

export default () => (
    <Container>
        <h1>About Css Modules</h1>
        <p>CSS Modules are cool</p>
        <User
            username="Shreder"
            avatar="https://s00.yaplakal.com/pics/pics_original/3/1/8/9239813.jpg"
            excerpt="I'm Shreder, pathetic turtles"
        />
        <User
            username="Leonardo"
            avatar="http://www.bluefincorp.com/catalog/media/catalog/product/cache/1/image/d99b96fdfac3c3b0fb10c47728c64410/t/u/turtles_leonardo002w.jpg"
            excerpt="Teenage Mutant Ninja Turtles"
        />
    </Container>
);