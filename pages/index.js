import Head from 'next/head'

export default function HomeStatic() {
  return (
    <div className='container'>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Jason Cote is a Front-End Developer working from Minnesota, USA" />
        <title>Jason Cote - Front-end Developer</title>
      </Head>
      <main>
        <header>
          <h1>Hi! Jason Cote here.</h1>
          <span className="wave-emoji">&#128075;</span>
        </header>

        <p>I'm a front-end developer</p>
        <p className="small-text">(and other stuff, but that's what this site is about)</p>
      </main>

      <style jsx>{`

        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          min-height: 100vh;
        }
        header {
          display: flex;
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
          font-size: 2em;
          text-align: center;
        }
  
        @media  screen and (min-width: 600px) {
          header {
            flex-direction: row-reverse;
            text-align: left;
          }
        }
      
        p {
          font-size: 1.4em;
          margin: .5em 0;
        }
  
        .wave-emoji {
          font-size: 100px;
          height: 140px;
          margin-right: 20px;
        }
      
        .small-text {
          font-size: .8em;
        }
    
    `}
      </style>
      
      <style jsx global>{`
        body {
          font-family: Helvetica, Arial, sans-serif;
          background: radial-gradient(#626262, rgb(47, 47, 47));
          font-size: 16px;
        }

       `}</style>

    </div>

  );
}
