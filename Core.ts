// app.ts
const form = document.getElementById("postForm") as HTMLFormElement;
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const content = (document.getElementById("postContent") as HTMLInputElement).value;
  await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
});
