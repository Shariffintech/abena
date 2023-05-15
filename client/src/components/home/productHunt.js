import React from "react";
import { Button, Image } from "react-bulma-components";

export default function ProductHunt() {
  return (
    <>
      <a
        href="https://www.producthunt.com/posts/abena-dms?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-abena&#0045;dms"
        target="_blank"
      >
        <Image
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=356757&theme=light"
          alt="Abena&#0032;DMS - Education&#0032;made&#0032;to&#0032;empower&#0032;teachers&#0032;by&#0032;supporting&#0032;students&#0046; | Product Hunt"
          style={{width: 250, height: 54}}
          width="250"
          height="54"
          className="product-hunt"
        />
      </a>
    </>
  );
}
