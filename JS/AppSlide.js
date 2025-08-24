
// dots etc =====================================


function showImage(appIndex) {
  const app = appsData[appIndex];
  const imgElement = document.getElementById(`preview-${appIndex}`);
  imgElement.src = app.imgs[currentIndexes[appIndex]];

  // ✅ Update dots
  app.imgs.forEach((_, i) => {
    const dot = document.getElementById(`dot-${appIndex}-${i}`);
    if (i === currentIndexes[appIndex]) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function goToImage(appIndex, imgIndex) {
  currentIndexes[appIndex] = imgIndex;
  showImage(appIndex);
}

