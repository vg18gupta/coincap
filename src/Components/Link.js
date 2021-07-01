import React, { memo } from "react";

function Link({ children, to, ...props }) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

export default memo(Link);
