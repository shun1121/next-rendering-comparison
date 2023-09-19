import useSWR from 'swr';

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
  console.log(currentTime)
  if (error) {
    return <div>error</div>
  }
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <div>
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
  )
}

export default CSR