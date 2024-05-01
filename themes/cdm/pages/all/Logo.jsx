import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/cdm.svg" alt="cdm" width="85" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
