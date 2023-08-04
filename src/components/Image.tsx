import dog from "../images/dog.jpg";
import flowers from "../images/flowers.jpg";
import ReactPlayer from "react-player";
import video1 from "../../public/images/video1.mp4";

import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const videos: string[] = ["./images/video1.mp4", "./images/video2.mp4"];
const ImageComponent = () => {
  const [SelectedIndex, SetSelectedIndex] = useState(0);
  return (
    <>
      <TransformWrapper initialScale={1}>
        {({ resetTransform, ...rest }) => (
          <>
            <div className="tools">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    if (SelectedIndex > 0) SetSelectedIndex(SelectedIndex - 1);
                  }}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    if (SelectedIndex < videos.length - 1)
                      SetSelectedIndex(SelectedIndex + 1);
                  }}
                >
                  Next
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => resetTransform()}
                >
                  Reset
                </button>
              </div>
            </div>
            <TransformComponent>
              <ReactPlayer controls={true} url={videos[SelectedIndex]} />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </>
  );
};

export default ImageComponent;
