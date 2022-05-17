/** @format */

import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";
import "./pdfviewer.css";

const Pdfviewer = () => {
	const viewer = useRef(null);

	useEffect(() => {
		WebViewer(
			{
				path: "lib",
				initialDoc: "",
			},
			viewer.current
		).then((instance) => {
			const { documentViewer } = instance.Core;
			const { Feature } = instance.UI;
			instance.UI.enableFeatures([Feature.FilePicker]);
			// you can now call WebViewer APIs here...
		});
	}, []);

	return (
		<div className="pdfviewer">
			<div className="header"></div>
			<div className="webviewer" ref={viewer}></div>
		</div>
	);
};

export default Pdfviewer;
