import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/footer/Footer";
import HomePageLayout from "./layouts/HomePageLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ContactPageLayout from "./layouts/ContactPageLayout";
import AboutPageLayout from "./layouts/AboutPageLayout";
import ServicesPageLayout from "./layouts/ServicesPageLayout";
import ServicesPage from "./pages/ServicesPage";
import ProjectPageLayout from "./layouts/ProjectPageLayout"
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePageLayout>
            <HomePage />
          </HomePageLayout>
        </Route>
        <Route path="/about">
          <AboutPageLayout>
            <AboutPage />
          </AboutPageLayout>
        </Route>
        <Route path="/services/:id">
          <ServicesPageLayout>
            <ServicesPage />
          </ServicesPageLayout>
        </Route>
        <Route path="/project/:id">
          <ProjectPageLayout>
            <ProjectPage />
          </ProjectPageLayout>
        </Route>
        <Route path="/contact">
          <ContactPageLayout>
            <ContactPage />
          </ContactPageLayout>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
