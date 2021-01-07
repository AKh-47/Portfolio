import mailer from "../../utils/mailer";

export default async (req, res) => {
  const { name, email, phone, message } = req.body;
  // await mailer({});
};
