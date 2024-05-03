import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Please wait, the page is loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
}
