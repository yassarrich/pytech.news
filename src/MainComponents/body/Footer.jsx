import React from "react"
import {
  AiFillGithub
} from "react-icons/ai";

export default function Footer() {
    return(
      <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-center text-white dark:bg-neutral-600 ">

      <div>
        <div className="mb-6 pt-9 text-3xl flex justify-center gap-16 py-3">
        <a href='https://github.com/yassarrich'>
            <AiFillGithub />
          </a>
        </div>
      </div>
    
      <div
        className="bg-white p-4 text-right text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">    
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href=""
          > Yassar Rich</a
        >
      </div>
  
    </footer>

)
}