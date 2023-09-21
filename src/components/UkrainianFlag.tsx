import { SvgIcon } from "@mui/material";
import { SVGProps } from "react";

export const UkrainianFlag = (props: SVGProps<SVGSVGElement>) => (
  <SvgIcon sx={{ paddingX: "1rem" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 55.2 38.4"
      {...props}
    >
      <path
        d="M3.03 0h49.13c1.67 0 3.03 1.36 3.03 3.03v32.33a3.04 3.04 0 0 1-3.03 3.03H3.03A3.026 3.026 0 0 1 0 35.37V3.03A3.04 3.04 0 0 1 3.03 0z"
        style={{
          fill: "#005bbb",
        }}
      />
      <path
        d="M0 19.2h55.2v16.17a3.04 3.04 0 0 1-3.03 3.03H3.03A3.04 3.04 0 0 1 0 35.37V19.2z"
        style={{
          fill: "#ffd500",
        }}
      />
    </svg>
  </SvgIcon>
);
