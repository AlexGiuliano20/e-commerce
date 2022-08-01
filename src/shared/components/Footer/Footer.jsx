import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary-reverse">
      <Toolbar left={leftContents} right={rightContents} />
    </div>
  );
};

const leftContents = (
  <React.Fragment>
    <h2>CDA</h2>
  </React.Fragment>
);

const rightContents = (
  <React.Fragment>
    <a
      href="https://www.instagram.com/cda_informatica/"
      target="_blank"
      rel="noreferrer"
    >
      <Button icon="pi pi-instagram" className="p-button-info mr-2" />
    </a>
    <a
      href="https://www.facebook.com/apasionadosIT"
      target="_blank"
      rel="noreferrer"
    >
      <Button icon="pi pi-facebook" className="p-button-info mr-2" />
    </a>
    <a
      href="https://www.linkedin.com/company/cda-informatica/mycompany/"
      target="_blank"
      rel="noreferrer"
    >
      <Button icon="pi pi-linkedin" className="p-button-info" />
    </a>
  </React.Fragment>
);

export default Footer;
