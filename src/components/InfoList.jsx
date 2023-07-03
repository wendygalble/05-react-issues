const InfoList = ({ id, title, user, html_url }) => {
  return (
    <ul className='list-group'>
      <a href={html_url}>{title}</a>
      <li className='list-group-item'>ID: {id}</li>
      <li className='list-group-item'>Usuario: {user.login}</li>
    </ul>

  )
}

export default InfoList
