import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Backdrop } from "@material-ui/core";
import { RecoilRoot } from "recoil";

const Login = lazy(() => import("components/pages/Login"));
const Others = lazy(() => import("components/pages/Others"));
const OthersDetail = lazy(() => import("components/pages/OthersInfo"));
const AccountDetail = lazy(() => import("components/pages/AccountInfo"));

const App = () => {
  return (
    <>
      <Router>
        <RecoilRoot>
          <Suspense fallback={<Backdrop open={true} />}>
            <Routes>
              {/* ログイン */}
              <Route exact path="/" element={<Login />} />

              {/* 外部者一覧 */}
              <Route exact path="/others" element={<Others />} />

              {/* 外部者の情報・名刺一覧 */}
              <Route
                exact
                path="/others/:othersId"
                element={<OthersDetail />}
              />

              {/* 自分の情報・名刺一覧 */}
              <Route exact path="/account" element={<AccountDetail />} />
            </Routes>
          </Suspense>
        </RecoilRoot>
      </Router>
    </>
  );
};

export default App;
