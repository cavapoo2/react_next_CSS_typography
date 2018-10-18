import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/unstyled">
      <a style={linkStyle}>Unstyled</a>
    </Link>
    <Link href="/colorsTextStyle">
      <a style={linkStyle}>ColorsTextStyle</a>
    </Link>
    <Link href="/shadow">
      <a style={linkStyle}>Shadow</a>
    </Link>
   <Link href="/impressed">
      <a style={linkStyle}>Impressed</a>
    </Link>
  <Link href="/shadow2">
      <a style={linkStyle}>Shadow2</a>
    </Link>
  <Link href="/shadow3">
      <a style={linkStyle}>Shadow3</a>
    </Link>







  </div>
)

export default Header