import React, { lazy, Suspense } from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Backdrop } from "@material-ui/core"

const Login = lazy(() => import("components/pages/Login"))
const Home = lazy(() => import("components/pages/Home"))
const Account = lazy(() => import("components/pages/Account"))
const CardList = lazy(() => import("components/pages/CardList"))
const CardAdd = lazy(() => import("components/pages/CardAdd"))
const CardDetail = lazy(() => import("components/pages/CardDetail"))
const CardEdit = lazy(() => import("components/pages/CardEdit"))
const MyCardList = lazy(() => import("components/pages/MyCardList"))
const MyCardAdd = lazy(() => import("components/pages/MyCardAdd"))
const MyCardDetail = lazy(() => import("components/pages/MyCardDetail"))
const MyCardEdit = lazy(() => import("components/pages/MyCardEdit"))

const App = () => {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <Backdrop open={true} />
          }
        >
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/account" element={<Account/>} />
            <Route exact path="/account" element={<Account/>} />
            <Route exact path="/cards" element={<CardList/>} />
            <Route exact path="/cards/add" element={<CardAdd/>} />
            <Route exact path="/cards/:cardId" element={<CardDetail/>} />
            <Route exact path="/cards/:cardId/edit" element={<CardEdit/>} />
            <Route exact path="/myCards" element={<MyCardList/>} />
            <Route exact path="/myCards/add" element={<MyCardAdd/>} />
            <Route exact path="/myCards/:cardId" element={<MyCardDetail/>} />
            <Route exact path="/myCards/:cardId/edit" element={<MyCardEdit/>} />

            {/* ホーム画面 */}
            <Route exact path="/home" element={<Home/>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App