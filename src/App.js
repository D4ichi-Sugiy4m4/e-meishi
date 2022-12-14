import React from "react"
import CardList from "./components/pages/CardList";
import { Auth } from "./store/auth"

const App = () => {
  return(
    <>
      <Auth>
          <CardList />
      </Auth>
    </>
  )
}

export default App;
