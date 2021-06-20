import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      
      <div className="ppc-logo-bg">
        <h1 className="ppc-text-logo">
          SHAW PPC <br />
          DESIGN
        </h1>
      </div>

      <p className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit vitae
        augue et. Et phasellus ut nam consectetur odio rhoncus tortor. Nunc
        metus gravida bibendum morbi. Lectus et ultrices habitasse consequat.
        Placerat cum pharetra, cursus sit commodo, gravida. Varius adipiscing
        vitae sed dolor quam amet, vitae. Fermentum amet fringilla nibh
        sagittis. Risus integer tincidunt sodales nec, pulvinar volutpat nunc,
        ipsum.
      </p>

      <button className="create-account-btn">
        <Link to="./Login">CREATE AN ACCOUNT</Link>
      </button>
    </div>
  );
}

export default Home;
