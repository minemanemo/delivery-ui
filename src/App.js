import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from 'components/Base/Header';
import DivisionLine from 'components/Base/DivisionLine';
import TabNavigator from 'components/Base/TabNavigator';
import TabItem from 'components/Base/TabItem';
import BanBox from 'components/Base/BanBox';
import Address from 'containers/Address';

class App extends Component {
  state = {
    path: [
      { path: '/profile', name: '프로필', component: BanBox },
      { path: '/account', name: '계정', component: BanBox },
      { path: '/paymethod', name: '결제수단', component: BanBox },
      { path: '/address', name: '배송지', component: Address },
      { path: '/notification', name: '알림', component: BanBox },
    ],
  };

  createTabItem = () => {
    const { path } = this.state;
    return path.map((item) => (
      <TabItem key={item.path} path={item.path}>
        {item.name}
      </TabItem>
    ));
  };
  createRoute = () => {
    const { path } = this.state;
    return path.map((item) => (
      <Route key={item.path} path={item.path} component={item.component} />
    ));
  };

  render() {
    const { createTabItem, createRoute } = this;
    return (
      <BrowserRouter>
        <Header title="설정" />
        <TabNavigator>{createTabItem()}</TabNavigator>
        <DivisionLine />
        {createRoute()}
      </BrowserRouter>
    );
  }
}

export default App;
