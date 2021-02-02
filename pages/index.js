import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import { getAllPosts } from '../scripts/blog/getAllPosts';

const SubTitle = styled.h2`
  background-color: #f44336;
  color: whitesmoke;
  display: inline-block;
  padding: 8px;
`;

const Description = styled.p`
  background-color: dimgrey;
  color: whitesmoke;
  display: inline-block;
  padding: 6px;
`;

export default function Home(props) {
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url} alt="" />
        <Link href="#">
          <a href="">
            <h1>{props.name} Blog</h1>
          </a>
        </Link>
      </header>

      <section className="postsContainer">
        <SubTitle>Postagens</SubTitle>
        {props.posts.map((post) => (
          <article className="postContainer__post" key={post.metadata.title}>
            <h2>
              <a href="#">{post.metadata.title}</a>
            </h2>
            <p>{post.metadata.excerpt}</p>
          </article>
        ))}
      </section>

      <section className="postsContainer">
        <SubTitle>Repositórios favoritos</SubTitle>
        {props.repos.map((project) => {
          return (
            <article className="postCotainer__post">
              <a href="/">{project.repo}</a>
              <p>{project.description}</p>
              <Description>{project.language}</Description>
            </article>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  const githubResponse = await fetch(
    'https://api.github.com/users/isaiasnhantumbo'
  ).then((res) => res.json());

  const repos = await fetch(
    'https://gh-pinned-repos.now.sh/?username=isaiasnhantumbo'
  ).then((res) => res.json());

  return {
    props: {
      posts,
      avatar_url: githubResponse.avatar_url,
      name: 'Isaias Nhantumbo Junior',
      repos,
    },
  };
}
