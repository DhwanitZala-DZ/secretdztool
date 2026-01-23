(function () {
  const API = "https://secrettooldz.zya.me/api/verify.php";
  const LICENSE_KEY = "PUBLIC_KEY_001";

  async function run() {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: LICENSE_KEY,
          domain: location.hostname,
          t: Date.now()
        })
      });

      const data = await res.json();

      if (!data.allowed) {
        console.warn("License inactive");
        return;
      }

      // Execute protected code
      eval(data.payload);

    } catch (e) {
      console.error("License server unreachable");
    }
  }

  run();
})();
