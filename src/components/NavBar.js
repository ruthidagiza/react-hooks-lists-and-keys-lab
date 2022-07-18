import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const myLink=links.map((link)=>
  <a href={ '#' + link} key={link}>{link}</a>
  )


  return <nav>{/* display an <a> tag for each link here */}
  {myLink}
  </nav>;
}

export default NavBar;
