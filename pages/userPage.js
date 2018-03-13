import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import belongingBuilder from '../ethereum/BelongingBuilder';
import web3 from '../ethereum/web3'
import Layout from '../components/Layout';
import Belonging from '../ethereum/Belonging';
import { Link } from "../routes";


class UserPageComponent extends Component {

    state = {
        belongingAddresses: [],
        belongings: []
    }

    async componentWillMount() {
        const accounts = await web3.eth.getAccounts();
        const belongingAddresses = await belongingBuilder.methods.getUserBelongings().call({ from: accounts[0] });
        const belongings = await Promise.all(
            belongingAddresses.map(async (belongingAddress, index) => {
                const belonging = Belonging(belongingAddress)
                return belonging.methods.getData().call()
            })
        )
        this.setState({ belongingAddresses, belongings })
    }


    state = {}

    renderCards = () => {
        if (!this.state.belongings) {
            return <div>loading...</div>
        }

        return this.state.belongings.map((belonging, index) => {

            return (
                <Link key={index} route={`/belonging/${this.state.belongingAddresses[index]}`}>
                    <Card >
                        <Card.Content style={{ overflowWrap: 'break-word' }}>
                            <Card.Header>{belonging[0]}</Card.Header>
                            <Card.Meta>{this.state.belongingAddresses[index]}</Card.Meta>
                            <Card.Description>{belonging[1]}</Card.Description>
                        </Card.Content></Card>

                </Link>)

        })
    }

    render() {

        return (
            <Layout>
                <h2 style={{ marginTop: '50px' }}>My Belongings</h2>
                <Card.Group style={{ marginTop: '20px' }}>
                    {this.renderCards()}
                </Card.Group>
            </Layout>
        )
    }
}

export default UserPageComponent;