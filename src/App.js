import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'


const App = () => {
	return (
		
		<Router>
				<Switch>
					<Route exact path='/' name='Layout' render={() => <Layout />} />
				</Switch>
		</Router>
		
	)

}

export default App;
