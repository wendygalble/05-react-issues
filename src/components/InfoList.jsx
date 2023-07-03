const InfoList = ({ id, title, login, url }) => {
  return (
    <ul className='list-group'>
      <h1 className='list-group-item'>{title}</h1>
      <li className='list-group-item'>{url}</li>
      <li className='list-group-item'>{login}</li>
    </ul>

  )
}

export default InfoList
