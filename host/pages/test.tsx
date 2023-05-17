import dynamic from "next/dynamic"

const Contents = dynamic(() => import('remote/contents').then((mod) =>mod.Contents), {ssr: true})

const Page_Test = () => {
  return (
    <div>
      <h1>
        test 페이지
      </h1>
      <Contents />
    </div>
  )
}

export default Page_Test