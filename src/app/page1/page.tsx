"use client"
import Link from "next/link";
import { useRouter} from "next/navigation";
export default function page1() {
    const router = useRouter();
    const goToPage2 = () => {
        router.push("/page2")
    }
  return (
    <div>
        <h1>WELCOME to Page 1</h1>
        <p onClick={goToPage2}>    Go to Page 2</p>
    </div>
  )
}

