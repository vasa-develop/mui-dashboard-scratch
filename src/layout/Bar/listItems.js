import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DatabaseIcon from '@material-ui/icons/Storage';
import StorageIcon from '@material-ui/icons/PermMedia';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import NetworkingIcon from '@material-ui/icons/Grain';
import IntegrationIcon from '@material-ui/icons/SettingsInputComponent';

import { NavLink } from 'react-router-dom'

export const mainListItems = (
    <Fragment>
        <ListSubheader inset>Develop</ListSubheader>
        <NavLink to='/auth' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Authentication" />
            </ListItem>
        </NavLink>
        <NavLink to='/database' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
                <ListItemIcon>
                    <DatabaseIcon />
                </ListItemIcon>
                <ListItemText primary="Database" />
            </ListItem>
        </NavLink>
        <NavLink to='/storage' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
                <ListItemIcon>
                    <StorageIcon />
                </ListItemIcon>
                <ListItemText primary="Storage" />
            </ListItem>
        </NavLink>
        <NavLink to='/networking' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
                <ListItemIcon>
                    <NetworkingIcon />
                </ListItemIcon>
                <ListItemText primary="Networking" />
            </ListItem>
        </NavLink>
        <NavLink to='/integrations' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
                <ListItemIcon>
                    <IntegrationIcon />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
            </ListItem>
        </NavLink>
    </Fragment>
);

export const secondaryListItems = (
    <Fragment>
        <ListSubheader inset>Analytics</ListSubheader>
        <NavLink to='/analytics' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Current month" />
            </ListItem>
        </NavLink>
        <NavLink to='/analytics' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Last quarter" />
            </ListItem>
        </NavLink>
        <NavLink to='/analytics' style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Year-end sale" />
            </ListItem>
        </NavLink>
    </Fragment>
);
