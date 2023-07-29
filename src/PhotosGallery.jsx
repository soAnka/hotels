import { Component } from "react";

class PhotosGallery extends Component {
  state = {
    isActive: 0,
  };

  handleThumbnail = (e) => {
    e.preventDefault();
    this.setState({
      isActive: +e.target.dataset.index,
    });
  };

  render() {
    const { isActive } = this.state;
    const { images } = this.props;

    return (
      <div>
        <img src={images[isActive].url} />
        <div className="photo_gallery">
          {images.map((photo, index) => (
            <img
              key={index}
              onClick={this.handleThumbnail}
              data-index={index}
              src={photo.url}
              width={80}
              height={80}
              style={
                isActive === index
                  ? { border: "2px solid blue" }
                  : { border: "none" }
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotosGallery;
