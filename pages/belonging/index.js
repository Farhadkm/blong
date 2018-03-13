import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Table } from "semantic-ui-react";
import BelongingContract from '../../ethereum/Belonging';

class Belonging extends Component {

    static async getInitialProps(props) {
        const belonging = BelongingContract(props.query.id);
        const belongingData = await belonging.methods.getData().call();
        return {
            belongingId: props.query.id,
            name: belongingData[0],
            description: belongingData[1],
            ownerAddress: belongingData[2],
            ownTime: belongingData[3],
            creatorAddress: belongingData[4],
            createTime: belongingData[5]
        }
    }

    render() {
        return (
            <Layout>
                <h2 style={{marginTop: '100px'}}>Belonging {this.props.belongingId}</h2>
                <Table celled>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Name</Table.Cell>
                            <Table.Cell>{this.props.name}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Description</Table.Cell>
                            <Table.Cell>{this.props.description}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Creator
                            </Table.Cell>
                            <Table.Cell>{this.props.creatorAddress}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Owner
                            </Table.Cell>
                            <Table.Cell>{this.props.ownerAddress}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Creator time
                            </Table.Cell>
                            <Table.Cell>{this.props.createTime}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Own time
                            </Table.Cell>
                            <Table.Cell>{this.props.ownTime}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Layout>
        )
    }

}

export default Belonging;