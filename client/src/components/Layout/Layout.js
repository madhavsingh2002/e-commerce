import React from 'react'
import Header from '../Layout/Header.js'
// import Footer from '../Layout/Footer.js'
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import Footer from '../Footer/Footer.jsx';
function Layout({children, title, description, keywords, author}) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header/>
      <main style={{minHeight:'80vh'}}>
        <Toaster/>
      {children}
      </main>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};
export default Layout
