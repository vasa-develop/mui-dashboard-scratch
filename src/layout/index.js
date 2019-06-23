import React, { Component, Fragment } from 'react'
import MainLayout from './MainLayout'

class Index extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout>
                    {this.props.children}
                </MainLayout>
            </Fragment>
        )
    }
}

export default Index