import React, { useState } from 'react'
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
    Box,
    MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { layoutStyles } from "../../styles"

const Header = ({ location: { pathname }, token }) => {
    const classes = layoutStyles();
    const [open, setOpen] = useState(false);

    function handleDrawerOpen() {
        setOpen(open === false ? true : false);
    }
    return (
        <>
            <Typography component="div">
                <Box fontWeight="fontWeightBlack" fontSize="h4.fontSize">LOGO</Box>
            </Typography>
            <div>
                <MenuList className={classes.menuList}>
                    <MenuItem
                        className={classes.menuItem}
                        component={Link}
                        to="/"
                        selected={"/" === pathname}
                    >
                        <Typography type="title" variant="subtitle1" color="inherit"> Home </Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.menuItem}
                        component={Link}
                        to="/searchResults"
                        selected={"/searchResults" === pathname}
                    >
                        <Typography type="title" variant="subtitle1" color="inherit"> Search Results </Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.menuItem}
                        component={Link}
                        to="/details"
                        selected={"/details" === pathname}
                    >
                        <Typography type="title" variant="subtitle1" color="inherit"> Details </Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.menuItem}
                        component={Link}
                        to="/cart"
                        selected={"/cart" === pathname}
                    >
                        <Typography type="title" variant="subtitle1" color="inherit"> Cart </Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.menuItem}

                    >
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </MenuItem>
                </MenuList>
                
            </div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                color="secondary"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <MenuList className={classes.menuList}>
                    <MenuItem
                        className={classes.menuItem}
                        component={Link}
                        to="/"
                        selected={"/" === pathname}
                    >
                        <Typography type="title" variant="subtitle1" color="inherit"> Home </Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.menuItem}
                        component={Link}
                        to="/searchResults"
                        selected={"/searchResults" === pathname}
                    >
                        <Typography type="title" variant="subtitle1" color="inherit"> Search Results </Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.menuItem}
                        component={Link}
                        to="/details"
                        selected={"/details" === pathname}
                    >
                        <Typography type="title" variant="subtitle1" color="inherit"> Details </Typography>
                    </MenuItem>
                    <MenuItem
                        className={classes.menuItem}
                        component={Link}
                        to="/cart"
                        selected={"/cart" === pathname}
                    >
                        <Typography type="title" variant="subtitle1" color="inherit"> Cart </Typography>
                    </MenuItem>
                </MenuList>
            </Drawer>
        </>
    )
}

export default Header
