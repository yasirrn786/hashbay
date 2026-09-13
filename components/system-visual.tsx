import type { CSSProperties } from 'react';

const paths = [
  'M0 630L310 475L560 600L920 420L1350 635L1600 510',
  'M0 340L280 480L630 305L920 450L1230 295L1600 480',
  'M180 900L180 660L630 435L630 155L940 0',
  'M450 900L450 680L920 445L920 155L1230 0',
  'M790 900L790 665L1200 460L1200 160L1500 10',
  'M0 790L380 600L730 775L1300 490L1600 640',
  'M520 0L520 190L920 390L1310 195L1600 340',
  'M1600 180L1420 270L1420 640L1120 790L800 630L0 230',
];

export function SystemVisual({ variant = 'hero' }: { variant?: 'hero' | 'compact' | 'cta' }) {
  return <div className={`system-visual system-${variant}`} aria-hidden="true">
    <svg viewBox="0 0 1600 900" fill="none" preserveAspectRatio="xMidYMid slice">
      <g className="topology-grid" stroke="currentColor" strokeWidth=".65">{Array.from({ length: 25 }, (_, i) => <g key={i}><path d={`M${i * 90 - 900} 0l1800 900`} /><path d={`M${i * 90} 0l-1800 900`} /></g>)}</g>
      <g className="routing-lines" strokeWidth="1.1">{paths.map((d, i) => <path key={i} d={d} />)}</g>
      <g className="data-pulses" strokeWidth="2.4">{paths.map((d, i) => <path key={i} d={d} pathLength="100" style={{ '--delay': `${-i * 1.7}s` } as CSSProperties} />)}</g>
      <g className="gateway" transform="translate(920 380)">{[0, 1, 2, 3].map((i) => <g key={i} className="gateway-layer" style={{ '--level': i } as CSSProperties} transform={`translate(0 ${i * 33})`}><path d="M0-140L280 0 0 140-280 0Z" /><path d="M0-115L230 0 0 115-230 0Z" opacity=".35" /></g>)}<path className="gateway-axis" d="M-280 0V99M280 0V99M0 140V239M0-140V-41" /><path className="gateway-core" d="M0-32L64 0 0 32-64 0Z" /><path className="gateway-center" d="M0-14L28 0 0 14-28 0Z" /></g>
      {[[520, 240], [1230, 255], [1310, 640], [570, 650], [920, 120]].map(([x, y], i) => <g className="system-node" key={i} transform={`translate(${x} ${y})`}><path className="node-base" d="M0-25L50 0 0 25-50 0Z" /><path d="M-24-12V-54L0-66 24-54V12M-24-54L0-42 24-54M0-42V25" /><path d="M-24-37L0-25 24-37M-24-23L0-11 24-23" opacity=".5" /><circle r="3" cy="-66" className="node-point" /></g>)}
      <g className="route-points">{[[310,475],[630,305],[1200,460],[1420,270],[380,600],[1120,790],[730,775]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="3" />)}</g>
    </svg>
  </div>;
}

export function RackVisual() {
  return <div className="rack-visual" aria-hidden="true"><svg viewBox="0 0 680 520" fill="none"><g stroke="currentColor" strokeWidth="1">
      {Array.from({length:12},(_,i)=><path opacity=".1" key={i} d={`M0 ${i*44}H680M${i*62} 0V520`} />)}
      <path opacity=".35" strokeDasharray="4 6" d="M50 460H630M85 55V490M595 40V485" />
      {[0,1,2].map(i=><g className="rack-unit" key={i} style={{'--level':i} as CSSProperties} transform={`translate(${115+i*155} ${90-i*12})`}><path className="rack-outline" d="M0 30L100 0 135 20V345L35 375 0 355Z M0 30L35 50 135 20M35 50V375" />{Array.from({length:7},(_,n)=><g key={n} transform={`translate(44 ${72+n*39})`}><path d="M0 0L79-24V0L0 24Z"/><path opacity=".4" d="M12 2L53-10M12 8L53-4"/><circle className="rack-light" cx="65" cy="-6" r="2" style={{'--delay':`${-n-i}s`} as CSSProperties}/></g>)}</g>)}
      <path className="rack-cable" d="M150 465H510V430M305 453V488H565V445M460 441V505H80V445" stroke="#155eef" />
    </g></svg><div className="diagram-caption"><span>Physical systems</span><span>Connected operations</span></div></div>;
}
