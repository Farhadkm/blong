import React, { Component } from 'react';
import { Image, Input, Button, Grid, Form } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Router, Link } from "../routes";






class HomeComponent extends Component {

    state = {
        searchAddress: ''
    }

    onSearch = async () => {
        event.preventDefault()
        await Router.push(`/belonging/${this.state.searchAddress}`)
    }

    render() {

        return (
            <Layout>
                <Image style={{ marginTop: "150px" }} src={'../static/Blong.jpeg'} size='medium' centered />
                <Form onSubmit={this.onSearch}>
                    <Input
                        style={{ marginTop: '50px', marginLeft: '15%', marginRight: '15%' }}
                        value={this.state.searchAddress}
                        onChange={event => this.setState({ searchAddress: event.target.value })}
                        action={{ icon: 'search' }}
                        placeholder='Search...' fluid />
                </Form>
                <Grid>
                    <Grid.Row style={{ marginTop: '50px', marginLeft: '40%' }}>
                        <Link route={'/mybelongings'}><Button floated="left">My Belongings</Button></Link>
                        <Link route={'/belonging/new'}><Button floated="left">Add Belonging</Button></Link>
                    </Grid.Row>
                </Grid>
            </ Layout>
        )
    }
}

export default HomeComponent;