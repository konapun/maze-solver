'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mazeSolver = require('@maze-solver/core');
var mazeSolver__default = _interopDefault(mazeSolver);
var express = require('express');
var express__default = _interopDefault(express);
var bodyParser = _interopDefault(require('body-parser'));

var mazeController = {
  // POST /api/maze
  async create(req, res) {
    const {
      maze
    } = req.body;

    try {
      const path = mazeSolver__default(mazeString).solve(mazeSolver.algorithm.A_STAR);
      res.send({
        path
      });
    } catch (e) {
      res.status(401).send({
        message: e.message
      });
    }
  },

  async solve(req, res) {},

  async listAlgorithms(req, res) {}

};

const router = express.Router();
router.post('/maze/upload', mazeController.create);
router.get('/maze/solve/:id', mazeController.solve);
router.get('/maze/algorithm', mazeController.listAlgorithms);

const app = express__default();
app.use(bodyParser.json());
app.use('/api', router);
app.listen(3000, () => {
  // TODO: make configurable
  console.log('Listening on port 3000');
});
