import React from "react";
import Section from "../layouts/Section";
import { useLocation } from "react-router";
import ServiceInfo from "../components/posts/ServiceInfo";
import POST_CONTENT from "../content/postContent";

export default function SingleServicePage({ ...props }) {
  const location = useLocation();
  const id = parseInt(location.pathname.slice(location.pathname.length - 1));

  function selectImage(id) {
    const matched = POST_CONTENT.filter((item) => item.id === id);
    const matchedImage = matched[0];
    return matchedImage.image;
  }

  return (
    <Section heading={`Service ${id}`} paddingBottom={"my-12 md:my-20"}>
      <div className="lg:flex lg:justify-between">
        <div className="mr-10 w-full">
          <img className="rounded-sm" src={selectImage(id)} alt="Service description"/>
        </div>
        <ServiceInfo />
      </div>
    </Section>
  );
}
