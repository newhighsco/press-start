import React, { Component } from 'react'
import { Router, Switch, Route, Head } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import ReactGA from 'react-ga'
import withAnalytics from './components/analytics/Analytics'
import appleTouchIcon from './images/apple-touch-icon.png'
import openGraphImage from './images/favicon-1200x1200.jpg'

import './stylus/index.styl'

const constants = require('./utils/constants')

const { title, name, description } = constants.meta

class App extends Component {
  constructor (props) {
    super(props)

    if (constants.meta.trackingId) {
      ReactGA.initialize(constants.meta.trackingId)
    }
  }

  render () {
    const RenderRoutes = ({ getComponentForPath }) => (
      <Route
        path="*"
        render={props => {
          let Comp = withAnalytics(getComponentForPath(props.location.pathname))

          return <Comp key={props.location.pathname} {...props} />
        }}
      />
    )

    return (
      <Router>
        <div className="site-container">
          <Head
            defaultTitle={title}
            titleTemplate={`%s | ${name}`}
          >
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <link rel="apple-touch-icon" href={appleTouchIcon} />
            <meta property="og:image" content={openGraphImage} />
          </Head>
          <Switch>
            <Routes component={RenderRoutes} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
