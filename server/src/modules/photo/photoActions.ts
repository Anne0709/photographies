import type { RequestHandler } from "express";
import photoRepository from "./photoRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const result = await photoRepository.readAll();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const readPhotoById: RequestHandler = async (req, res, next) => {
  try {
    const photoId = Number(req.params.id);
    const result = await photoRepository.readPhotoById(photoId);

    if (!result) {
      res.status(404).json("photo not found");
    } else {
      res.json(result);
    }
  } catch (err) {
    next(err);
  }
};

const create: RequestHandler = async (req, res, next) => {
  try {
    const create = await photoRepository.create(req.body);
    if (create) {
      res.status(200).json("The photo is added 🎊");
    } else {
      res.status(404).json("The photo not install 😩");
    }
  } catch (err) {
    next(err);
  }
};

const updatePhoto: RequestHandler = async (req, res, next) => {
  try {
    const newPhoto = {
      id: Number(req.params.id),
      title: req.body.title,
      image: req.body.image,
      place: req.body.place,
    };
    const result = await photoRepository.update(newPhoto);
    if (result) {
      res.status(200).json(newPhoto);
    } else {
      res.status(404).json("The photo could not be updated 😩");
    }
  } catch (err) {
    next(err);
  }
};

const deletePhoto: RequestHandler = async (req, res, next) => {
  try {
    const photoId = Number(req.params.id);

    const result = await photoRepository.delete(photoId);
    if (result) {
      res.status(200).json("The photo is delete");
    } else {
      res.status(404).json("The photo could not be delete 😩");
    }
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  readPhotoById,
  create,
  updatePhoto,
  deletePhoto,
};
