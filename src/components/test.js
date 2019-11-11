<nav className={headerStyles.mainNav}>
<ul className={headerStyles.navList}>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home </Link></li>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/blog">Blog </Link></li>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/about">About </Link></li>
    <li> <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/volunteer">Volunteer </Link></li>
</ul>
</nav>

{data.allMarkdownRemark.edges.map((edge, i) => {
    return (
      <div key={i}>
        <h3>{edge.node.frontmatter.titleh}</h3>
        <p>{edge.node.frontmatter.introh}</p>
      </div>
    )
  })}