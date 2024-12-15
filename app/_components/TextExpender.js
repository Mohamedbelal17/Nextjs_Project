'use client';

import { useState } from 'react';

export default function TextExpender({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = isExpanded ? `${children} ` : `${children.split(" ").slice(0,40).join(" ")} ... `
  return <span > {text}
  <button onClick={()=>setIsExpanded(!isExpanded)} className=' text-primary-700 capitalize border-b-2 border-primary-700  leading-5'> {isExpanded ? "Show Less" : "Show more"} </button>
        </span>;
}
