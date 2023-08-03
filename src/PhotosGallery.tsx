import { Component, MouseEvent } from "react";
import { Image } from "./APIResponsesInterface";

interface PhotoGalleryProps {
  images: Image[];
}

class PhotosGallery extends Component<PhotoGalleryProps> {
  state = {
    isActive: 0,
  };

  handleThumbnail = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    if (e.target.dataset.index) {
      this.setState({
        isActive: +e.target.dataset.index,
      });
    }
    e.preventDefault();
  };

  render() {
    const { isActive } = this.state;
    const { images } = this.props;

    return (
      <>
        <div
          className="h-full"
          style={{
            backgroundImage: `url(${images[isActive].url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "start",
          }}
        ></div>
        <div className="photo_gallery flex">
          {images.map((photo, index) => (
            <img
              key={index}
              onClick={this.handleThumbnail}
              data-index={index}
              src={photo.url}
              width={100}
              height={100}
              className={isActive === index ? "border-2 border-indigo-600" : ""}
            />
          ))}
        </div>
      </>
    );
  }
}

export default PhotosGallery;
