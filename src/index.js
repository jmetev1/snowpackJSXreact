import React, { Suspense } from "../web_modules/react.js";
import { render } from "../web_modules/react-dom.js";

const Route = {
  "/": React.lazy(() => import("./home.js")),
  "/nowhere": React.lazy(() => import("./nowhere.js")),
  "*": React.lazy(() => import("./notfound.js"))
};
console.log(location.pathname, Route[location.pathname]);
const Current = Route[location.pathname] || Route["*"];

render(
  <Suspense fallback={<div>"fallback"</div>}>
    <Current />
  </Suspense>,
  document.getElementById("app")
);
