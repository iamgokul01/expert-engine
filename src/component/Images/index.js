import './index.css'

const Images = props => {
  const {activeImgData, selectImg} = props

  const imgSelected = () => selectImg(activeImgData.id)

  return (
    <li className="image-container">
      <button type="button" className="thumbnail-container">
        <img
          src={activeImgData.thumbnailUrl}
          className="images-list"
          alt="thumbnail"
          onClick={imgSelected}
        />
      </button>
    </li>
  )
}

export default Images
