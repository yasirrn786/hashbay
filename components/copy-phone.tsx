'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
export function CopyPhone(){const [status,setStatus]=useState('');return <div className="copy-phone"><button type="button" className="copy-control" onClick={async()=>{try{await navigator.clipboard.writeText('+917899347270');setStatus('Phone number copied');}catch{setStatus('Copy unavailable. Select the phone number above to copy it.');}}} aria-label="Copy phone number" title="Copy phone number">{status==='Phone number copied'?<Check size={19}/>:<Copy size={19}/>}</button><span role="status">{status}</span></div>;}
