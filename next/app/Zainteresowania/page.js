import Link from 'next/link';
import Header from "@/components/Header";
export default function Zainteresowania() {
    return (
        <div>
            <Header title="Zainteresowania" />
            <p>
                Interesuję się programowaniem, szczególnie tworzeniem aplikacji internetowych. Lubię także gry komputerowe, które inspirują mnie do myślenia o kreatywnych rozwiązaniach i mechanikach. Często spędzam czas na czytaniu o najnowszych osiągnięciach w technologii i sztucznej inteligencji. Oprócz tego uwielbiam muzykę – słuchanie jej pomaga mi się odprężyć i naładować energię do dalszej pracy.
            </p>
        <Link href="/">Wróć na stronę główną</Link>
        </div>
    )
}