import React from "react";
import GalleryModal from "./GalleryModal";
import { resImages } from "./fetch.js";
import "../../public/style.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.fetchHandler = this.fetchHandler.bind(this);
    this.viewOpen = this.viewOpen.bind(this);
    this.state = {
      id: "1",
      currentIndex: null,
      showModal: false,
      imgUrls: []
    };
  }

  nextRestaurant() {
    resImages(id.toString(), this.fetchHandler);
  }
  fetchHandler(rest_id, restimages) {
    let obj = Object.assign({}, this.state);
    obj.id = rest_id;
    obj.imgUrls = restimages.images_array;
    this.setState(obj);
  }
  componentDidMount() {
    resImages(this.state.id, this.fetchHandler);
  }

  openModal(index) {
    this.setState({ currentIndex: index });
  }

  findNext() {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  closeModal() {
    this.setState({ currentIndex: null, showModal: false });
  }

  findPrev() {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex - 1 }));
  }

  renderImageContent(src, index) {
    return (
      <div onClick={event => this.openModal(index)} key={index}>
        <img
          alt={src.description}
          src={src.image_url}
          key={src._id}
          width="280"
          height="180"
        />
      </div>
    );
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  viewOpen(){
    this.setState({currentIndex: 0})
  }


  render() {
    return (
      <div>
        <h2>Photos</h2><a href="#" className="view" onClick={this.viewOpen}>View more</a>
        <div className="gallery-grid">
          {this.state.imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={
            this.state.currentIndex + 1 &&
            this.state.currentIndex + 1 < this.state.imgUrls.length
          }
          src={this.state.imgUrls[this.state.currentIndex]}
          showModal={this.state.showModal}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default Gallery;
