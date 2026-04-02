import express from 'express';
import { createMovie, deleteMovie, getMovie, updateMovie } from '../controller/movie.controller.js';

const router = express.Router();

router.get('/', getMovie);
router.post('/movie', createMovie)
router.put('/movie/:id', updateMovie)
router.delete('/movie/:id', deleteMovie)


export default router;