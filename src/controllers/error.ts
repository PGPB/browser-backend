export const e404: CommonController = (_req, res) => {
    res.status(404).send("Not found");
};
