import React from 'react';
import { ArticleList, setURL, Header, NavBar, Footer, RegisterModal, LoginModal  } from 'instinct-frontend';

setURL('login', <Login/>);

export function Login() {
  return (
    <>
       <span className="page-container">
        <Header>
          <RegisterModal />
          <LoginModal />
        </Header>
        <NavBar />
        <main>
          <section className="page-container" data-page="home">
            <ArticleList/>
          </section>
        </main>
      </span>
      <Footer />
    </>
  )
}