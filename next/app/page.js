import Link from 'next/link';
import Header from "@/components/Header";
import Menu from "@/components/Menu";
export default function Home() {
    return (
        <main>
            <Header title="O mnie" />
            <p>
            Cześć! Mam na imię Oskar i jestem pasjonatem technologii oraz programowania. Od najmłodszych lat interesowałem się komputerami i ich działaniem, co zaprowadziło mnie na ścieżkę tworzenia aplikacji. Obecnie uczę się Reacta, aby rozwijać swoje umiejętności w budowie nowoczesnych interfejsów. W wolnym czasie lubię poznawać nowe narzędzia i eksperymentować z różnymi technologiami.
            </p>
            <div>
              <Menu />
            </div>
        </main>
    );
}
