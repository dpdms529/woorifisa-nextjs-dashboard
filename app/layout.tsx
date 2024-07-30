// 전역 css 적용
import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* body 태그에 inter 폰트 적용 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
