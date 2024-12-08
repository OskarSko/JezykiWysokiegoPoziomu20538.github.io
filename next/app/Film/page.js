import Link from 'next/link';
import Header from "@/components/Header";
export default function Film() {
    return (
        <div>
            <Header title="Film" />
            <p>
                Moim ulubionym filmem jest *Incepcja* w reżyserii Christophera Nolana. Uwielbiam go za niezwykle wciągającą fabułę i złożoność, która za każdym razem oferuje coś nowego do odkrycia. Film ten łączy niesamowite efekty wizualne z głębokimi refleksjami na temat snów i rzeczywistości. Jest to dzieło, które nie tylko dostarcza rozrywki, ale także inspiruje do myślenia.
            </p>
            <Link href="/">Wróć na stronę główną</Link>
        </div>
    )
}