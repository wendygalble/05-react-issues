const InfoList = ({ id, title, user, html_url, labels }) => {
  return (
    <ul className='list-group'>
      <a className='vinculo' href={html_url}>{title}</a>
      <li className='list-group-item'>ID: {id}</li>
      <li className='list-group-item'>Usuario: {user.login}</li>
      <li className='list-group-item'>Labels: {labels.map((label, index) => (<p key={index}>{label.name}</p>))}</li>
    </ul>

  )
}

export default InfoList
