import React from 'react';
export default function SectionHead({ kicker, title, children }) {
  return (
    <div className="section-head">
      <div><span className="kicker">{kicker}</span><h2>{title}</h2></div>
      {children && <div className="section-aside">{children}</div>}
    </div>
  );
}
