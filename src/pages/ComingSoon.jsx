import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export function ComingSoon() {
  return (
    <>
      <Header />
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-busybee-50/50 to-white -z-10"></div>
        <Container>
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Coming Soon
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}