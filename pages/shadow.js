import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
     <body>
    <h1>90&apos;s style text shadow</h1>
    </body>
  <style jsx>{`
    body {
        padding: 2em;
    }
    h1 {
        font-size:3em;
        text-shadow: -0.5em .2em .2em #888;
    }
   `}</style>
  </Layout>
)
 