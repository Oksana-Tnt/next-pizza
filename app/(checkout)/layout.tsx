import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { Container, Header } from "@/shared/components/shared";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Next Pizza | Checkout",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        <Header
          hasSearch={false}
          hasCart={false}
          className="border-b-gray-200"
        />
        {children}
      </Container>
    </main>
  );
}
