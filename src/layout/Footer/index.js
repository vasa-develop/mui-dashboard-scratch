import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default class index extends Component {
    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Built with love by the '}
                <Link color="inherit" href="https://material-ui.com/">
                    Cluster Labs
                </Link>
            </Typography>
        )
    }
}
