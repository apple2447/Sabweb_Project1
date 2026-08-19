"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {


  return (

    <div className="auth-page">
      <form className="auth-card">  
        <p>Update Note📝</p>
        <p>----------อัปเดตเมื่อวันที่ 19/8/2569-----------</p>
        <p>----------------------------------------------------</p>
        <p>Update : Database Pic</p>
        <p>Versions Sabweb_Project : v.11</p>
        <p>----------------------------------------------------</p>
        <p>เพิ่ม Database.. <Link href="https://cloudinary.com/">cloudinary</Link></p>
        <p>เพิ่ม Blog</p>
        <p>เพิ่มเติมอื่นๆ..</p>
        <p>ปรับปรุงเพิ่มเติม..</p>
        <p>---------------------------------------------------</p>
        <>ลิงค์/เว็ปไซต์เพิ่มเติม</>
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
        <p>----------------------------------------------------</p>
      </form>
    </div>
  );
}
