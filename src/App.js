import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from 'components/Header';
import TabNavigator from 'components/TabNavigator';
import TabItem from 'components/TabItem';

import BanBox from 'components/BanBox';
import Address from 'components/Address';

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

  render() {
    const { path } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Header title="설정">
            <TabNavigator>
              {path.map((item) => (
                <TabItem key={item.path} path={item.path}>
                  {item.name}
                </TabItem>
              ))}
            </TabNavigator>
          </Header>
          {path.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          ))}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
