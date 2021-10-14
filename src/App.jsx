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
import ServicePageLayout from "./layouts/ServicePageLayout";
import ServicePage from "./pages/ServicePage";
import ServicesPageLayout from "./layouts/ServicesPageLayout";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPageLayout from "./layouts/ProjectsPageLayout";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./utilities/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <HomePageLayout>
              <HomePage />
            </HomePageLayout>
          </Route>
          <Route exact path="/about">
            <AboutPageLayout>
              <AboutPage />
            </AboutPageLayout>
          </Route>
          <Route exact path="/services">
            <ServicesPageLayout>
              <ServicesPage />
            </ServicesPageLayout>
          </Route>
          <Route path="/services/:id">
            <ServicePageLayout>
              <ServicePage />
            </ServicePageLayout>
          </Route>
          <Route path="/projects/:id">
            <ProjectsPageLayout>
              <ProjectsPage />
            </ProjectsPageLayout>
          </Route>
          <Route exact path="/contact">
            <ContactPageLayout>
              <ContactPage />
            </ContactPageLayout>
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
}
