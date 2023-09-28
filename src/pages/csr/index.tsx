import Link from 'next/link';
import useSWR from 'swr';
import { Footer } from "@shun1121/react-component-library";
import { RiGithubLine, RiTwitterLine } from "react-icons/ri";

export const CSR = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  })
  const time = new Date()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  const currentTime = hour + "時" + minute + "分" + second + "秒"
  if (error) {
    return <div>error</div>
  }
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div className="w-full mx-auto py-8 h-screen">
        <nav className="ml-10 flex gap-2 underline">
          <Link href="/ssg">
            ssg
          </Link>
          <Link href="/ssr">
            ssr
          </Link>
        </nav>
        <div className="w-full mx-auto py-8">
          <h2 className="text-[32px] text-center py-8">CSR</h2>
          <div className="text-[32px] text-center">{currentTime}</div>
          <table className="border max-w-[800px] w-full mx-auto">
            <thead className="border">
              <tr>
                <th className="border">id</th>
                <th className="border">name</th>
                <th className="border">username</th>
                <th className="border">email</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((user: any) => (
                  <tr key={user.id}>
                    <td className="border">{user.id}</td>
                    <td className="border">{user.name}</td>
                    <td className="border">{user.username}</td>
                    <td className="border">{user.email}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer copyright="@2023 rendering comparison">
        <div className="text-center">
          <div className="mb-5"></div>
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 my-1">
              <Link href="/" className="w-[24px] h-[24px]">
                <RiGithubLine className="w-[24px] h-[24px] hover:w-[26px] hover:h-[26px]" />
              </Link>
              <Link href="/" className="w-[24px] h-[24px]">
                <RiTwitterLine className="w-[24px] h-[24px] hover:w-[26px] hover:h-[26px]" />
              </Link>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default CSR