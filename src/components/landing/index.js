import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Carousal } from "../../comman";
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    slides: {
        background: "#5f9ea0",
        color: "#fff",
        fontSize: "36px",
        height: "calc(100vh - 60px)",
        margin: "0px",
        position: "relative",
        textAlign: "center",
    },
    banner: {
        marginBottom: theme.spacing(7)
    }
}));
const H3 = styled.h3`
 color: red
`;
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, 
                display: "block",
                right: "25px", 
                "&:before": {
                    color: "red"
                }
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", zIndex: 1, left: "25px" }}
            onClick={onClick}
        />
    );
}
function Landing() {
    const classes = useStyles();
    const bannerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <div
              style={{
                bottom: "0",
                padding: "10px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
    };
    const slideSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            {/* <h1>Landing</h1> */}
            <div className={classes.banner}>
                <Carousal settings={bannerSettings} >
                    <div className={classes.slides}>
                        <H3 >1</H3>
                        <p>sfgjnsgdjndskjg dgkjsgkjdbsgkj dskgjbbsdjkgbdsg dskjgbdskjgds</p>
                    </div>
                    <div className={classes.slides}>
                        <H3 >2</H3>
                        <p>sfgjnsgdjndskjg dgkjsgkjdbsgkj dskgjbbsdjkgbdsg dskjgbdskjgds</p>
                    </div>
                    <div className={classes.slides}>
                        <H3 >3</H3>
                        <p>sfgjnsgdjndskjg dgkjsgkjdbsgkj dskgjbbsdjkgbdsg dskjgbdskjgds</p>
                    </div>
                    <div className={classes.slides}>
                        <H3 >4</H3>
                        <p>sfgjnsgdjndskjg dgkjsgkjdbsgkj dskgjbbsdjkgbdsg dskjgbdskjgds</p>
                    </div>
                    <div className={classes.slides}>
                        <H3 >5</H3>
                        <p>sfgjnsgdjndskjg dgkjsgkjdbsgkj dskgjbbsdjkgbdsg dskjgbdskjgds</p>
                    </div>
                    <div className={classes.slides}>
                        <H3 >6</H3>
                        <p>sfgjnsgdjndskjg dgkjsgkjdbsgkj dskgjbbsdjkgbdsg dskjgbdskjgds</p>
                    </div>
                </Carousal>
            </div>

            <Carousal settings={slideSettings}>
                <div className={classes.slides}>
                    <h3 >1</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >2</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >3</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >4</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >5</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >6</h3>
                </div>
            </Carousal>
            <Carousal settings={slideSettings}>
                <div className={classes.slides}>
                    <h3 >1</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >2</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >3</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >4</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >5</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >6</h3>
                </div>
            </Carousal>
            <Carousal settings={slideSettings}>
                <div className={classes.slides}>
                    <h3 >1</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >2</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >3</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >4</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >5</h3>
                </div>
                <div className={classes.slides}>
                    <h3 >6</h3>
                </div>
            </Carousal>
        </div>
    )
}

export default Landing
