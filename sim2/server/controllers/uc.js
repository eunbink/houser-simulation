module.exports = {
  createProperty: (req, res, next) => {
    const dbInstance = req.app.post("db");
    const { userid } = req.session.user;
    const {
      id,
      propertyname,
      propertydescription,
      address,
      city,
      state,
      zip,
      imgurl,
      loamamount,
      monthlymortgage,
      desiredrent
    } = req.body;

    dbInstance
      .create_property([
        id,
        propertyname,
        propertydescription,
        address,
        city,
        state,
        zip,
        imgurl,
        loamamount,
        monthlymortgage,
        desiredrent,
        userid
      ])
      .then(property => {
        res
          .status(200)
          .send()
          .catch(() => {
            res.status(500).send();
          });
      });
  },

  filterProperty: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { userid } = req.session.user;
    const { desiredRent } = req.body;
    dbInstance
      .filter_property([desiredRent, userid])
      .then(properties => {
        res.status(200).send(properties);
      })
      .catch(() => res.status(500).send());
  },

  deleteProperty: (req, res, next) => {
    const dbInstance = req.app.delete("db");
    const { params } = req;

    dbInstance
      .delete_property([params.id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  returnProperty: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { userid } = req.session.user;
    dbInstance.return_property([userid]).then(properties => {
      res.status(200).send(properties);
    });
  }
};
