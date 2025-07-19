const form = document.getElementById("greet-form");
const nameInput = document.getElementById("name-input");
const responseBox = document.getElementById("response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Build the request body
  const data = { name: nameInput.value };

  try {
    // POST to FastAPI
    const res = await fetch("http://127.0.0.1:8000/api/greet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    responseBox.textContent = json.message;   // “Hello, …!”
  } catch (err) {
    responseBox.textContent = "Server unreachable 😢";
    console.error(err);
  }
});
