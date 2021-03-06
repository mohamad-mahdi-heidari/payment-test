const express = require("express");
const router = express.Router();
const controllers = require("./../../src/http/controllers/user.controller");
const {validateCode,validateLogin}=require('./../../src/http/validators/user.validator')
const validator=require('./../../src/middlewares/validator')
router
    .route("/login")
    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Login user with username and password
     *     tags:
     *        - user
     *     parameters:
     *      - name : body
     *        in : body
     *        schema:
     *          type: object
     *          required:
     *            - username
     *            - password
     *          properties:
     *            username:
     *              type: string
     *            password:
     *              type: string
     *            role:
     *              type: string
     *              enum:
     *               basic
     *               admin
     *     security:
     *        - authorization: []
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               username:
     *                   type: string
     *                   description: username.
     *                   example: ali_reza
     *               password:
     *                   type: string
     *                   description: username.
     *                   example: ali_reza
     *     responses:
     *       200:
     *         description:  response info.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status :
     *                   type: boolean
     *                   description: response status.
     *                   example: true
     *                 message :
     *                   type: string
     *                   description: response message.
     *                   example: success
     *                 result :
     *                   type: object
     *                   description: response data
     *
     */
    .post(validator(validateLogin,"body"),controllers.login);

router
    .route("/code")
    /**
     * @swagger
     * /code:
     *   post:
     *     summary: verify user with username and password and code
     *     tags:
     *        - user
     *     parameters:
     *      - name : body
     *        in : body
     *        description : body for auth
     *        schema:
     *          type: object
     *          required:
     *            - username
     *            - password
     *            - code
     *          properties:
     *            username:
     *              type: string
     *            password:
     *              type: string
     *            code:
     *              type: string
     *     security:
     *        - authorization: []
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               username:
     *                   type: string
     *                   description: username.
     *                   example: ali_reza
     *     responses:
     *       200:
     *         description:  response info.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status :
     *                   type: boolean
     *                   description: response status.
     *                   example: true
     *                 message :
     *                   type: string
     *                   description: response message.
     *                   example: success
     *                 result :
     *                   type: object
     *                   description: response data
     *
     */
    .post(validator(validateCode,"body"), controllers.code);
module.exports = router;
