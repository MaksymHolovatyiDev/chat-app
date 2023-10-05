import './ImagePreview.css';
import CloseIcon from '@mui/icons-material/Close';

export function ImagePreview({image, setImage}: any) {
  const onButtonClick = () => {
    setImage(null);
  };

  return (
    image && (
      <div className="image-preview__container">
        <div className="image-preview__wrapper">
          <button
            type="button"
            onClick={onButtonClick}
            className="image-preview__button">
            <CloseIcon />
          </button>
          <img
            src={URL.createObjectURL(image)}
            alt="Preview image"
            className="image-preview__image"
          />
        </div>
      </div>
    )
  );
}
