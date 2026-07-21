"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [user, setUser] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const userValue: string = e.target.value
    setUser((prev: string) => userValue)
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const passwdValue: string = e.target.value
    setPasswd((prev: string) => passwdValue)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData: FormData = new FormData(e.currentTarget)
    console.log(formData.get("user"))
    console.log(formData.get("passwd"))
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" id="user" name="user" value={user} onChange={handleUsername} required placeholder="username" />  
          </div>
          
          <div>
            <input type="password" id="passwd" name="passwd" value={passwd} onChange={handlePassword} required placeholder="password" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

      </main>
    </div>
  );
}
