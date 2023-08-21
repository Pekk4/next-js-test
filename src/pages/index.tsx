import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const { query } = useRouter();
  const pots = api.posts.getAllPosts.useQuery();

  console.log(pots.data)

  return (
    <>
      <p>{pots.data}</p>
      
    </>
  );
}
