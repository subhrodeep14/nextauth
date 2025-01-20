"use client";

import { SessionProvider, signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function Home() {
  
  return <SessionProvider>
    <RealHome />
    </SessionProvider>
  ;
}
function RealHome() {
  const session=useSession();
  return (
    <div >
      {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign in</button>}
      {session.status === "authenticated" && <button onClick={() => signOut()}>Sign out</button>}
    </div>
  );
}
