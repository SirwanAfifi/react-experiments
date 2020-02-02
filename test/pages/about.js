import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Posts from "../components/Posts";
import "../styles/style.scss";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <h1 className="title">HH</h1>
    <Posts />
  </div>
);

export default Home;
