import Container from "@/components/Container";

export default function WorkLayout({children}: {children: React.ReactNode}) {
    return (
        <Container className="mt-14 sm:mt-16 text-black">
            {children}
        </Container>
    );
}