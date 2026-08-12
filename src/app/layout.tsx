import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "프록시마 | Proxima1527",
  description:
    "프록시마가 만들고 운영하는 모바일, 데스크톱, 웹 프로젝트를 한곳에서 소개합니다.",
  keywords: [
    "프록시마",
    "Proxima1527",
    "소프트웨어 스튜디오",
    "프로젝트",
    "찐로맛",
    "프록시마셀",
    "HOP Automate",
    "언제더라",
  ],
  openGraph: {
    title: "프록시마 | Proxima1527",
    description: "생활과 일의 작은 불편을 줄이는 프록시마의 프로젝트를 소개합니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "프록시마 | Proxima1527",
    description: "생활과 일의 작은 불편을 줄이는 프록시마의 프로젝트를 소개합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
