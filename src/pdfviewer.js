import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";
import "./Pdfviewer.css";

const Pdfviewer = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc: "https://pdftron.s3.amazonaws.com/downloads/pl/presentation.pptx",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="pdfviewer">
      <div className="header">PDF VIEWER AND SIGNATURE FOR STINGER SIGN</div>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Pdfviewer;
