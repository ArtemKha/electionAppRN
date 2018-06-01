import React, { Component } from 'react';
import { Scene, Router, TabBar, Icon } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

/*
 * Containers (Views)
 */
import WelcomeScene from './scenes/WelcomeScene'
import TeamSelectorScene from './scenes/TeamSelectorScene'
import TeamProfileScene from './scenes/TeamProfileScene'

/*
 * TabBar Icons
 */
import TabIcon from './components/navigation/Tab';

const Root = () => {
  return (
    <Router>
      <Scene key="root" >
        <Scene key="Welcome" initial={true} component={WelcomeScene} title='Welcome' direction="vertical" />
        <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#eee' }}>
          <Scene key="character" title="Characters" icon={TabIcon} initial={true}>
            <Scene key="characters" component={TeamSelectorScene} title="Characters" />
          </Scene>
          <Scene key="prof" title="Profile" icon={TabIcon}>
            <Scene key="profile" component={TeamProfileScene} title="Profile" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Root
