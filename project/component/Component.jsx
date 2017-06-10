import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


class Main extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {
        return (
            <div id="MainComponent">
                {/* Fill me in */}
            </div>
        )
    }

}

Main = reduxForm({
    form: 'Main Component'
})(Main)

export default connect(state => ({
}))(Main)