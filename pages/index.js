import Head from "next/head";
import SideNavbar from "../components/SideNavbar";
import Header from "../components/Header";
import Message from '../pages/message'



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Responsive Side-Navbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <SideNavbar />
      <Header/>
      <Message/>
    </div>
  );
}
