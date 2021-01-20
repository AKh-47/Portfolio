import mailer from "../../utils/mailer";

export default async (req, res) => {
  if (!(req.method === "POST")) {
    return res.status(501).end();
  }

  const { name, email, message } = req.body;

  try {
    await mailer({ name, email, message });

    res.status(200).json(true);
  } catch (err) {
    console.log(err);
    res.status(400).json(false);
  }
};
