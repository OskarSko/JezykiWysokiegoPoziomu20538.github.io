import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/Kontakt">Kontakt</Link>
                </li>
                <li>
                    <Link href="/Film">Film</Link>
                </li>
                <li>
                    <Link href="/Zainteresowania">Zainteresowania</Link>
                </li>
            </ul>
        </nav>
    );
}
