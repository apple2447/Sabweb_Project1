"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {


  return (

    <div className="auth-page">
      <form className="auth-card">  
        <h1>Update Noter📝</h1>
        <h1>อัปเดตเมื่อวันที่ 20/8/2569</h1>
        <h1>----------------------------------------------------</h1>
        <p>Update : Fix Text and all</p>
        <p>Version : 12</p>
        <h1>----------------------------------------------------</h1>
        <p>:: ปรับปรุง Readme</p>
        <p>:: ปรับ Font เพิ่มเติม</p>
        <p>:: ปรับปรุง Readme</p>
        <p>:: และอื่นๆ ที่จำไม่ได้เหมือนกัน</p>
        <h1>---------------------------------------------------</h1>
        <h1>ลิงค์/เว็ปไซต์เพิ่มเติม</h1>
        <p>
          Github(Sabweb_Project) <Link href="https://github.com/apple2447/Sabweb_Project1">Link here</Link>
        </p>
        <p>
          Github(My Profile) <Link href="https://github.com/apple2447">Github</Link>
        </p>
        <p>
          Website(Sabweb_Project) <Link href="https://sabweb-project1.vercel.app/">Link here</Link>
        </p>
        <p>or <Link href="https://google.com">google.com</Link></p>
        <h1>----------------------------------------------------</h1>
      </form>
    </div>
  );
}
