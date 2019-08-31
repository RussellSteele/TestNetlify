// Prevent scrolling when touching the canvas
	document.body.addEventListener("touchstart", function (e) {
			       if (e.target == drawingCanvas[mode]) {
			       e.preventDefault();
			       }
			       }, false);
	document.body.addEventListener("touchend", function (e) {
			       if (e.target == drawingCanvas[mode]) {
			       e.preventDefault();
			       }
			       }, false);
	document.body.addEventListener("touchmove", function (e) {
			       if (e.target == drawingCanvas[mode]) {
			       e.preventDefault();
			       }
			       }, false);

