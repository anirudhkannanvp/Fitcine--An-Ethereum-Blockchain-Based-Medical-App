import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: 10 }}>
            <Link route="/">
                <a className="item">
                    Fitcine App - We create the transparency in medical donation
                </a>
            </Link>

            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">
                    View All Fitcine Donation Campaign
                    </a>
                </Link>
                <Link route="/campaigns/new">
                    <a className="item">
                    Create a new Donation Campaign   +
                    </a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};
