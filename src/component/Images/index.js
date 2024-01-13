import './index.css'

const Images = props => {
  const {data} = props
  const {thumbnailUrl} = data
  return (
    <li className="image-container">
      <img src={thumbnailUrl} className="images-list" alt="" />
    </li>
  )
}

export default Images
