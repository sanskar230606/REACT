import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="sanika gite" age={19} img="https://images.unsplash.com/photo-1665661456732-6fc1744ad6cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFrZWQlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user="sakshi patil" age={21} img="https://images.unsplash.com/photo-1559144943-9fd050ccb660?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vYnN8ZW58MHx8MHx8fDA%3D"/>
      <Card user="payal gawande" age={20} img="https://images.unsplash.com/photo-1723109438209-2f6402e08c7c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmFrZWQlMjB3b21lbiUyMGJvb2JzfGVufDB8fDB8fHww"/>
    </div>
  )
}

export default App
