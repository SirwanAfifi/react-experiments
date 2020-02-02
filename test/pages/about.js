import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Posts from "../components/Posts";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <Posts />
  </div>
);

export default Home;
