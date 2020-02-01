import React, { useState } from "react";
import clsx from "clsx";
import { Link, withRouter } from "react-router-dom";
import {
    Drawer,
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Divider,
    Button,
    IconButton,
    MenuList,
    MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// import Menubox from "../menu";
// import ImageAvatars from "../avatar";
import { Header } from "../";
import { Footer } from "../";
import { layoutStyles } from "../../styles"
const Layout = ({ children, token,  location }) => {
    const classes = layoutStyles();
    const [open, setOpen] = useState(true);

    function handleDrawerOpen() {
        setOpen(open === false ? true : false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                className={clsx(classes.appBar, {
                    // [classes.appBarShift]: open
                })}
            >
                {/* <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton> */}
                <Header token={token} location={location}/>
            </AppBar>
            <main
                className={clsx(classes.content, {
                    // [classes.contentShift]: open
                })}
            >
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default withRouter(Layout);
