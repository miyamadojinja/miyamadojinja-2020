import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Button,
  Divider,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

import NavMenuItems from './NavMenuItems';
import LogoLink from './LogoLink';
import useSiteMetadata from './useSiteMetadata';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function ContainerForMobile({ MenuItemsComponent, children }) {
  const [sidebarOpened, setMenuOpened] = React.useState(false);

  const {
    email,
    phoneIntl,
    facebook,
    instagram,
    navigation,
  } = useSiteMetadata();

  const hideSidebar = () => setMenuOpened(false);
  const showSidebar = () => setMenuOpened(true);

  // Specifiy the breakpoint in maxWidth.
  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyTablet.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={hideSidebar}
        vertical
        visible={sidebarOpened}
        direction="right"
      >
        <Button
          icon="times"
          basic
          inverted
          color="grey"
          onClick={hideSidebar}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
        />
        <div style={{ paddingTop: '5rem' }}>
          <Menu.Item as={Link} to={'/'} content="ホーム" />
        </div>

        {MenuItemsComponent}
        <Menu.Item
          as="a"
          href={navigation}
          target="_blank"
          rel="noopener noreferrer"
        >
          交通案内
        </Menu.Item>

        <Menu.Item>
          <Button.Group vertical fluid>
            <Button
              color="facebook"
              as="a"
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              fluid
            >
              <Icon name="facebook" />
              フェイスブック
            </Button>
            <Button
              color="instagram"
              as="a"
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              fluid
            >
              <Icon name="instagram" />
              インスタグラム
            </Button>
          </Button.Group>
          <Divider />
          <p>お問合せ</p>
          <Button.Group vertical fluid inverted>
            <Button basic inverted as="a" href={`tel:${phoneIntl}`}>
              <Icon name="phone" /> お電話
            </Button>
            <Button basic inverted as="a" href={`mailto:${email}`}>
              <Icon name="mail" /> Eメール
            </Button>
          </Button.Group>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened} direction="right">
        <Segment
          inverted
          style={{
            padding: '0.5rem',
          }}
          vertical
        >
          <LogoLink width="200px" />
          <Button
            icon="sidebar"
            basic
            inverted
            color="grey"
            onClick={showSidebar}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
            }}
          />
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
}

function ContainerForDesktop({ MenuItemsComponent, children }) {
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  const hideMenu = () => setMenuOpened(false);
  const showMenu = () => setMenuOpened(true);

  // Specifiy the breakpoint in minWidth.
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyComputer.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showMenu}
        onBottomPassedReverse={hideMenu}
      >
        <Segment
          inverted
          vertical
          style={{
            padding: '0.8rem',
          }}
        >
          <Menu
            fixed={isMenuOpened ? 'top' : null}
            inverted
            pointing={!isMenuOpened}
            secondary={!isMenuOpened}
            size="large"
          >
            <LogoLink width="200px" />

            {MenuItemsComponent}
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
}

// Adopted from Semantic-Org/Semantic-UI-React example layout.
// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js
export default function ResponsiveContainer({ children }) {
  return (
    <>
      <ContainerForDesktop
        MenuItemsComponent={<NavMenuItems />}
        children={children}
      />
      <ContainerForMobile
        MenuItemsComponent={<NavMenuItems />}
        children={children}
      />
    </>
  );
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
