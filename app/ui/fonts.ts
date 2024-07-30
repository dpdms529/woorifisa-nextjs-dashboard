// google font 추가
import { Inter, Lusitana } from "next/font/google";

// 외부에서 import 하여 사용할 수 있도록 작성
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ weight: ["400", "700"], subsets: ["latin"] });
