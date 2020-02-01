import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 250;
const layoutStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection:'column'
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        zIndex: theme.zIndex.drawer + 1,
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 2),
        ...theme.mixins.toolbar,
        justifyContent: "space-between",
        flexDirection: 'row'

    },
    appBarShift: {
        // width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundImage: 'url()',
        backgroundColor: theme.palette.primary.dark,
        marginTop: theme.spacing(8)
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 0.5),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(1, 3, 3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        // marginLeft: -drawerWidth,
        marginTop: theme.spacing(8.125),
        minHeight: 'calc(100vh - 65px)',
        overflow: 'auto',
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
    },
    menuList: {
        padding: 0
    },
    menuItem: {
        color: theme.palette.common.primary,
        display: 'inline-block'
    },
    toolbarButtons: {
        marginLeft: "auto",
        marginRight: 0,
        display: "flex",
        alignItems: "center"
    },
    logo: {
        // width: "70px",
        // height: "52px",
        // display: "flex",
        // backgroundSize: "contain"
    },
}));
export default layoutStyles;