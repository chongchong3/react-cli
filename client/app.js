import React from 'react'
import { AppContainer } from 'react-hot-loader' //eslint-disable-line
import ReactDOM from 'react-dom'

import App from './App.jsx'


// ReactDOM.render(<App/>,document.getElementById("root"));
const dom = document.getElementById('root');
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    dom,
  )
  // ReactDOM.render(<Component/>,dom);
}
render(App)


if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default //eslint-disable-line
    render(NextApp)
  })
}
