"use client";

import { useServerInsertedHTML } from "next/navigation";

const STORAGE_KEY = "ariana-theme";

export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      key="ariana-theme-script"
      dangerouslySetInnerHTML={{
        __html: `try{var t=localStorage.getItem('${STORAGE_KEY}')||'dark';document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}`,
      }}
    />
  ));
  return null;
}
