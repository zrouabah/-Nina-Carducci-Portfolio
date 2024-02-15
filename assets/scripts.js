// Init Lightgallery
const lgElement = document.getElementById('lightgallery')
if (lgElement !== null) {
  lightGallery(lgElement, {
    // plugins: [lgZoom, lgThumbnail, lgShare, lgAutoplay, lgComment],
    licenseKey: '0000-0000-000-0000',
    speed: 500,
    // allowMediaOverlap: true,
    download: false,
    mobileSettings: {
      controls: false,
      showCloseIcon: false,
      download: false
    }
  })
}
// Init nav_Gallery
document.addEventListener('DOMContentLoaded', () => {
    const galButtons = document.querySelectorAll('#gallery button');
    const galPictures = document.querySelectorAll('#gallery a');
    const tousButton = document.getElementById('tousButton');
    let selectedButton = tousButton;

    galButtons.forEach((button) => {
        button.addEventListener('mouseup', () => {
            const filter = button.getAttribute('data-filter');

            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }

            button.classList.add('selected');
            selectedButton = button;

            galPictures.forEach((picture) => {
                const pictAttr = picture.getAttribute('data-tag');
                if (filter === 'tous' || pictAttr === filter) {
                    picture.style.display = 'block';
                } else {
                    picture.style.display = 'none';
                }
            });
        });
    });
});