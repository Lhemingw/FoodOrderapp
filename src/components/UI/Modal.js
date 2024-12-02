import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
    // Had ERROR
// Target container is not a DOM element.
//     at Object.createPortal$1 [as createPortal] (http://localhost:3001/static/js/bundle.js:33292:15)
//     at Modal (http://localhost:3001/static/js/bundle.js:1557:67)
//     at renderWithHooks (http://localhost:3001/static/js/bundle.js:21056:22)
//     at mountIndeterminateComponent (http://localhost:3001/static/js/bundle.js:25027:17)
//     at beginWork (http://localhost:3001/static/js/bundle.js:26330:20)
//     at HTMLUnknownElement.callCallback (http://localhost:3001/static/js/bundle.js:11312:18)
//     at Object.invokeGuardedCallbackDev (http://localhost:3001/static/js/bundle.js:11356:20)
//     at invokeGuardedCallback (http://localhost:3001/static/js/bundle.js:11413:35)
//     at beginWork$1 (http://localhost:3001/static/js/bundle.js:31311:11)
//     at performUnitOfWork (http://localhost:3001/static/js/bundle.js:30559:16)
// Fixed by taking off the <Fragment></Fragment
   );
};

export default Modal;