export function NavBar() {
    return(
      <main>
        <ul className="flex justify-between bg-[#7752FE] text-white h-16 px-24">
            <li className="mt-auto mb-auto text-xl">Search</li>
            <li className="mt-auto mb-auto text-xl">Favorites</li>
            <li className="mt-auto mb-auto text-xl">Profile</li>
        </ul>
      </main>
    );
}