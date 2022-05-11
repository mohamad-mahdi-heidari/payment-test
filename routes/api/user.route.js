const express = require("express");
const router = express.Router();
const controllers = require("./../../src/http/controllers/user.controller");

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
     *        description : body for auth
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
    .post( controllers.login);

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
    .post( controllers.code);
module.exports = router;
