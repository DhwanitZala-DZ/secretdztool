(async () => {
  const KEY_FILE = "https://raw.githubusercontent.com/DhwanitZala-DZ/secretdztool/main/keys.txt";
  const PAYLOAD_FILE = "https://raw.githubusercontent.com/DhwanitZala-DZ/secretdztool/main/payload.js";

  const userKey = prompt("Enter your license key:");
  if (!userKey) return alert("No key provided.");

  try {
    // Fetch keys (cache-buster to avoid stale copy)
    const keyRes = await fetch(KEY_FILE + "?cb=" + Date.now());
    if (!keyRes.ok) throw new Error("Unable to load key list");

    const keyText = await keyRes.text();
    const lines = keyText.split("\n").map(l => l.trim()).filter(Boolean);

    // Check system ON/OFF
    const systemLine = lines.find(l => l.startsWith("SYSTEM="));
    if (!systemLine || systemLine.split("=")[1] !== "ON") {
      alert("❌ System is currently disabled by developer.");
      return;
    }

    // Check key validity and expiry
    let valid = false;
    for (const line of lines) {
      if (line.includes("|")) {
        const [key, dateStr] = line.split("|");
        if (key === userKey) {
          // Check date
          const expiry = new Date(dateStr);
          if (new Date() <= expiry) valid = true;
          else {
            alert("❌ Key expired.");
            return;
          }
        }
      }
    }

    if (!valid) {
      alert("❌ Invalid license key.");
      return;
    }

    // Load payload
    const payloadRes = await fetch(PAYLOAD_FILE + "?cb=" + Date.now());
    if (!payloadRes.ok) throw new Error("Payload missing");

    const code = await payloadRes.text();
    if (code.length < 10) throw new Error("Empty payload");

    eval(code);

  } catch (err) {
    console.error("Loader error:", err);
    alert("⚠️ Script unavailable now.");
  }
})();
