export default function handler(req, res) {
  const { to } = req.query;

  if (!to) {
    return res.status(400).send("Missing ?to=");
  }

  try {
    // Basic safety: ensure it starts with http or https
    if (!/^https?:\/\//i.test(to)) {
      return res.status(400).send("Invalid URL");
    }

    return res.redirect(302, to);
  } catch (err) {
    return res.status(500).send("Error: " + err.message);
  }
}
