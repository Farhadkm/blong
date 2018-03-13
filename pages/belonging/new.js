import React, { Component } from 'react';
import { Form, Input, Button, Message } from "semantic-ui-react";
import Layout from '../../components/Layout';
import belongingBuilder from '../../ethereum/BelongingBuilder';
import web3 from '../../ethereum/web3';
import { Router } from "../../routes";

class NewBelongingComponent extends Component {

    state = {
        name: '',
        description: '',
        loading: false,
        message :''
    }

    onAddBelonging = async (event) => {
        event.preventDefault();
        this.setState({ message: '' });
        try {
            this.setState({ loading: true });
            const accounts = await web3.eth.getAccounts();
            await belongingBuilder.methods
                .createBelonging(this.state.name, this.state.description)
                .send({
                    from: accounts[0]
                });
        Router.push('/mybelongings')
        }
        catch (e) {
            this.setState({ message: e.message });
        }
        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <h3 style={{ marginTop: '50px' }}>Add New Belonging</h3>
                <Form style={{ marginTop: '50px' }} onSubmit={this.onAddBelonging} error={!!this.state.message}>
                    <Form.Field>
                        <label>Name</label>
                        <Input
                            value={this.state.name}
                            onChange={event => this.setState({ name: event.target.value })} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.target.value })} />
                    </Form.Field>
                    <Button loading={this.state.loading} primary>Add Belonging</Button>
                    <Message error header="Oops" content={this.state.message}></Message>
                </Form>
            </Layout>
        )
    }

}

export default NewBelongingComponent;