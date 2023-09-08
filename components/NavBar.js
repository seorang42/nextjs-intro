import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link legacyBehavior href="/">
        <span className={router.pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link legacyBehavior href="/about">
        <span className={router.pathname === "/about" ? "active" : ""}>
          About
        </span>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        ${Link} {
          text-decoration: none;
        }
        span {
          cursor: pointer;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
