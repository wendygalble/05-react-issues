const InfoList = ({ id, title, node_id }) => {
  const handleIssueClick = () => {
    const link = 'html_url'

    const encodedLink = encodeURI(link)

    const endpoint = 'https://api.github.com/repos/facebook/react/issues'

    window.open(endpoint)
  }

  return (
    <ul className='list-group'>
      <button className='vinculo' onClick={handleIssueClick}>{title}</button>
      <li className='list-group-item'>ID: {id}</li>
      <li className='list-group-item'>Usuario:{node_id}</li>
    </ul>

  )
}

export default InfoList
