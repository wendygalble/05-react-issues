const InfoList = ({ id, title, url }) => {
  const handleIssueClick = () => {
    const vinculo = 'html_url'
  }

  return (
    <ul className='list-group'>
      <button className='vinculo' onClick={handleIssueClick}>{title}</button>
      <li className='list-group-item'>ID: {id}</li>
      <li className='list-group-item'>{url}</li>
    </ul>

  )
}

export default InfoList
