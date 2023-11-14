import Link from "next/link";

export function NavBar() {
    return(
      <main>
        <ul className="flex justify-between bg-[#7752FE] text-white h-16 px-24">
            <Link href="/search" className="mt-auto mb-auto text-xl">
              <li>Search</li>
            </Link>
            <Link href="/favorites" className="mt-auto mb-auto text-xl">
              <li>Favorites</li>
            </Link>
            <Link href="profile" className="mt-auto mb-auto text-xl">
               <li>Profile</li>
            </Link>
        </ul>
      </main>
    );
}