/* Constants */
import constants from '../constants';

function FromTheCurb(): JSX.Element {
  function renderImage(imageSource: string, index: number): JSX.Element {
    return (
      <img
        key={`FromTheCurbPrint${index + 1}`}
        alt={`From the Curb print #${index + 1}`}
        src={imageSource}
      />
    );
  }

  return (
    <div className="images-container">
      {constants.images.map(renderImage)}
    </div>
  );
}

export default FromTheCurb;
