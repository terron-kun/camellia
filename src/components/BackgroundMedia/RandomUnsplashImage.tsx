import { h } from 'preact';
import BackgroundImage from './BackgroundImage';

export default () => {
  const pixelRatio = window.devicePixelRatio;

  const realWidth = Math.round(window.screen.width * pixelRatio);
  const realHeight = Math.round(window.screen.height * pixelRatio);

  return (
    <BackgroundImage url={`https://source.unsplash.com/featured/${realWidth}x${realHeight}/daily/?dark`} />
  );
};
