import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Typography, Box, Paper, Grid, ListItemText, ListItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.footer.main,
        display: "flex",
        flex: 1,
        flexDirection: "row",
    },
    paper: {
        padding: theme.spacing(2),
        // margin: theme.spacing(1),
        color: theme.palette.primary.main,
        display: "flex",
        flex: 1,
        height: "100%",
        background: 'none',
        flexDirection: "column",
        boxShadow: "none",
        borderRadius: 0
    },
    footerContent: {
        margin: theme.spacing(1),
    },
    footerContentList: {
        padding: 0,
        listStyle: 'none'
    },
    footerNav: {
        padding: 0,
        width: "auto",
        display: "inline-block",
        borderBottom: "1px solid transparent",
        "&:hover": {
            background: "none",
            borderColor: theme.palette.primary.main
        },

    },
    footerContentListText: {
        fontSize: "0.8rem"
    },
    footerContentHeading: {
        borderBottom: "2px solid",
        fontSize: "1rem"
    },
    copyrights: {
        // color: theme.palette.white.main,
        textAlign: "center"
    }
}));
const Copyright = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs >
                <Typography variant="body2" colorPrimary align="center" justify="center" className={classes.copyrights}>
                    {'Copyright © '}
                    <Link color="inherit" href="#">Your Website</Link>
                    {' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Grid>
        </Grid>
    );
}
const ListItemLink = (props) => {
    return <ListItem button component={Link} {...props} />;
}
const FooterListItems = ({ heading, lists }) => {
    const classes = useStyles();
    return (
        <>
            <Typography component="div" className={classes.footerContentHeading}>
                <Box fontWeight="fontWeightBlack">{heading}</Box>
            </Typography>
            <ul
                className={classes.footerContentList}
            >
                {lists.map(item => <li><ListItemLink className={classes.footerNav} to={item}>
                    <Box component="span" className={classes.footerContentListText}>
                        {item}
                    </Box>
                </ListItemLink></li>)}
            </ul></>)
}
function Footer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={9}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="stretch"
                        >
                            <Grid item xs className={classes.footerContent}>
                                <Paper className={classes.paper}>
                                    <FooterListItems
                                        heading="INFORMATION"
                                        lists={[
                                            "About Us",
                                            "Our Store",
                                            "FAQs",
                                            "Contact Us",
                                            "How to Process Order"
                                        ]} />
                                </Paper>
                            </Grid>
                            <Grid item xs className={classes.footerContent}>
                                <Paper className={classes.paper}>
                                    <FooterListItems
                                        heading="SHOPPING POLICY"
                                        lists={[
                                            "Privacy Policy",
                                            "Shipping Policy",
                                            "Return Policy",
                                            "Refund Policy",
                                            "Terms & Conditions",
                                            "Disclaimer"
                                        ]} />
                                </Paper>
                            </Grid>
                            <Grid item xs className={classes.footerContent}>
                                <Paper className={classes.paper}>
                                    <FooterListItems
                                        heading="MY ACCOUNT"
                                        lists={[
                                            " My Account",
                                            "Order History",
                                            "Wish List",
                                            "Newsletter",
                                        ]} />
                                </Paper>
                            </Grid>
                            <Grid item xs className={classes.footerContent}>
                                <Paper className={classes.paper}>
                                    <FooterListItems
                                        heading="QUICK LINKS"
                                        lists={[
                                            "Sarees",
                                            "Salwar Kameez",
                                            "Lehenga choli",
                                            "Gowns",
                                        ]} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="stretch"
                        >
                            <Grid item sm className={classes.footerContent}
                            >
                                <Paper className={classes.paper}>
                                    <FooterListItems
                                        heading="QUICK LINKS"
                                        lists={[
                                            "Sarees",
                                            "Salwar Kameez",
                                            "Lehenga choli",
                                            "Gowns",
                                        ]} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="stretch"
            >
                <Copyright />
            </Grid>
        </>
    )
}

export default Footer
