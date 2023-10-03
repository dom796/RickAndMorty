const React = require('react');
const Layout = require('./Layout.jsx');

function Home({ login }) {
  return (
    <Layout login={login}>
      <h1 className='titleHeader'>Список колод</h1>
      <div className="deck">
        Test
      </div>
    </Layout>
  );
}

module.exports = Home;
