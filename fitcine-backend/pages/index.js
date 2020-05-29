import React, { Component } from 'react';
import factory from '../Ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';


class CampaignIndex extends Component {

    static async getInitialProps() {
        // next js execute on the server side
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns() {
        const src = '/cancer.jpeg';
        const items = this.props.campaigns.map(address => {
            return {
                image:{src},
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: false,
                style: { overflowWrap: 'break-word' }
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Fitcine Open Campaigns</h3>

                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                content="Create Campaign"
                                icon="add circle"
                                primary
                                floated="right"
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;
