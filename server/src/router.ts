import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import photoActions from "./modules/photo/photoActions";

router.get("/api/photo", photoActions.browse);
router.get("/api/photo/:id", photoActions.readPhotoById);
router.post("/api/photo", photoActions.create);
router.put("/api/photo/:id", photoActions.updatePhoto);
router.delete("/api/photo/:id", photoActions.deletePhoto);

/* ************************************************************************* */

export default router;
