import React from 'react'
import {Switch, Route} from "react-router-dom"
import HomePageLayout from "./layouts/HomePageLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <HomePageLayout heading="Sadb's House of Design">
          <HomePage/>
        </HomePageLayout>
      </Route>
    </Switch>
  )
}

