import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navMap = links.map((link, index) => {
    return <a href={"#"+link} key={index}>{link}</a>
  })

  return <nav>{navMap}</nav>;
}

export default NavBar;
