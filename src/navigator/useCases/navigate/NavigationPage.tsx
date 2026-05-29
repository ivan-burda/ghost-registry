import { Layout } from '../../../ui/PageLayout.tsx';
import { Stripe } from '../../../ui/Stripe.tsx';
import { Logo } from '../../../ui/Logo.tsx';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from '../../../ui/Nav.tsx';

export const NavigationPage = () => {
    return (
        <Layout>
            <Stripe>
                <Logo variant="xl" />
            </Stripe>
            <Nav>
                <NavItem>
                    <Link to="/restricted">Targets</Link>
                </NavItem>
                <NavItem>
                    <Link to="/restricted">Ghost Registry</Link>
                </NavItem>
                <NavItem>
                    <Link to="/restricted">Trap Inventory</Link>
                </NavItem>
                <NavItem>
                    <Link to="/restricted">Containment Unit</Link>
                </NavItem>
                <NavItem>
                    <Link to="/restricted">Sightings Log</Link>
                </NavItem>
                <NavItem>
                    <Link to="/restricted">Classifications</Link>
                </NavItem>
                <NavItem>
                    <Link to="/restricted">Field Reports</Link>
                </NavItem>
                <NavItem>
                    <Link to="/restricted">Crew Roster</Link>
                </NavItem>
                <NavItem>
                    <Link to="/restricted">Client Invoices</Link>
                </NavItem>
            </Nav>
        </Layout>
    );
};
