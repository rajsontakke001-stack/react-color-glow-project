import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Palette, Sparkles, RotateCcw } from 'lucide-react';
import './style.css';

const colors = [
  { name: 'Green', value: '#24e58b', soft: 'rgba(36, 229, 139, .34)' },
  { name: 'Red', value: '#ff3d5a', soft: 'rgba(255, 61, 90, .34)' },
  { name: 'Blue', value: '#4385ff', soft: 'rgba(67, 133, 255, .36)' },
  { name: 'Purple', value: '#b46bff', soft: 'rgba(180, 107, 255, .36)' },
  { name: 'Orange', value: '#ff9c3d', soft: 'rgba(255, 156, 61, .36)' },
];

function App() {
  const [selected, setSelected] = useState('Red');
  const active = colors.find((color) => color.name === selected);

  return (
    <main className="page" style={{ '--glow': active.soft, '--active': active.value }}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-icon"><Palette size={21} /></div>
          <span>COLOR<span className="brand-light">LAB</span></span>
        </div>
        <div className="live-pill"><span className="live-dot" /> LIVE PREVIEW</div>
      </header>

      <section className="content">
        <div className="intro">
          <div className="eyebrow"><Sparkles size={14} /> INTERACTIVE COLOR PLAYGROUND</div>
          <h1>Pick a color.<br /><span>Feel the glow.</span></h1>
          <p>Select any color below and watch the orb fill with a smooth, radiant glow.</p>
        </div>

        <section className="preview-card" aria-live="polite">
          <div className="preview-top">
            <div>
              <span className="small-label">COLOR PREVIEW</span>
              <div className="current-color">{active.name}</div>
            </div>
            <div className="hex-chip"><span className="hex-dot" />{active.value.toUpperCase()}</div>
          </div>

          <div className="orb-stage">
            <div className="orb-halo" />
            <div className="orb" key={active.name}>
              <div className="orb-shine" />
              <div className="orb-core" />
              <span className="orb-label">{active.name.toUpperCase()}</span>
            </div>
            <div className="orb-floor" />
          </div>

          <div className="status-line">
            <span className="status-check">✓</span>
            <span>{active.name} is selected</span>
            <span className="status-line-fill" />
            <span className="status-caption">COLOR ACTIVE</span>
          </div>
        </section>

        <section className="picker-section">
          <div className="picker-heading">
            <div>
              <span className="small-label">CHOOSE YOUR SHADE</span>
              <h2>Color controls</h2>
            </div>
            <button className="reset-button" onClick={() => setSelected('Red')} aria-label="Reset to red">
              <RotateCcw size={15} /> Reset
            </button>
          </div>

          <div className="color-options" role="radiogroup" aria-label="Choose circle color">
            {colors.map((color) => (
              <button
                key={color.name}
                className={`color-option ${selected === color.name ? 'selected' : ''}`}
                style={{ '--swatch': color.value, '--swatch-glow': color.soft }}
                role="radio"
                aria-checked={selected === color.name}
                onClick={() => setSelected(color.name)}
              >
                <span className="swatch-wrap">
                  <span className="swatch" />
                  {selected === color.name && <span className="selected-check">✓</span>}
                </span>
                <span className="option-name">{color.name}</span>
                <span className="option-hex">{color.value.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <div className="hint"><span className="hint-dot" /> Tap a color to update the circle instantly</div>
        </section>
      </section>

      <footer><span>MADE TO GLOW</span><span>REACT · USESTATE · CSS ANIMATION</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
