import React from 'react'
import {Switch, Route} from "react-router-dom"
import HomePageLayout from "./layouts/HomePageLayout";
import HomePage from "./pages/HomePage";

//todo fix buttons
//todo create a contact form and add it to the top of the footer
// End of today
//todo create copy data file and pass all copy in as props
//todo organize tailwind to use @apply for global styles etc
//todo fix all links
// End of monday
//todo create the contact page 
// End of tuesday
//todo create the about page
// End of wednesday
//todo create the services page 
//todo nice to have - a gallery page - if I get time 
// End of thursday
//todo code clean-up and serve website
// End of friday

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

