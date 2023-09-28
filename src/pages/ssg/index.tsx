import Link from "next/link";
import { Footer } from "@shun1121/react-component-library";
import { RiGithubLine, RiTwitterLine } from "react-icons/ri";

export const SSG = ({ usersData, currentTime }: any) => {
  return (
    <div>
      <div className="w-full mx-auto py-8 h-screen">
        <nav className="ml-10 flex gap-2 underline">
          <Link href="/csr">csr</Link>
          <Link href="/ssr">ssr</Link>
        </nav>
        <h2 className="text-[32px] text-center pt-[64px] pb-8">SSG</h2>
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
            {usersData.map((user: any) => (
              <tr key={user.id}>
                <td className="border">{user.id}</td>
                <td className="border">{user.name}</td>
                <td className="border">{user.username}</td>
                <td className="border">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const usersData = users.map((user: any) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  }));
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const currentTime = hour + "時" + minute + "分" + second + "秒";

  return {
    props: {
      usersData,
      currentTime,
    },
  };
};

export default SSG;
