export default async function handler(req, res) {
  if (req.method === "GET") {
    const authorId = req.query.id;
    const response = await fetch(
      `https://openlibrary.org/authors/${authorId}.json`
    );
    const data = await response.json();
    res.status(200).json({ data });
  } else {
    // Handle any other HTTP method
  }
}
