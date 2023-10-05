import './AddFiles.styled.css';
import {ReactSVG} from 'react-svg';
import PlusSvg from '@assets/icons/plus.svg';
import FilmSvg from '@assets/icons/film.svg';
import ImageSvg from '@assets/icons/image.svg';
import FileSvg from '@assets/icons/file.svg';

export function AddFiles({setImage}: {setImage: (data: any) => void}) {
  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  return (
    <>
      <div className="main-chat-input__buttons-wrapper">
        <div className="main-chat-input__add-buttons">
          <ReactSVG src={PlusSvg} className="side-panel___svg" />
        </div>
        <div className="main-chat-input__buttons-container">
          <div className="main-chat-input__buttons-container--inner">
            <button type="button" className="main-chat-input__button">
              <ReactSVG src={FilmSvg} className="side-panel___svg" />
            </button>
            <label
              htmlFor="img"
              className="main-chat-input__button main-chat-input__button--pointer">
              <ReactSVG src={ImageSvg} className="side-panel___svg" />
            </label>
            <button type="button" className="main-chat-input__button">
              <ReactSVG src={FileSvg} className="side-panel___svg" />
            </button>
          </div>
        </div>
      </div>
      <input
        className="main-chat-input__input--none"
        type="file"
        id="img"
        name="img"
        onChange={onImageChange}
        accept=".jpg, .jpeg, .png"
      />
    </>
  );
}
