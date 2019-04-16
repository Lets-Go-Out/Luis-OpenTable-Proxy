import React from "react";
import $ from "jquery";
import Gallery from "./Gallery";
import "../../public/style.css";

///
class PhotoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id2 = window.location.href.slice(34, -1);
    return (
      <div>
        <Gallery id={id2}/>
      </div>
    );
  }
}

export default PhotoApp;
