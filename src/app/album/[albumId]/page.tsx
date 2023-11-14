import { Header } from "@/components/Header";

export default function Page({ params }: { params: { albumId: string } }) {
    return (
        <main>
            <Header />
            <h1>Testando: {params.albumId}</h1>
        </main>
    )
  }
  