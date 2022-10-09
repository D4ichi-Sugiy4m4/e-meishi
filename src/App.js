import React from "react"
import { RecoilRoot } from "recoil";
import CardList from "./components/pages/CardList";
import { Auth } from "./store/auth"

const App = () => {
  return(
    <>
      <Auth>
        <RecoilRoot>
          <CardList />
        </RecoilRoot>
      </Auth>
    </>
  )
}

export default App;
