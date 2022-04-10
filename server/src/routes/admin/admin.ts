import express from "express";
import makeValidator from "../../middlewares/validator-middleware";
import makeExpressCallback from "../../express-callback";

import {
  deleteAdminRules,
  updateAdminRules,
  uploadAdminAvatarRules,
  getAdminRules,
  createUserRules,
} from "../../controllers/admin/admin/validators";
import {
  getAdminController,
  updateAdminController,
  uploadAdminThumbnailController,
  getAdminsController,
  deleteAdminController,
  createUserController,
} from "../../controllers/admin/admin";

const adminRouter = express.Router();

adminRouter.get(
  "/:admin_id",
  makeValidator(getAdminRules),
  makeExpressCallback(getAdminController)
);

adminRouter.post(
  "/create-user",
  makeValidator(createUserRules),
  makeExpressCallback(createUserController)
);

adminRouter.put(
  "/:admin_id",
  makeValidator(updateAdminRules),
  makeExpressCallback(updateAdminController)
);

adminRouter.get("/", makeExpressCallback(getAdminsController));

adminRouter.delete(
  "/:admin_id",
  makeValidator(deleteAdminRules),
  makeExpressCallback(deleteAdminController)
);

export default adminRouter;