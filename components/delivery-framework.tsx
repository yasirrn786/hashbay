import { Plus } from 'lucide-react';
import { stages } from '@/lib/content';

export function DeliveryFramework() {
  return <section className="delivery section"><div className="shell editorial-grid">
    <div><p className="eyebrow">A connected perspective</p><h2>Think beyond<br />the handover.</h2><p>Technology needs planning, implementation, protection and continued attention. These four perspectives connect Hashbay&apos;s capabilities.</p></div>
    <div className="delivery-steps">{stages.map((stage, index) => <details key={stage.name} open={index === 0} name="delivery"><summary><span className="index">0{index + 1}</span><h3>{stage.name}</h3><Plus size={23} /></summary><div className="delivery-detail"><h4>{stage.heading}</h4><p>{stage.text}</p><span>{stage.detail}</span></div></details>)}</div>
  </div></section>;
}
