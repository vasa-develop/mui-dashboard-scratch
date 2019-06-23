import React, { Component } from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import LayersIcon from '@material-ui/icons/Layers'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'

class Index extends Component {
    render() {
        let { classes, open, mainListItems, secondaryListItems, handleDrawerClose } = this.props
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <LayersIcon fontSize="large" style={{ color: '#6A0BFD' }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <b><font size={5} style={{ color: '#6A0BFD' }}>DappBase</font></b>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
        )
    }
}

export default Index