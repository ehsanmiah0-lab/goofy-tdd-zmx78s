// ============================================================
// ZENTRIQFLOW - Full MVP - Updated with new logo + all fixes
// ============================================================

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zbaqxrtgllrojuxcgozn.supabase.co",
  "sb_publishable_Xv0o7AA61mzy1p0XbfriWw_kqe5INLY"
);

const LOGO_IMG = "data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqnYBOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKp2ATsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqdgE7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z";


// ─── BRAND TOKENS ────────────────────────────────────────────
const BRAND = {
  navy: "#1a1f5e",
  navyDark: "#0f1340",
  navyLight: "#2a3080",
  blue: "#4a7fd8",
  purple: "#7b4fd8",
  blueLight: "#eef0fb",
  blueMid: "#c8cbf5",
  gradient: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)",
};

const STATUS_COLORS = {
  waiting: "#4a7fd8",
  called: "#f59e0b",
  on_chair: "#10b981",
  done: "#6b7280",
  cancelled: "#ef4444",
};

const STATUS_LABELS = {
  waiting: "Waiting",
  called: "Called",
  on_chair: "On Chair",
  done: "Done",
  cancelled: "Cancelled",
};

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const S = {
  app: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    minHeight: "100vh",
    background: "#f0f2fb",
    color: BRAND.navy,
    overflowX: "hidden",
    maxWidth: "100vw",
  },
  navbar: {
    background: BRAND.navy,
    padding: "0 1.5rem",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 12px rgba(26,31,94,0.2)",
    boxSizing: "border-box",
    width: "100%",
  },
  navRight: { display: "flex", alignItems: "center", gap: 12 },
  card: {
    background: "#fff",
    borderRadius: 16,
    border: `1px solid #c8cbf5`,
    padding: "1.25rem",
    marginBottom: "1rem",
    boxShadow: "0 1px 4px rgba(26,31,94,0.06)",
    boxSizing: "border-box",
  },
  cardBlue: {
    background: "#eef0fb",
    borderRadius: 16,
    border: `1px solid #c8cbf5`,
    padding: "1.25rem",
    marginBottom: "1rem",
    boxSizing: "border-box",
  },
  btn: (variant = "primary") => ({
    padding: "9px 18px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
    transition: "opacity 0.15s",
    background:
      variant === "gradient" ? "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)"
      : variant === "danger" ? "#ef4444"
      : variant === "success" ? "#10b981"
      : variant === "warning" ? "#f59e0b"
      : variant === "ghost-white" ? "rgba(255,255,255,0.12)"
      : variant === "ghost" ? "#e2e8f0"
      : BRAND.navy,
    color: variant === "ghost" ? BRAND.navy : "#fff",
    border: variant === "ghost-white" ? "1px solid rgba(255,255,255,0.25)" : "none",
  }),
  gradBtn: {
    padding: "9px 18px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
    background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "11px 13px",
    borderRadius: 10,
    border: "1.5px solid #c8cbf5",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    marginBottom: 12,
    color: BRAND.navy,
    background: "#fff",
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: "#2a3080",
    marginBottom: 5,
    display: "block",
  },
  section: { maxWidth: 960, margin: "0 auto", padding: "1.5rem", boxSizing: "border-box" },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 },
  muted: { fontSize: 13, color: "#64748b", margin: 0 },
  h2: { fontSize: 22, fontWeight: 700, margin: "0 0 1rem", color: BRAND.navy },
  h3: { fontSize: 15, fontWeight: 600, margin: "0 0 0.5rem", color: BRAND.navy },
  statCard: {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #c8cbf5",
    padding: "1rem",
    textAlign: "center",
  },
  statNum: { fontSize: 28, fontWeight: 800, color: BRAND.navy },
  statLabel: { fontSize: 12, color: "#64748b", marginTop: 2 },
  badge: (color) => ({
    display: "inline-block",
    padding: "3px 11px",
    borderRadius: 99,
    fontSize: 12,
    fontWeight: 600,
    background: color + "1a",
    color: color,
    border: `1px solid ${color}44`,
  }),
  tab: (active) => ({
    padding: "9px 18px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontWeight: active ? 700 : 400,
    color: active ? BRAND.navy : "#64748b",
    borderBottom: active ? "3px solid #4a7fd8" : "3px solid transparent",
    fontSize: 14,
    textTransform: "capitalize",
  }),
};

function Logo({ size = "md", onClick }) {
  const h = size === "lg" ? 120 : size === "sm" ? 38 : 100;
  return (
    <img
      src={LOGO_IMG}
      alt="ZentriqFlow"
      onClick={onClick}
      style={{ height: h, width: "auto", cursor: onClick ? "pointer" : "default" }}
    />
  );
}

function QRCode({ url, size = 160 }) {
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
  return (
    <img src={src} alt="QR Code" style={{ width: size, height: size, borderRadius: 12, border: "2px solid #c8cbf5" }} />
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [shopSlug, setShopSlug] = useState(null);
  const [queueEntryId, setQueueEntryId] = useState(null);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const shopMatch = path.match(/\/shop\/([^/]+)/);
    const statusMatch = path.match(/\/status\/([^/]+)/);
    const barberMatch = path.match(/\/barber/);
    if (shopMatch) { setShopSlug(shopMatch[1]); setView("join"); }
    else if (statusMatch) { setQueueEntryId(statusMatch[1]); setView("status"); }
    else if (barberMatch) { setView("barber-login"); }
    supabase.auth.getUser().then(({ data }) => { if (data.user) setUser(data.user); });
  }, []);

  if (view === "join" && shopSlug) return <CustomerJoin shopSlug={shopSlug} />;
  if (view === "status" && queueEntryId) return <CustomerStatus entryId={queueEntryId} />;
  if (view === "barber-login") return <BarberLogin />;
  if (view === "admin") return <AdminDashboard user={user} onLogout={() => { supabase.auth.signOut(); setView("home"); setUser(null); }} />;
  if (view === "login") return <LoginPage onLogin={(u) => { setUser(u); setView("admin"); }} />;

  return (
    <div style={S.app}>
      {/* Slide-out menu */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex" }}>
          <div style={{ flex: 1, background: "rgba(0,0,0,0.5)" }} onClick={() => setMenuOpen(false)} />
          <div style={{ width: 300, background: BRAND.navy, height: "100%", display: "flex", flexDirection: "column", boxShadow: "-4px 0 32px rgba(0,0,0,0.4)", overflowY: "auto" }}>
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Logo size="sm" />
              <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ padding: "1rem", flex: 1 }}>
              {[
                { icon: "🏠", label: "Home", action: () => { setView("home"); setMenuOpen(false); } },
                { icon: "✂️", label: "Barber Login", action: () => { setView("barber-login"); setMenuOpen(false); } },
                { icon: "🏪", label: "Admin Dashboard", action: () => { setView(user ? "admin" : "login"); setMenuOpen(false); } },
                { icon: "❓", label: "FAQ", action: () => setMenuOpen(false) },
                { icon: "📧", label: "Contact", action: () => setMenuOpen(false) },
                { icon: "📋", label: "Privacy Policy", action: () => setMenuOpen(false) },
                { icon: "📄", label: "Terms of Service", action: () => setMenuOpen(false) },
              ].map((item) => (
                <button key={item.label} onClick={item.action} style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "13px 12px", background: "none", border: "none", cursor: "pointer", borderRadius: 10, marginBottom: 4, color: "#fff", textAlign: "left" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>{item.label}</span>
                </button>
              ))}
              {user && (
                <button onClick={() => { supabase.auth.signOut(); setView("home"); setUser(null); setMenuOpen(false); }}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "13px 12px", background: "none", border: "none", cursor: "pointer", borderRadius: 10, color: "#ef4444", textAlign: "left", marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: 20 }}>🚪</span>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>Logout</span>
                </button>
              )}
            </div>
            <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>© 2026 ZentriqFlow</p>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav style={S.navbar}>
        <Logo size="sm" onClick={() => setView("home")} />
        <div style={S.navRight}>
          <button style={S.btn("ghost-white")} onClick={() => setView(user ? "admin" : "login")}>
            {user ? "Dashboard →" : "Admin Login"}
          </button>
          <button onClick={() => setMenuOpen(true)} style={{ background: "none", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 10, cursor: "pointer", padding: "9px 12px", display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ display: "block", width: 20, height: 2, background: "#fff", borderRadius: 2 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "#fff", borderRadius: 2 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "#fff", borderRadius: 2 }} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: BRAND.navy, color: "#fff", padding: "5rem 1.5rem 6rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(74,127,216,0.1)" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(123,79,216,0.1)" }} />
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32, position: "relative", zIndex: 1 }}>
          <img src={LOGO_IMG} alt="ZentriqFlow" style={{ height: 160, width: "auto", filter: "drop-shadow(0 8px 32px rgba(74,127,216,0.5))" }} />
        </div>
        <p style={{ fontSize: 20, color: "#94a3b8", margin: "0 auto 2.5rem", maxWidth: 500, position: "relative", zIndex: 1 }}>
          Customers join the queue from their phone. Manage everything from one dashboard.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <button style={{ padding: "13px 28px", borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 16, background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)", color: "#fff" }} onClick={() => setView(user ? "admin" : "login")}>
            Get started free
          </button>
          <button style={{ ...S.btn("ghost-white"), fontSize: 16, padding: "13px 28px", borderRadius: 12 }}>
            See how it works
          </button>
        </div>
      </div>

      {/* Features */}
      <div style={{ ...S.section, paddingTop: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { icon: "📱", title: "Scan & Join", desc: "Customers scan a QR code and join in seconds — no app download needed." },
            { icon: "📍", title: "Live Position", desc: "Real-time queue position and estimated wait time on their phone." },
            { icon: "✂️", title: "Barber Dashboard", desc: "Each barber has their own dashboard to manage their queue." },
            { icon: "📊", title: "Daily Earnings", desc: "See exactly how much each barber has earned throughout the day." },
          ].map((f) => (
            <div key={f.title} style={S.card}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: BRAND.navy }}>{f.title}</div>
              <div style={S.muted}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#0d1035", color: "#fff", padding: "4rem 2rem 2rem", marginTop: "3rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ maxWidth: 280 }}>
              <Logo size="sm" />
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginTop: 14, lineHeight: 1.7, marginBottom: 0 }}>
                The smarter way to manage your barbershop queue. No booking, no stress — just flow.
              </p>
            </div>
            <a href="mailto:hello@zentriqflow.com" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, alignSelf: "flex-start" }}>
              <span>📧</span> hello@zentriqflow.com
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 32, paddingBottom: "2.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { title: "Product", links: ["Get Started", "Live Demo", "Sign In"] },
              { title: "Company", links: ["About", "Team", "Press"] },
              { title: "Support", links: ["Contact Us", "FAQ"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ color: "rgba(255,255,255,0.35)", fontWeight: 700, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 1rem" }}>{col.title}</h4>
                {col.links.map((link) => (
                  <div key={link} style={{ marginBottom: "0.75rem" }}>
                    <a href="#" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none" }}>{link}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, margin: 0 }}>© 2026 ZentriqFlow. All rights reserved.</p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, margin: 0 }}>Made with ❤️ for barbers everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── LOGIN PAGE ───────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  async function handleSubmit() {
    if (!email.trim() || !password.trim()) return setError("Please fill in all fields.");
    setLoading(true); setError("");
    const { data, error } = isSignup
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    onLogin(data.user);
  }

  return (
    <div style={{ ...S.app, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <nav style={S.navbar}><Logo size="sm" /></nav>
      <div style={{ ...S.card, width: "100%", maxWidth: 420, margin: "3rem 1rem", padding: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <Logo size="md" />
          <h2 style={{ ...S.h2, textAlign: "center", marginBottom: 4, marginTop: 12 }}>{isSignup ? "Create account" : "Welcome back"}</h2>
          <p style={S.muted}>{isSignup ? "Start your free ZentriqFlow shop" : "Sign in to your dashboard"}</p>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: 14, marginBottom: 12 }}>{error}</p>}
        <label style={S.label}>Email</label>
        <input style={S.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        <label style={S.label}>Password</label>
        <input style={S.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" onKeyDown={(e) => e.key === "Enter" && handleSubmit()} />
        <button style={{ ...S.gradBtn, width: "100%", padding: "13px", fontSize: 15, borderRadius: 10, marginTop: 4 }} onClick={handleSubmit} disabled={loading}>
          {loading ? "..." : isSignup ? "Create account" : "Log in"}
        </button>
        <p style={{ ...S.muted, textAlign: "center", marginTop: 14 }}>
          {isSignup ? "Already have an account? " : "New shop owner? "}
          <span style={{ color: BRAND.blue, cursor: "pointer", fontWeight: 600 }} onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Log in" : "Sign up free"}
          </span>
        </p>
      </div>
    </div>
  );
}

// ─── BARBER LOGIN ─────────────────────────────────────────────
function BarberLogin() {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [barbers, setBarbers] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loggedInBarber, setLoggedInBarber] = useState(null);

  useEffect(() => {
    supabase.from("shops").select("*").then(({ data }) => setShops(data || []));
  }, []);

  async function selectShop(shop) {
    setSelectedShop(shop);
    const { data } = await supabase.from("barbers").select("*").eq("shop_id", shop.id).eq("is_active", true);
    setBarbers(data || []);
  }

  function login() {
    if (!selectedBarber) return setError("Please select your name.");
    if (!pin.trim()) return setError("Please enter your PIN.");
    if (selectedBarber.pin !== pin) return setError("Incorrect PIN. Please try again.");
    setLoggedInBarber(selectedBarber);
  }

  if (loggedInBarber) return <BarberDashboard barber={loggedInBarber} shop={selectedShop} onLogout={() => { setLoggedInBarber(null); setPin(""); setSelectedBarber(null); }} />;

  return (
    <div style={S.app}>
      <nav style={S.navbar}>
        <Logo size="sm" />
        <button style={S.btn("ghost-white")} onClick={() => window.location.href = "/"}>← Back</button>
      </nav>
      <div style={{ ...S.section, maxWidth: 440, paddingTop: "3rem" }}>
        <div style={{ ...S.card, padding: "2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>✂️</div>
            <h2 style={{ ...S.h2, textAlign: "center", marginBottom: 4 }}>Barber Login</h2>
            <p style={S.muted}>Sign in to manage your queue</p>
          </div>
          {error && <p style={{ color: "#ef4444", fontSize: 14, marginBottom: 12, textAlign: "center" }}>{error}</p>}
          {!selectedShop ? (
            <>
              <label style={S.label}>Select your shop</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {shops.map((s) => (
                  <button key={s.id} style={{ ...S.card, marginBottom: 0, cursor: "pointer", textAlign: "left", border: "2px solid #c8cbf5" }} onClick={() => selectShop(s)}>
                    <div style={{ fontWeight: 600, color: BRAND.navy }}>{s.name}</div>
                    <div style={S.muted}>/{s.slug}</div>
                  </button>
                ))}
              </div>
            </>
          ) : !selectedBarber ? (
            <>
              <p style={{ ...S.muted, marginBottom: "1rem" }}>at <strong>{selectedShop.name}</strong></p>
              <label style={S.label}>Select your name</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {barbers.map((b) => (
                  <button key={b.id} style={{ ...S.card, marginBottom: 0, cursor: "pointer", textAlign: "left", border: "2px solid #c8cbf5", display: "flex", alignItems: "center", gap: 12 }} onClick={() => setSelectedBarber(b)}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                      {b.name[0].toUpperCase()}
                    </div>
                    <div style={{ fontWeight: 600, color: BRAND.navy }}>{b.name}</div>
                  </button>
                ))}
              </div>
              <button style={{ ...S.btn("ghost"), marginTop: 12, width: "100%" }} onClick={() => setSelectedShop(null)}>← Back</button>
            </>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem", padding: "0.75rem", background: "#eef0fb", borderRadius: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff" }}>
                  {selectedBarber.name[0].toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: BRAND.navy }}>{selectedBarber.name}</div>
                  <div style={S.muted}>{selectedShop.name}</div>
                </div>
              </div>
              <label style={S.label}>Enter your PIN</label>
              <input style={{ ...S.input, textAlign: "center", fontSize: 24, letterSpacing: 8 }} type="password" maxLength={6} placeholder="••••" value={pin} onChange={(e) => { setPin(e.target.value); setError(""); }} onKeyDown={(e) => e.key === "Enter" && login()} />
              <button style={{ ...S.gradBtn, width: "100%", padding: 13, fontSize: 15, borderRadius: 10 }} onClick={login}>Sign in</button>
              <button style={{ ...S.btn("ghost"), marginTop: 8, width: "100%" }} onClick={() => setSelectedBarber(null)}>← Back</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── BARBER DASHBOARD ─────────────────────────────────────────
function BarberDashboard({ barber, shop, onLogout }) {
  const [queue, setQueue] = useState([]);

  const loadQueue = useCallback(async () => {
    const { data } = await supabase.from("queue_entries")
      .select("*, services(name, price, duration)")
      .eq("shop_id", shop.id).eq("barber_id", barber.id)
      .not("status", "eq", "done").not("status", "eq", "cancelled")
      .order("position", { ascending: true });
    setQueue(data || []);
  }, [shop.id, barber.id]);

  useEffect(() => {
    loadQueue();
    const ch = supabase.channel("barber-queue-" + barber.id)
      .on("postgres_changes", { event: "*", schema: "public", table: "queue_entries", filter: `shop_id=eq.${shop.id}` }, loadQueue)
      .subscribe();
    return () => supabase.removeChannel(ch);
  }, [loadQueue, shop.id, barber.id]);

  async function recalcPositions() {
    const { data } = await supabase.from("queue_entries").select("id").eq("shop_id", shop.id).in("status", ["waiting", "called", "on_chair"]).order("position", { ascending: true });
    if (data) for (let i = 0; i < data.length; i++) await supabase.from("queue_entries").update({ position: i + 1 }).eq("id", data[i].id);
  }

  async function updateStatus(entryId, status) {
    await supabase.from("queue_entries").update({ status, updated_at: new Date().toISOString() }).eq("id", entryId);
    if (status === "done") {
      const entry = queue.find((q) => q.id === entryId);
      const price = entry?.services?.price || 0;
      if (price > 0) await supabase.rpc("increment_earnings", { barber_id: barber.id, amount: price });
      await recalcPositions();
    }
    loadQueue();
  }

  async function callNext() {
    const next = queue.find((q) => q.status === "waiting");
    if (!next) return alert("No customers waiting for you.");
    await supabase.from("queue_entries").update({ status: "called", updated_at: new Date().toISOString() }).eq("id", next.id);
    loadQueue();
  }

  const waitingCount = queue.filter((q) => q.status === "waiting").length;
  const onChairCount = queue.filter((q) => q.status === "on_chair").length;
  const calledCount = queue.filter((q) => q.status === "called").length;

  return (
    <div style={S.app}>
      <nav style={S.navbar}>
        <Logo size="sm" />
        <div style={S.navRight}>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{barber.name}</div>
            <div style={{ color: "#94a3b8", fontSize: 12 }}>{shop.name}</div>
          </div>
          <button style={S.btn("ghost-white")} onClick={onLogout}>Logout</button>
        </div>
      </nav>
      <div style={{ background: BRAND.navy, padding: "1.25rem 1.5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", margin: "0 0 1rem", fontSize: 18, fontWeight: 700 }}>{barber.name}'s Queue</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[{ num: waitingCount, label: "Waiting" }, { num: calledCount, label: "Called" }, { num: onChairCount, label: "On Chair" }].map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "0.9rem", textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 800, background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={S.section}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem", flexWrap: "wrap" }}>
          <button style={{ ...S.gradBtn, fontSize: 15, padding: "10px 22px" }} onClick={callNext}>📢 Call Next Customer</button>
          <span style={S.muted}>{waitingCount} waiting · {onChairCount} on chair</span>
        </div>
        {queue.length === 0 && (
          <div style={{ ...S.cardBlue, textAlign: "center", padding: "3rem" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
            <p style={{ fontWeight: 700, fontSize: 16, margin: "0 0 4px", color: BRAND.navy }}>No customers waiting</p>
            <p style={S.muted}>Customers who choose you will appear here.</p>
          </div>
        )}
        {queue.map((entry) => (
          <div key={entry.id} style={{ ...S.card, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#eef0fb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: BRAND.navy, flexShrink: 0 }}>#{entry.position}</div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: BRAND.navy }}>{entry.customer_name}</div>
              <div style={S.muted}>{entry.services?.name}{entry.services?.price ? ` · £${entry.services.price}` : ""} · Joined {formatTime(entry.joined_at)}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={S.badge(STATUS_COLORS[entry.status])}>{STATUS_LABELS[entry.status]}</span>
              {entry.status === "waiting" && <button style={S.btn("warning")} onClick={() => updateStatus(entry.id, "called")}>📢 Call</button>}
              {entry.status === "called" && <button style={S.btn("success")} onClick={() => updateStatus(entry.id, "on_chair")}>✓ On Chair</button>}
              {entry.status === "on_chair" && <button style={S.btn("success")} onClick={() => updateStatus(entry.id, "done")}>✓ Done</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CUSTOMER JOIN ────────────────────────────────────────────
function CustomerJoin({ shopSlug }) {
  const [shop, setShop] = useState(null);
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [barberId, setBarberId] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function load() {
      const { data: shopData } = await supabase.from("shops").select("*").eq("slug", shopSlug).single();
      if (!shopData) return;
      setShop(shopData);
      const { data: svcData } = await supabase.from("services").select("*").eq("shop_id", shopData.id);
      setServices(svcData || []);
      if (svcData?.length) setServiceId(svcData[0].id);
      const { data: barberData } = await supabase.from("barbers").select("*").eq("shop_id", shopData.id).eq("is_active", true);
      setBarbers(barberData || []);
    }
    load();
  }, [shopSlug]);

  async function joinQueue() {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!serviceId) errs.service = "Please select a service";
    if (Object.keys(errs).length) return setErrors(errs);
    setErrors({});

    const { data: existing } = await supabase.from("queue_entries").select("id").eq("shop_id", shop.id).eq("customer_name", name.trim()).in("status", ["waiting", "called", "on_chair"]);
    if (existing?.length) return alert("You're already in the queue!");

    setLoading(true);
    const { data: pos } = await supabase.from("queue_entries").select("position").eq("shop_id", shop.id).in("status", ["waiting", "called", "on_chair"]).order("position", { ascending: false }).limit(1);
    const nextPos = pos?.length ? (pos[0].position || 0) + 1 : 1;

    let assignedBarberId = barberId || null;
    if (!assignedBarberId && barbers.length > 0) {
      const counts = await Promise.all(barbers.map(async (b) => {
        const { count } = await supabase.from("queue_entries").select("*", { count: "exact", head: true }).eq("barber_id", b.id).in("status", ["waiting", "called", "on_chair"]);
        return { id: b.id, count: count || 0 };
      }));
      const least = counts.sort((a, b) => a.count - b.count)[0];
      assignedBarberId = least.id;
    }

    const { data, error } = await supabase.from("queue_entries").insert({
      shop_id: shop.id,
      customer_name: name.trim(),
      customer_phone: phone.trim(),
      customer_email: email.trim(),
      service_id: serviceId,
      barber_id: assignedBarberId,
      status: "waiting",
      position: nextPos,
    }).select().single();
    setLoading(false);
    if (error) { alert("Error: " + error.message); return; }
    setJoined(data);
  }

  if (joined) {
    const service = services.find((s) => s.id === joined.service_id);
    const barber = barbers.find((b) => b.id === joined.barber_id);
    return (
      <div style={S.app}>
        <nav style={S.navbar}><Logo size="sm" /></nav>
        <div style={{ background: BRAND.navy, padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 1rem" }}>✅</div>
          <h2 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "0 0 0.5rem" }}>You're in the queue!</h2>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: 15 }}>at {shop?.name}</p>
        </div>
        <div style={{ ...S.section, maxWidth: 480, paddingTop: "1.5rem" }}>
          <div style={{ ...S.card, textAlign: "center", padding: "2rem" }}>
            <p style={{ ...S.muted, marginBottom: 8 }}>Your queue number</p>
            <div style={{ fontSize: 64, fontWeight: 900, background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>#{joined.position}</div>
            <p style={{ ...S.muted, marginTop: 8 }}>Joined at {formatTime(joined.joined_at)}</p>
          </div>
          <div style={S.card}>
            <p style={S.h3}>Your booking</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span style={S.muted}>Name</span><strong style={{ color: BRAND.navy }}>{joined.customer_name}</strong></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span style={S.muted}>Service</span><strong style={{ color: BRAND.navy }}>{service?.name}</strong></div>
              {service && <div style={{ display: "flex", justifyContent: "space-between" }}><span style={S.muted}>Price</span><strong style={{ color: BRAND.navy }}>£{service.price}</strong></div>}
              {barber && <div style={{ display: "flex", justifyContent: "space-between" }}><span style={S.muted}>Barber</span><strong style={{ color: BRAND.navy }}>{barber.name}</strong></div>}
              <div style={{ display: "flex", justifyContent: "space-between" }}><span style={S.muted}>Status</span><span style={S.badge(STATUS_COLORS.waiting)}>Waiting</span></div>
            </div>
          </div>
          <button style={{ ...S.gradBtn, width: "100%", padding: 14, fontSize: 16, borderRadius: 12, marginBottom: 12 }} onClick={() => window.location.href = `/status/${joined.id}`}>
            Track my live position →
          </button>
          <p style={{ ...S.muted, textAlign: "center" }}>💡 Bookmark the tracking page so you can check back anytime</p>
        </div>
      </div>
    );
  }

  return (
    <div style={S.app}>
      <nav style={S.navbar}>
        <Logo size="sm" onClick={() => window.location.href = "/"} />
      </nav>
      <div style={{ background: BRAND.navy, padding: "2rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ color: "#fff", margin: "0 0 4px", fontSize: 22, fontWeight: 800 }}>Join the queue</h2>
        {shop && <p style={{ color: "#4a7fd8", margin: 0, fontSize: 15 }}>at {shop.name}</p>}
      </div>
      <div style={{ ...S.section, maxWidth: 480, paddingTop: "2rem" }}>
        <label style={S.label}>Your name *</label>
        <input style={{ ...S.input, borderColor: errors.name ? "#ef4444" : "#c8cbf5" }} placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p style={{ color: "#ef4444", fontSize: 12, marginTop: -8, marginBottom: 8 }}>{errors.name}</p>}

        <label style={S.label}>Phone number</label>
        <input style={S.input} placeholder="+44 7700 000000" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label style={S.label}>Email address</label>
        <input style={S.input} type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label style={S.label}>Choose a service *</label>
        <select style={{ ...S.input, cursor: "pointer", borderColor: errors.service ? "#ef4444" : "#c8cbf5" }} value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
          <option value="">Select a service...</option>
          {services.map((s) => (<option key={s.id} value={s.id}>{s.name} — £{s?.price} (~{s?.duration}min)</option>))}
        </select>
        {errors.service && <p style={{ color: "#ef4444", fontSize: 12, marginTop: -8, marginBottom: 8 }}>{errors.service}</p>}

        <label style={S.label}>Preferred barber</label>
        <select style={{ ...S.input, cursor: "pointer" }} value={barberId} onChange={(e) => setBarberId(e.target.value)}>
          <option value="">No preference (auto-assigned)</option>
          {barbers.map((b) => (<option key={b.id} value={b.id}>{b.name}</option>))}
        </select>

        <button style={{ width: "100%", padding: 14, fontSize: 16, borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 700, background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)", color: "#fff", marginTop: 4 }} onClick={joinQueue} disabled={loading}>
          {loading ? "Joining..." : "Join Queue — No booking needed"}
        </button>
        <p style={{ ...S.muted, textAlign: "center", marginTop: 12 }}>You'll get live updates on your phone</p>
      </div>
    </div>
  );
}

// ─── CUSTOMER STATUS ──────────────────────────────────────────
function CustomerStatus({ entryId }) {
  const [entry, setEntry] = useState(null);
  const [queueAhead, setQueueAhead] = useState(0);
  const [service, setService] = useState(null);
  const [barber, setBarber] = useState(null);
  const [leaving, setLeaving] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase.from("queue_entries").select("*").eq("id", entryId).single();
    if (!data) return;
    setEntry(data);
    if (data.service_id) { const { data: svc } = await supabase.from("services").select("*").eq("id", data.service_id).single(); setService(svc); }
    if (data.barber_id) { const { data: b } = await supabase.from("barbers").select("*").eq("id", data.barber_id).single(); setBarber(b); }
    const { count } = await supabase.from("queue_entries").select("*", { count: "exact", head: true }).eq("shop_id", data.shop_id).eq("status", "waiting").lt("position", data.position);
    setQueueAhead(count || 0);
  }, [entryId]);

  useEffect(() => {
    load();
    const ch = supabase.channel("status-" + entryId)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "queue_entries", filter: `id=eq.${entryId}` }, load)
      .subscribe();
    return () => supabase.removeChannel(ch);
  }, [load, entryId]);

  async function leaveQueue() {
    if (!window.confirm("Are you sure you want to leave the queue?")) return;
    setLeaving(true);
    await supabase.from("queue_entries").update({ status: "cancelled", updated_at: new Date().toISOString() }).eq("id", entryId);
    const { data: remaining } = await supabase.from("queue_entries").select("id").eq("shop_id", entry.shop_id).in("status", ["waiting", "called", "on_chair"]).order("position", { ascending: true });
    if (remaining) for (let i = 0; i < remaining.length; i++) await supabase.from("queue_entries").update({ position: i + 1 }).eq("id", remaining[i].id);
    setLeaving(false);
    const { data: shop } = await supabase.from("shops").select("slug").eq("id", entry.shop_id).single();
    if (shop) window.location.href = `/shop/${shop.slug}`;
  }

  if (!entry) return <div style={{ ...S.app, display: "flex", alignItems: "center", justifyContent: "center" }}><p style={{ color: BRAND.navy }}>Loading your queue status...</p></div>;

  const estWait = service ? queueAhead * service.duration : queueAhead * 20;
  const statusColor = STATUS_COLORS[entry.status] || "#6b7280";

  if (entry.status === "cancelled") return (
    <div style={S.app}>
      <nav style={S.navbar}><Logo size="sm" /></nav>
      <div style={{ ...S.section, maxWidth: 480, textAlign: "center", paddingTop: "4rem" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>👋</div>
        <h2 style={{ ...S.h2, textAlign: "center" }}>You've left the queue</h2>
        <p style={S.muted}>You can rejoin anytime by scanning the QR code again.</p>
      </div>
    </div>
  );

  return (
    <div style={S.app}>
      <nav style={S.navbar}><Logo size="sm" onClick={() => window.location.href = "/"} /></nav>
      <div style={{ background: BRAND.navy, padding: "2rem 1.5rem", textAlign: "center" }}>
        <span style={S.badge(entry.status === "waiting" ? BRAND.blue : statusColor)}>{STATUS_LABELS[entry.status]}</span>
        <h2 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: "0.75rem 0 0.25rem" }}>Hey, {entry.customer_name}!</h2>
        <p style={{ color: "#94a3b8", margin: 0, fontSize: 14 }}>Joined at {formatTime(entry.joined_at)}</p>
      </div>
      <div style={{ ...S.section, maxWidth: 480, paddingTop: "1.5rem" }}>
        {entry.status === "waiting" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1rem" }}>
            <div style={S.statCard}><div style={{ ...S.statNum, color: BRAND.blue }}>{queueAhead}</div><div style={S.statLabel}>ahead of you</div></div>
            <div style={S.statCard}><div style={{ ...S.statNum, color: BRAND.navy }}>~{estWait}m</div><div style={S.statLabel}>estimated wait</div></div>
          </div>
        )}
        {entry.status === "called" && (
          <div style={{ ...S.card, background: "#fef3c7", border: "1px solid #fcd34d", textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🔔</div>
            <p style={{ fontWeight: 800, fontSize: 18, margin: "0 0 4px", color: "#92400e" }}>You've been called!</p>
            <p style={{ ...S.muted, color: "#b45309" }}>Please head to the chair now.</p>
          </div>
        )}
        {entry.status === "on_chair" && (
          <div style={{ ...S.card, background: "#d1fae5", border: "1px solid #6ee7b7", textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>✂️</div>
            <p style={{ fontWeight: 800, fontSize: 18, margin: "0 0 4px", color: "#065f46" }}>You're being served!</p>
            {barber && <p style={{ ...S.muted, color: "#047857" }}>Barber: {barber.name}</p>}
          </div>
        )}
        {entry.status === "done" && (
          <div style={{ ...S.card, textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
            <p style={{ fontWeight: 800, fontSize: 18, margin: "0 0 4px", color: BRAND.navy }}>All done!</p>
            <p style={S.muted}>Thanks for visiting. See you next time.</p>
          </div>
        )}
        <div style={{ ...S.card, marginTop: "1rem" }}>
          <p style={S.h3}>Your booking</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <p style={S.muted}>Service: <strong style={{ color: BRAND.navy }}>{service?.name || "—"}</strong></p>
            {barber && <p style={S.muted}>Barber: <strong style={{ color: BRAND.navy }}>{barber.name}</strong></p>}
            <p style={S.muted}>Queue position: <strong style={{ color: BRAND.navy }}>#{entry.position}</strong></p>
          </div>
        </div>
        {(entry.status === "waiting" || entry.status === "called") && (
          <button style={{ ...S.btn("danger"), width: "100%", padding: 12, borderRadius: 10, marginTop: 8 }} onClick={leaveQueue} disabled={leaving}>
            {leaving ? "Leaving..." : "Leave queue"}
          </button>
        )}
        <p style={{ ...S.muted, textAlign: "center", marginTop: "1rem" }}>This page updates automatically — no need to refresh.</p>
      </div>
    </div>
  );
}

// ─── ADMIN DASHBOARD ──────────────────────────────────────────
function AdminDashboard({ user, onLogout }) {
  const [shop, setShop] = useState(null);
  const [queue, setQueue] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [tab, setTab] = useState("queue");
  const [shopName, setShopName] = useState("");
  const [shopSlug, setShopSlug] = useState("");
  const [newBarber, setNewBarber] = useState("");
  const [newBarberPin, setNewBarberPin] = useState("");
  const [newSvcName, setNewSvcName] = useState("");
  const [newSvcPrice, setNewSvcPrice] = useState("");
  const [newSvcDur, setNewSvcDur] = useState("");
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [editingBarber, setEditingBarber] = useState(null);

  const shopUrl = shop ? window.location.origin + "/shop/" + shop.slug : "";

  const loadQueue = useCallback(async (shopId) => {
    const { data } = await supabase.from("queue_entries")
      .select("*, services(name, price, duration), barbers(name)")
      .eq("shop_id", shopId).not("status", "eq", "done").not("status", "eq", "cancelled")
      .order("position", { ascending: true });
    setQueue(data || []);
  }, []);

  useEffect(() => {
    if (!user) return;
    async function init() {
      const { data: shopData } = await supabase.from("shops").select("*").eq("owner_id", user.id).single();
      if (!shopData) return;
      setShop(shopData);
      loadQueue(shopData.id);
      const { data: b } = await supabase.from("barbers").select("*").eq("shop_id", shopData.id);
      setBarbers(b || []);
      const { data: s } = await supabase.from("services").select("*").eq("shop_id", shopData.id);
      setServices(s || []);
    }
    init();
  }, [user, loadQueue]);

  useEffect(() => {
    if (!shop) return;
    const ch = supabase.channel("admin-queue-" + shop.id)
      .on("postgres_changes", { event: "*", schema: "public", table: "queue_entries", filter: `shop_id=eq.${shop.id}` }, () => loadQueue(shop.id))
      .subscribe();
    return () => supabase.removeChannel(ch);
  }, [shop, loadQueue]);

  async function recalcPositions(shopId) {
    const { data } = await supabase.from("queue_entries").select("id").eq("shop_id", shopId).in("status", ["waiting", "called", "on_chair"]).order("position", { ascending: true });
    if (data) for (let i = 0; i < data.length; i++) await supabase.from("queue_entries").update({ position: i + 1 }).eq("id", data[i].id);
  }

  function copyLink() { navigator.clipboard.writeText(shopUrl); setCopied(true); setTimeout(() => setCopied(false), 2000); }

  async function createShop() {
    if (!shopName.trim()) return alert("Please enter a shop name.");
    if (!shopSlug.trim()) return alert("Please enter a URL slug.");
    const { data, error } = await supabase.from("shops").insert({ name: shopName, slug: shopSlug, owner_id: user.id }).select().single();
    if (error) { alert(error.message); return; }
    setShop(data);
  }

  async function updateStatus(entryId, status, barberId) {
    const update = { status, updated_at: new Date().toISOString() };
    if (barberId) update.barber_id = barberId;
    await supabase.from("queue_entries").update(update).eq("id", entryId);
    if (status === "done" && barberId) {
      const entry = queue.find((q) => q.id === entryId);
      const price = entry?.services?.price || 0;
      await supabase.rpc("increment_earnings", { barber_id: barberId, amount: price });
    }
    if (status === "done" || status === "cancelled") await recalcPositions(shop.id);
    loadQueue(shop.id);
  }

  async function addBarber() {
    if (!newBarber.trim()) return alert("Please enter a barber name.");
    if (!newBarberPin.trim()) return alert("Please set a PIN for this barber.");
    if (newBarberPin.length < 4) return alert("PIN must be at least 4 digits.");
    const { data } = await supabase.from("barbers").insert({ shop_id: shop.id, name: newBarber.trim(), pin: newBarberPin }).select().single();
    setBarbers([...barbers, data]);
    setNewBarber(""); setNewBarberPin("");
  }

  async function deleteBarber(id) {
    if (!window.confirm("Delete this barber?")) return;
    await supabase.from("barbers").delete().eq("id", id);
    setBarbers(barbers.filter((b) => b.id !== id));
  }

  async function saveBarber(id, name, pin) {
    if (!name.trim()) return alert("Name cannot be empty.");
    await supabase.from("barbers").update({ name: name.trim(), pin }).eq("id", id);
    setBarbers(barbers.map((b) => b.id === id ? { ...b, name: name.trim(), pin } : b));
    setEditingBarber(null);
  }

  async function toggleBarber(id, isActive) {
    await supabase.from("barbers").update({ is_active: !isActive }).eq("id", id);
    setBarbers(barbers.map((b) => b.id === id ? { ...b, is_active: !isActive } : b));
  }

  async function addService() {
    if (!newSvcName.trim()) return alert("Please enter a service name.");
    if (!newSvcPrice || isNaN(newSvcPrice) || parseFloat(newSvcPrice) <= 0) return alert("Please enter a valid price.");
    if (!newSvcDur || isNaN(newSvcDur) || parseInt(newSvcDur) <= 0) return alert("Please enter a valid duration.");
    const { error } = await supabase.from("services").insert({ shop_id: shop.id, name: newSvcName.trim(), price: parseFloat(newSvcPrice), duration: parseInt(newSvcDur) });
    if (error) { alert(error.message); return; }
    const { data: refreshed } = await supabase.from("services").select("*").eq("shop_id", shop.id);
    setServices(refreshed || []);
    setNewSvcName(""); setNewSvcPrice(""); setNewSvcDur("");
  }

  async function deleteService(id) {
    if (!window.confirm("Delete this service?")) return;
    await supabase.from("services").delete().eq("id", id);
    setServices(services.filter((s) => s.id !== id));
  }

  async function saveService(id, name, price, duration) {
    if (!name.trim()) return alert("Name cannot be empty.");
    await supabase.from("services").update({ name: name.trim(), price: parseFloat(price), duration: parseInt(duration) }).eq("id", id);
    setServices(services.map((s) => s.id === id ? { ...s, name: name.trim(), price: parseFloat(price), duration: parseInt(duration) } : s));
    setEditingService(null);
  }

  async function callNext() {
    const next = queue.find((q) => q.status === "waiting");
    if (!next) return alert("No customers waiting.");
    await supabase.from("queue_entries").update({ status: "called", updated_at: new Date().toISOString() }).eq("id", next.id);
    loadQueue(shop.id);
  }

  const todayEarnings = barbers.reduce((sum, b) => sum + (b.daily_earnings || 0), 0);
  const waitingCount = queue.filter((q) => q.status === "waiting").length;
  const onChairCount = queue.filter((q) => q.status === "on_chair").length;
  const calledCount = queue.filter((q) => q.status === "called").length;

  if (!shop) return (
    <div style={S.app}>
      <nav style={S.navbar}>
        <Logo size="sm" />
        <button style={S.btn("ghost-white")} onClick={onLogout}>Logout</button>
      </nav>
      <div style={{ ...S.section, maxWidth: 480, paddingTop: "2rem" }}>
        <h2 style={S.h2}>Set up your shop</h2>
        <p style={{ ...S.muted, marginBottom: "1.5rem" }}>You'll get a shareable link customers use to join your queue.</p>
        <label style={S.label}>Shop name</label>
        <input style={S.input} placeholder="The Barber Shop" value={shopName} onChange={(e) => setShopName(e.target.value)} />
        <label style={S.label}>URL slug (no spaces)</label>
        <input style={S.input} placeholder="my-barber-shop" value={shopSlug} onChange={(e) => setShopSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))} />
        <p style={{ ...S.muted, marginBottom: "1rem" }}>Customer link will be: <strong style={{ color: BRAND.navy }}>/shop/{shopSlug || "your-slug"}</strong></p>
        <button style={{ ...S.gradBtn, width: "100%", padding: 13, borderRadius: 10 }} onClick={createShop}>Create Shop</button>
      </div>
    </div>
  );

  return (
    <div style={S.app}>
      <nav style={S.navbar}>
        <Logo size="sm" />
        <div style={S.navRight}>
          <span style={{ color: "#94a3b8", fontSize: 12, display: "none" }}>{shop.slug}</span>
          <button style={S.btn("ghost-white")} onClick={onLogout}>Logout</button>
        </div>
      </nav>

      {/* Stats bar */}
      <div style={{ background: BRAND.navy, padding: "1.25rem 1.5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", margin: "0 0 1rem", fontSize: 18, fontWeight: 700 }}>{shop.name} — Live Dashboard</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: 12 }}>
            {[
              { num: waitingCount, label: "Waiting" },
              { num: calledCount, label: "Called" },
              { num: onChairCount, label: "On Chair" },
              { num: `£${todayEarnings.toFixed(0)}`, label: "Today's earnings" },
            ].map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "0.9rem", textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={S.section}>
        {/* Join link */}
        <div style={{ ...S.card, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ ...S.h3, marginBottom: 2 }}>Customer join link</p>
            <p style={{ ...S.muted, wordBreak: "break-all" }}>{shopUrl}</p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button style={S.gradBtn} onClick={copyLink}>{copied ? "✓ Copied!" : "Copy link"}</button>
            <button style={S.btn("ghost")} onClick={() => setShowQR(!showQR)}>{showQR ? "Hide QR" : "Show QR"}</button>
          </div>
        </div>
        {showQR && (
          <div style={{ ...S.card, textAlign: "center", padding: "2rem" }}>
            <p style={{ ...S.h3, marginBottom: "1rem" }}>QR Code — print and display in your shop</p>
            <QRCode url={shopUrl} size={200} />
            <p style={{ ...S.muted, marginTop: "1rem" }}>Customers scan this to join your queue instantly</p>
          </div>
        )}

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "2px solid #c8cbf5", marginBottom: "1.5rem" }}>
          {["queue", "barbers", "services"].map((t) => (
            <button key={t} style={S.tab(tab === t)} onClick={() => setTab(t)}>
              {t === "queue" ? `Queue (${queue.length})` : t}
            </button>
          ))}
        </div>

        {/* Queue Tab */}
        {tab === "queue" && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem", flexWrap: "wrap" }}>
              <button style={{ ...S.gradBtn, fontSize: 15, padding: "10px 22px" }} onClick={callNext}>📢 Call Next Customer</button>
              <span style={S.muted}>{waitingCount} waiting · {onChairCount} on chair</span>
            </div>
            {queue.length === 0 && (
              <div style={{ ...S.cardBlue, textAlign: "center", padding: "2.5rem" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>📭</div>
                <p style={{ fontWeight: 600, margin: "0 0 4px", color: BRAND.navy }}>Queue is empty</p>
                <p style={S.muted}>Share your link and customers will appear here.</p>
              </div>
            )}
            {queue.map((entry) => (
              <div key={entry.id} style={{ ...S.card, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#eef0fb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: BRAND.navy, flexShrink: 0 }}>#{entry.position}</div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: BRAND.navy }}>{entry.customer_name}</div>
                  <div style={S.muted}>{entry.services?.name} · Joined {formatTime(entry.joined_at)}</div>
                  {entry.barbers && <div style={{ ...S.muted, color: BRAND.blue }}>→ {entry.barbers.name}</div>}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={S.badge(STATUS_COLORS[entry.status])}>{STATUS_LABELS[entry.status]}</span>
                  {entry.status === "called" && (
                    <button style={S.btn("success")} onClick={() => updateStatus(entry.id, "on_chair", entry.barber_id)}>✓ On Chair</button>
                  )}
                  {entry.status === "on_chair" && (
                    <button style={S.btn("success")} onClick={() => updateStatus(entry.id, "done", entry.barber_id)}>✓ Mark done</button>
                  )}
                  {entry.status === "waiting" && (
                    <button style={S.btn("danger")} onClick={() => updateStatus(entry.id, "cancelled")}>Cancel</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Barbers Tab */}
        {tab === "barbers" && (
          <div>
            <h2 style={S.h2}>Your barbers</h2>
            <div style={{ ...S.cardBlue, marginBottom: "1rem" }}>
              <p style={{ ...S.muted, margin: 0 }}>💡 Barbers log in at <strong>zentriqflow.com/barber</strong> using their name and PIN.</p>
            </div>
            {barbers.length === 0 && <p style={S.muted}>No barbers added yet.</p>}
            {barbers.map((b) => (
              <div key={b.id} style={{ ...S.card, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #4a7fd8 0%, #7b4fd8 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, color: "#fff", flexShrink: 0 }}>
                  {b.name[0].toUpperCase()}
                </div>
                {editingBarber === b.id ? (
                  <div style={{ flex: 1 }}>
                    <input style={S.input} defaultValue={b.name} id={`barber-name-${b.id}`} placeholder="Name" />
                    <input style={S.input} defaultValue={b.pin || ""} id={`barber-pin-${b.id}`} placeholder="PIN" maxLength={6} />
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={S.btn("success")} onClick={() => saveBarber(b.id, document.getElementById(`barber-name-${b.id}`).value, document.getElementById(`barber-pin-${b.id}`).value)}>Save</button>
                      <button style={S.btn("ghost")} onClick={() => setEditingBarber(null)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: BRAND.navy }}>{b.name}</div>
                      <div style={S.muted}>PIN: {b.pin ? "••••" : <span style={{ color: "#ef4444" }}>Not set</span>} · Today: <strong style={{ color: BRAND.navy }}>£{(b.daily_earnings || 0).toFixed(2)}</strong></div>
                    </div>
                    <span style={S.badge(b.is_active ? "#10b981" : "#6b7280")}>{b.is_active ? "Active" : "Off"}</span>
                    <button style={S.btn("ghost")} onClick={() => toggleBarber(b.id, b.is_active)}>{b.is_active ? "Deactivate" : "Activate"}</button>
                    <button style={S.btn("ghost")} onClick={() => setEditingBarber(b.id)}>Edit</button>
                    <button style={S.btn("danger")} onClick={() => deleteBarber(b.id)}>Delete</button>
                  </>
                )}
              </div>
            ))}
            <div style={S.card}>
              <p style={S.h3}>Add a barber</p>
              <label style={S.label}>Barber name</label>
              <input style={S.input} placeholder="Barber name" value={newBarber} onChange={(e) => setNewBarber(e.target.value)} />
              <label style={S.label}>PIN (barber uses this to log in)</label>
              <input style={S.input} placeholder="e.g. 1234" maxLength={6} value={newBarberPin} onChange={(e) => setNewBarberPin(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addBarber()} />
              <button style={S.gradBtn} onClick={addBarber}>Add Barber</button>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {tab === "services" && (
          <div>
            <h2 style={S.h2}>Services</h2>
            {services.length === 0 && <p style={S.muted}>No services added yet.</p>}
            {services.map((s) => (
              <div key={s.id} style={{ ...S.card, display: "flex", alignItems: "center", gap: 12 }}>
                {editingService === s.id ? (
                  <div style={{ flex: 1 }}>
                    <input style={S.input} defaultValue={s.name} id={`svc-name-${s.id}`} placeholder="Service name" />
                    <div style={S.grid2}>
                      <input style={S.input} defaultValue={s.price} id={`svc-price-${s.id}`} type="number" placeholder="Price" />
                      <input style={S.input} defaultValue={s.duration} id={`svc-dur-${s.id}`} type="number" placeholder="Duration" />
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={S.btn("success")} onClick={() => saveService(s.id, document.getElementById(`svc-name-${s.id}`).value, document.getElementById(`svc-price-${s.id}`).value, document.getElementById(`svc-dur-${s.id}`).value)}>Save</button>
                      <button style={S.btn("ghost")} onClick={() => setEditingService(null)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: BRAND.navy }}>{s.name}</div>
                      <div style={S.muted}>{s.duration} min</div>
                    </div>
                    <span style={{ fontWeight: 700, color: BRAND.navy, fontSize: 16 }}>£{s.price}</span>
                    <button style={S.btn("ghost")} onClick={() => setEditingService(s.id)}>Edit</button>
                    <button style={S.btn("danger")} onClick={() => deleteService(s.id)}>Delete</button>
                  </>
                )}
              </div>
            ))}
            <div style={S.card}>
              <p style={S.h3}>Add a service</p>
              <label style={S.label}>Service name</label>
              <input style={S.input} placeholder="Haircut & Beard" value={newSvcName} onChange={(e) => setNewSvcName(e.target.value)} />
              <div style={S.grid2}>
                <div>
                  <label style={S.label}>Price (£)</label>
                  <input style={S.input} type="number" placeholder="25" value={newSvcPrice} onChange={(e) => setNewSvcPrice(e.target.value)} />
                </div>
                <div>
                  <label style={S.label}>Duration (min)</label>
                  <input style={S.input} type="number" placeholder="30" value={newSvcDur} onChange={(e) => setNewSvcDur(e.target.value)} />
                </div>
              </div>
              <button type="button" style={S.gradBtn} onClick={addService}>Add Service</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
