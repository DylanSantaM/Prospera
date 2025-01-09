document.addEventListener("mousemove", function(event) {
    const modelViewer = document.querySelector("model-viewer.coin");
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Rotate the model based on mouse position
    const rotateX = (mouseY / window.innerHeight) * 360;
    const rotateY = (mouseX / window.innerWidth) * 360;

    modelViewer.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
