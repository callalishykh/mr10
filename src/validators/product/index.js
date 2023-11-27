import Joi from "joi";

const ProductValidator = {
  create: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().max(50).required(),
        product_sales: Joi.array()
          .items(
            Joi.object({
              name: Joi.string().min(3).max(50).required(),
              price: Joi.number().min(3).max(50).required(),
            })
          )
          .required(),
      });
      const { error, value } = schema.validate(body);
      if (error) {
        return res.status(400).json({
          message: "Invalid data",
          error,
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        error,
        message: "Something bad happend",
      });
    }
  },
};

export default ProductValidator;
