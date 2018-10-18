import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <article>
                <h1>The Moon</h1>
                <p>The <strong>Moon</strong> (in Greek: σελήνη <i>Selene</i>, in Latin: <i>Luna</i>) is Earth’s only natural satellite. It is one of the largest natural satellites in the Solar System, and, among planetary satellites, the largest relative to the size of the planet it orbits (its primary). It is the second-densest satellite among those whose densities are known (after Jupiter's satellite Io).</p>

                <p>The Moon is thought to have formed approximately 4.5 billion years ago, not long after Earth. There are several hypotheses for its origin; the most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a Mars-sized body called Theia.</p>

                <h2>Orbit</h2>

                <p>The Moon is in synchronous rotation with Earth, always showing the same face with its near side marked by dark volcanic maria that fill between the bright ancient crustal highlands and the prominent impact craters. It is the second-brightest regularly visible celestial object in Earth’s sky after the Sun, as measured by illuminance on Earth’s surface.
    </p>
                <p>Although it can appear a very bright white, its surface is actually dark, with a reflectance just slightly higher than that of worn asphalt. Its prominence in the sky and its regular cycle of phases have, since ancient times, made the Moon an important cultural influence on language, calendars, art, and mythology.</p>

                <h3>Gravitational pull &amp; distance</h3>

                <p>The Moon’s gravitational influence produces the ocean tides, body tides, and the slight lengthening of the day. The Moon’s current orbital distance is about thirty times the diameter of Earth, causing it to have an apparent size in the sky almost the same as that of the Sun, with the result that the Moon covers the Sun nearly precisely in total solar eclipse. This matching of apparent visual size will not continue in the far future. The Moon’s linear distance from Earth is currently increasing at a rate of 3.82 ± 0.07 centimetres per year, but this rate is not constant.</p>

                <h2>Lunar travels</h2>

                <p>The Soviet Union’s Luna programme was the first to reach the Moon with unmanned spacecraft in 1959; the United States’ <abbr title="National Aeronautics and Space Administration">NASA</abbr> Apollo program achieved the only manned missions to date, beginning with the first manned lunar orbiting mission by Apollo 8 in 1968, and six manned lunar landings between 1969 and 1972, with the first being Apollo 11. These missions returned over 380 <abbr title="kilograms">kg</abbr> of lunar rocks, which have been used to develop a geological understanding of the Moon's origin, the formation of its internal structure, and its subsequent history. After the Apollo 17 mission in 1972, the Moon has been visited only by unmanned spacecraft.</p>

                <p class="source">Text fetched from <cite><a href="https://en.wikipedia.org/wiki/Moon">“Moon” article on Wikipedia</a></cite> on <time datetime="2016-02-23">the 23<sup>rd</sup> of February&nbsp;2016.</time></p>
            </article>
        </body>
        <style jsx>{`
           body {
              font-family: 'Georgia Pro', Georgia, Times, 'Times New Roman', serif;
           }
  
            h1, h2, h3, h4, h5, h6 {
                font-family: Avenir Next, Avenir, SegoeUI, arial, sans-serif;
                margin-top:24px;/*non scalable fallback for old browsers*/
                margin-top:1.5em;
                line-height:1.5;
                font-weight:500;
            }
            h1, .source {
                column-span:all;
            }
            p + p {
                text-indent: 1.25em;
            }
            article > p {
                max-width:36em;
            }
            article {
                max-width: 70em;
                columns: 20em;
                column-gap: 1.5em;
                margin: 0 auto;
                columns: 3;
            }
            abbr {
                text-transform: lowercase;
                font-variant: small-caps;
                line-height: 1.25;
            }
            h1 {
                font-weight:800;
                text-transform: uppercase;
                text-align: center;
                border-bottom: 1px solid #c8bc9d;
            }
            h2 {
                font-weight:600;
                font-size:1.75em;
                line-height: 1.25;
                margin-top: 1.036em;
                margin-bottom: 0.2859em;
             }
             h3 {
                 font-size: 1.314em;
                 line-height:1.29;
                 margin-top: 0.619em;
                 margin-bottom: 0.38em;
             }

            p {
                color:#3b4348;
            }
            a {
                color:#235ea7;
            }
          
        `}</style>

    </Layout>
)