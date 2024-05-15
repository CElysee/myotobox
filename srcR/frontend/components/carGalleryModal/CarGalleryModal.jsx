import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ImageGallery } from "react-image-grid-gallery";

function CarGalleryModal({gallery, modalTitle}) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="_5kaapu"
              style={{ borderRadius: "50%" }}
            >
              <span className="i3tjjh1 atm_mk_h2mmj6 dir dir-ltr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "#000",
                    height: "16px",
                    width: "16px",
                    stroke: "currentcolor",
                    strokeWidth: "4",
                    overflow: "visible",
                  }}
                >
                  <path
                    fill="none"
                    d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                  ></path>
                </svg>
              </span>
            </button>
            <h5 className="modal-title" id="exampleModalLabel">
              {modalTitle}
            </h5>
            <div className="_1jdtwz4">
              <div className="_5kaapu">
                <span className="_14tkmhr">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "16px",
                      width: "16px",
                      stroke: "currentcolor",
                      strokeWidth: "2",
                      overflow: "visible",
                    }}
                  >
                    <path
                      d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                      fill="none"
                    ></path>
                  </svg>
                </span>
                Share
              </div>
              <div aria-hidden="true" className="_5kaapu">
                <span className="_14tkmhr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "16px",
                      width: "16px",
                      stroke: "currentcolor",
                      strokeWidth: "2",
                      overflow: "visible",
                    }}
                  >
                    <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                  </svg>
                </span>
                Save
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="container">
              <ImageGallery
                imagesInfoArray={gallery}
                columnWidth={600}
                gapSize={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarGalleryModal;
