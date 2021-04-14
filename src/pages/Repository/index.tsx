import { useRouteMatch } from 'react-router-dom'

interface RespositoryParam {
  repository: string
}

const Repository = () => {
  const { params } = useRouteMatch<RespositoryParam>()
  return (
    <div>
      <h1>Repository: {`${params.repository}`}</h1>
    </div>
  )
}

export default Repository
