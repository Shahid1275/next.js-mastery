"use client"
import { useRouter } from "next/navigation";
export default function page2() {

    const router = useRouter();
  return (
    <div>
        <p>Welcome to page 2 </p>
        <p>YOU ARE on PAGE 2</p>
        <p onClick={() => router.back()}>Go back to page 1</p>
    </div>
  )
}
