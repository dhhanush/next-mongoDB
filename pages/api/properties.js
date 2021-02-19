import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const listings = await db
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .project({ _id: 1, name: 1, summary: 1, listing_url: 1, images: 1 })
    .toArray();

  res.json(JSON.parse(JSON.stringify(listings)));
}
