export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* Logo Apple */}
          <li><a href="#"> <img src="/assets/apple.svg" alt="" /></a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">AirPods</a></li>
          <li><a href="#">TV & Home</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Support</a></li>
          {/* Loupe de Recherche  */}
          <li><a href="#"> <img src="/assets/search.svg" alt="" /></a></li>
          {/* Logo Market  */}
          <li><a href="#"> <img src="/assets/shop.svg" alt="" /></a></li>
        </ul>
      </nav>
      <div>
        <h1>
          HomePod mini
        </h1>
        <span>
          <a className="btn" href="#">Buy</a>
        </span>
      </div>
    </header>
  )
}