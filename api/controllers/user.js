export function list(req, res) {
  res.json({
    list: [
      {
        id: 1,
        name: "tom",
      },
      {
        id: 2,
        name: "jack",
      },
    ],
  });
}

export function deleteUser(req, res) {
  res.send("Got a DELETE request");
}
