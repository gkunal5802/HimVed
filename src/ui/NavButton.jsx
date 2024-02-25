/*eslint-disable*/

import Button from "./Button";
import NavLink from "./NavLink";

function NavButton({ children, href, style, variation, size }) {
  return (
    <NavLink href={href} style={style}>
      <Button size={size} variation={variation}>
        {children}
      </Button>
    </NavLink>
  );
}

export default NavButton;
