import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { mainListItems, secondaryListItems } from '../Bar/listItems';
import useStyles from '../styles'

import Auth from '../../components/dashboard/auth'
import TopBar from '../TopBar'
import SideBar from '../SideBar'
import Footer from '../Footer'

export default function Dashboard(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true)
    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    //Handle Layout according to path here

    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopBar classes={classes} open={open} handleDrawerOpen={handleDrawerOpen} />
            <SideBar
                classes={classes} open={open}
                mainListItems={mainListItems} secondaryListItems={secondaryListItems}
                handleDrawerClose={handleDrawerClose}
            />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={12}>
                            <Paper className={fixedHeightPaper}>
                                {/* props.children */}
                                <Auth />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </main>
        </div>
    )
}