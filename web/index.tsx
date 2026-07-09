import { registerWidget, type WidgetContext } from "@togo-framework/widget";

export function Availability({ settings }: WidgetContext) {
  const open = settings.open !== false;
  const msg = (settings.message as string) ?? "Available for freelance & consulting";
  return (
    <div className="wx-availability" style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ width: 10, height: 10, borderRadius: "50%", background: open ? "#3ecf7e" : "#888",
        boxShadow: open ? "0 0 10px #3ecf7e" : "none" }} />
      <div>
        <div style={{ fontWeight: 600 }}>{open ? "Available now" : "Not available"}</div>
        <div style={{ opacity: 0.7, fontSize: 13 }}>{msg}</div>
      </div>
    </div>
  );
}
registerWidget({ key: "availability", title: "Availability", defaultZone: "sidebar",
  defaultSettings: { open: true }, Comp: Availability });
