import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { App } from './app.tsx'
import { appStore } from './appStore.ts'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<ReduxProvider store={appStore}>
			<App />
		</ReduxProvider>
	</React.StrictMode>
)
