export default (req, res) => {
  const {
    query: { id }
  } = req;

  res.status(200).json({
    name: "Sirwan Afifi",
    id: id
  });
};
