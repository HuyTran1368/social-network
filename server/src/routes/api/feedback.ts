import express from "express";
import makeValidator from "../../middlewares/validator-middleware";
import makeExpressCallback from "../../express-callback";

import {
  deleteFeedbackRules,
  createFeedbackRules,
  updateFeedbackRules,
  getFeedbackByIdRules,
} from "../../controllers/api/feedback/validators";
import {
  getFeedbacksController,
  deleteFeedbackController,
  createFeedbackController,
  updateFeedbackController,
} from "../../controllers/api/feedback";

const feedbackRouter = express.Router();

feedbackRouter.get("/", makeExpressCallback(getFeedbacksController));

feedbackRouter.post(
  "/",
  makeValidator(createFeedbackRules),
  makeExpressCallback(createFeedbackController)
);

feedbackRouter.put(
  "/:feedback_id",
  makeValidator(updateFeedbackRules),
  makeExpressCallback(updateFeedbackController)
);

feedbackRouter.delete(
  "/:feedback_id",
  makeValidator(deleteFeedbackRules),
  makeExpressCallback(deleteFeedbackController)
);

export default feedbackRouter;
