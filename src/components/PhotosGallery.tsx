import { Component, MouseEvent } from "react";
import { Image } from "../typesAndInterfaces/APIResponsesInterface";

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
          className="h-[30rem] w-full rounded-lg border-2 border-white shadow-2xl  shadow-slate-500"
          style={{
            backgroundImage: `url(${images[isActive].url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "start",
          }}
        ></div>
        <div className="photo_gallery mt-4 flex">
          {images.map((photo, index) => (
            <img
              key={index}
              onClick={this.handleThumbnail}
              data-index={index}
              src={photo.url}
              width={100}
              height={100}
              className={
                isActive === index
                  ? "m-1 scale-125 rounded-2xl border-2 border-white  duration-[500ms] ease-in-out"
                  : "m-1 cursor-pointer rounded-2xl"
              }
            />
          ))}
        </div>
      </>
    );
  }
}

export default PhotosGallery;
