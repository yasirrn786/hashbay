import { ImageResponse } from 'next/og';

export const alt = 'Hashbay Technology. Technology that keeps business moving.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '65px 80px', background: '#f1f3f4', color: '#202326', fontFamily: 'sans-serif' }}><div style={{ display: 'flex', fontSize: 30, fontWeight: 700 }}>HASHBAY TECHNOLOGY<span style={{ width: 20, height: 20, borderTop: '6px solid #1758dd', borderRight: '6px solid #1758dd', marginLeft: 12 }} /></div><div style={{ display: 'flex', fontSize: 76, lineHeight: 1.06, marginTop: 70, maxWidth: 930 }}>Technology that keeps business moving.</div><div style={{ display: 'flex', fontSize: 23, color: '#1758dd', marginTop: 'auto', borderTop: '1px solid #d3d8dc', paddingTop: 25 }}>Infrastructure. Cloud. Security. Software. People. Support.</div></div>, size);
}
