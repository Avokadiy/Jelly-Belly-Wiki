import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './components/Router/router'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (
    <Provider store = {store}>
      <RouterProvider router = {router}/>
    </Provider>
  )
}

export default App
