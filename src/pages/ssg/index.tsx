export const SSG = ({ usersData, currentTime }: any) => {
  return (
    <div className="w-full mx-auto py-8">
      <h2 className="text-[32px] text-center py-8">SSG</h2>
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
            usersData.map((user: any) => (
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
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  const usersData = users.map((user: any) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  }))
  const time = new Date()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  const currentTime = hour + "時" + minute + "分" + second + "秒"

  return {
    props: {
      usersData,
      currentTime
    }
  }
}

export default SSG