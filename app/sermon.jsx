/* Churchora — Sermon live-sync (presenter console + projection) */
const { Icon: SIcon, Btn: SBtn, Pill: SPill, Logo: SLogo, Eyebrow: SEyebrow } = window;

function Projection({ verse, blackout, big }) {
  return (
    <div style={{
      flex: 1, minHeight: 0, borderRadius: big ? "var(--r-lg)" : "var(--r-md)", overflow: "hidden",
      background: "#04070b", position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
      padding: big ? "8% 9%" : "10% 8%", textAlign: "center", boxShadow: "inset 0 0 120px rgba(0,0,0,.6)",
    }}>
      {/* faint glow in theme color */}
      <div style={{ position: "absolute", bottom: "-30%", left: "50%", transform: "translateX(-50%)", width: "70%", height: "70%", borderRadius: "50%", background: "radial-gradient(circle, var(--primary) 0%, transparent 68%)", opacity: .18 }} />
      {blackout ? (
        <div style={{ color: "rgba(255,255,255,.25)", fontSize: ".9rem", letterSpacing: ".2em", textTransform: "uppercase", position: "relative" }}>Screen blacked out</div>
      ) : (
        <div style={{ position: "relative", maxWidth: 900 }}>
          <div className="eyebrow" style={{ color: "var(--primary)", marginBottom: big ? 28 : 16, fontSize: big ? ".9rem" : ".72rem" }}>{verse.ref} · {verse.tr}</div>
          <p className="serif-verse" style={{ color: "#fff", fontSize: big ? "clamp(1.8rem, 3.4vw, 3.2rem)" : "1.5rem", lineHeight: 1.32, letterSpacing: "-.01em" }}>“{verse.text}”</p>
        </div>
      )}
    </div>
  );
}

function SermonMode({ go }) {
  const queue = CH.sermonQueue;
  const [idx, setIdx] = React.useState(0);
  const [blackout, setBlackout] = React.useState(false);
  const next = () => setIdx(i => Math.min(i + 1, queue.length - 1));
  const prev = () => setIdx(i => Math.max(i - 1, 0));

  React.useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") prev();
      else if (e.key.toLowerCase() === "b") setBlackout(b => !b);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [queue.length]);

  const nextVerse = queue[idx + 1];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--chrome)", color: "var(--chrome-text)" }}>
      {/* header */}
      <div style={{ height: 58, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <SLogo size={28} />
          <div>
            <div style={{ fontSize: ".95rem", fontWeight: 500 }}>The Lord is my Shepherd</div>
            <div style={{ fontSize: ".76rem", color: "var(--chrome-muted)" }}>Sunday service · Pastor Yaw</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: ".8rem", fontWeight: 500, color: "#ff5d52" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5d52", boxShadow: "0 0 0 0 rgba(255,93,82,.6)", animation: "pulse 1.8s infinite" }} />LIVE
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: ".8rem", color: "var(--chrome-muted)" }}><SIcon name="wifi" size={15} />612 phones synced</span>
          <button onClick={() => go("cms")} style={{ border: "1px solid var(--chrome-muted)", background: "transparent", color: "var(--chrome-text)", borderRadius: "var(--r-sm)", padding: "7px 14px", fontFamily: "var(--font)", fontSize: ".85rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7 }}><SIcon name="x" size={15} />Exit</button>
        </div>
      </div>

      {/* body */}
      <div style={{ flex: 1, minHeight: 0, display: "flex", padding: 20, gap: 20 }}>
        {/* presenter main */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <SEyebrow style={{ color: "var(--chrome-muted)" }}>On screen now</SEyebrow>
            <span className="mono" style={{ fontSize: ".82rem", color: "var(--chrome-muted)" }}>{idx + 1} / {queue.length}</span>
          </div>
          <Projection verse={queue[idx]} blackout={blackout} big />

          {/* transport */}
          <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "var(--r-md)", padding: "12px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 200 }}>
              <button onClick={() => setBlackout(b => !b)} style={{ border: "1px solid " + (blackout ? "var(--primary)" : "rgba(255,255,255,.18)"), background: blackout ? "var(--primary)" : "transparent", color: blackout ? "var(--primary-contrast)" : "var(--chrome-text)", borderRadius: "var(--r-sm)", padding: "9px 14px", fontFamily: "var(--font)", fontSize: ".84rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <SIcon name={blackout ? "eye" : "eye-off"} size={16} />{blackout ? "Show" : "Black out"}
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <button onClick={prev} disabled={idx === 0} style={transportBtn(idx === 0)}><SIcon name="skip-back" size={20} /></button>
              <div style={{ textAlign: "center", minWidth: 110 }}>
                <div style={{ fontSize: ".72rem", color: "var(--chrome-muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>Next</div>
                <div className="mono" style={{ fontSize: ".9rem", color: nextVerse ? "var(--chrome-text)" : "var(--chrome-muted)" }}>{nextVerse ? nextVerse.ref : "End of queue"}</div>
              </div>
              <button onClick={next} disabled={idx === queue.length - 1} style={transportBtn(idx === queue.length - 1, true)}><SIcon name="skip-forward" size={20} /></button>
            </div>
            <div style={{ minWidth: 200, textAlign: "right", fontSize: ".78rem", color: "var(--chrome-muted)" }}>
              <kbd style={kbd}>←</kbd> <kbd style={kbd}>→</kbd> to navigate · <kbd style={kbd}>B</kbd> blackout
            </div>
          </div>
        </div>

        {/* queue rail */}
        <div style={{ width: 320, flexShrink: 0, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <SEyebrow style={{ color: "var(--chrome-muted)" }}>Verse queue</SEyebrow>
            <button style={{ border: "none", background: "rgba(255,255,255,.08)", color: "var(--chrome-text)", borderRadius: 7, padding: "5px 10px", fontSize: ".78rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 5 }}><SIcon name="plus" size={14} />Add</button>
          </div>
          <div className="scroll-area" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 9, paddingRight: 4 }}>
            {queue.map((v, i) => {
              const active = i === idx;
              return (
                <button key={i} onClick={() => setIdx(i)} style={{
                  textAlign: "left", cursor: "pointer", display: "flex", gap: 12, alignItems: "flex-start",
                  padding: "13px 14px", borderRadius: "var(--r-sm)",
                  background: active ? "var(--primary)" : "rgba(255,255,255,.05)",
                  color: active ? "var(--primary-contrast)" : "var(--chrome-text)",
                  border: "1px solid " + (active ? "var(--primary)" : "rgba(255,255,255,.08)"), transition: "all var(--dur) var(--ease)",
                }}>
                  <span className="mono" style={{ fontSize: ".78rem", opacity: active ? .8 : .5, marginTop: 1 }}>{String(i + 1).padStart(2, "0")}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="mono" style={{ fontSize: ".82rem", fontWeight: 500, marginBottom: 3 }}>{v.ref} · {v.tr}</div>
                    <div style={{ fontSize: ".82rem", opacity: active ? .9 : .55, lineHeight: 1.4 }}>“{v.text.length > 64 ? v.text.slice(0, 64) + "…" : v.text}”</div>
                  </div>
                  {active && <span style={{ flexShrink: 0 }}><SIcon name="monitor" size={15} /></span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse {0%{box-shadow:0 0 0 0 rgba(255,93,82,.55)}70%{box-shadow:0 0 0 7px rgba(255,93,82,0)}100%{box-shadow:0 0 0 0 rgba(255,93,82,0)}} kbd{font-family:var(--font)}`}</style>
    </div>
  );
}

function transportBtn(disabled, primary) {
  return {
    width: 52, height: 52, borderRadius: "50%", cursor: disabled ? "default" : "pointer",
    border: "none", display: "inline-flex", alignItems: "center", justifyContent: "center",
    background: disabled ? "rgba(255,255,255,.06)" : primary ? "var(--primary)" : "rgba(255,255,255,.12)",
    color: disabled ? "rgba(255,255,255,.25)" : primary ? "var(--primary-contrast)" : "var(--chrome-text)",
    transition: "all var(--dur) var(--ease)",
  };
}
const kbd = { display: "inline-block", padding: "1px 6px", border: "1px solid rgba(255,255,255,.2)", borderRadius: 4, fontSize: ".72rem", margin: "0 1px" };

window.SermonMode = SermonMode;
