import { useQuery } from "@tanstack/react-query"

const fetchApi = async () => {
  const result = await fetch('http://localhost:3001/api/hello')
  console.log('result: ', result)

  return result
}
const Page_Middle = () => {
  const {data} = useQuery(['test'], () => fetchApi())
  console.log('data: ', data)
  

  return (
    <div>미들웨어 체크 페이지</div>
  )
}

export default Page_Middle