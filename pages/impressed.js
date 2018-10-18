import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>

        <body>
            <h1><span className="impressed">Impressed</span> <span className="embossed">Embossed</span></h1>
        </body>

    <style jsx>{`
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: .9375em;
      line-height: 1.4;
    }

    h1 {
      font-size: 4em;
      color: #666;
      line-height: 2;
    }
    .impressed,
    .embossed,
    .amp {
      padding: .25em;
      display: inline-block;
      vertical-align: top;
    }

    .impressed {
      background-color: #6990E1;
      color: #31446B;
      text-shadow: 0 -1px 1px #B3D6F9, 0 1px 0 #243350;
    }

    .embossed {
      background-color: #3C5486;
      color: #92B1EF;
      text-shadow: 0 -1px 0 #243350, 0 1px 0 #DEF2FE;
    }
    `}
     </style>

    </Layout>
)