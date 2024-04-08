const container = document.querySelector('.about__video');
const link = container.querySelector('.about__video-link');
const button = container.querySelector('.about__button');
container.classList.add('about__video--enabled');

const createVideo = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('frameborder', '0');
  iframe.classList.add('about__video-player');

  container.append(iframe);
};

const initVideoPlayer = () => {
  if (container && link && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      link.style.display = 'none';
      button.style.display = 'none';
      createVideo();
    });
  }
};

export {initVideoPlayer};
