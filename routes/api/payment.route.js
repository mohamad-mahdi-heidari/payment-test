const express = require("express");
const router = express.Router();
const auth=require('./../../src/middlewares/auth')
const {validateDelete,validateUpdate,validateCreate,validateRead}=require('./../../src/http/validators/payment.validator')
const validator=require('./../../src/middlewares/validator')
const controllers = require("./../../src/http/controllers/payment.controller");
const {roles, resource} = require('./../../src/roles/payment.role');
const {grantAccess} = require("./../../src/middlewares/grant-access");
router
    .route("/")
    /**
     * @swagger
     * /payments:
     *   post:
     *     summary: create new payment
     *     tags:
     *        - payment
     *     parameters:
     *      - name : body
     *        in : body
     *        description : body for payment
     *        schema:
     *          type: object
     *          required:
     *            - plan
     *          properties:
     *            plan:
     *              type: number
     *              example: 2
     *     security:
     *        - authorization: []
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               plan:
     *                   type: number
     *                   description: plan of payment.
     *                   example: 2
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
    .post(auth,grantAccess(resource, roles),validator(validateCreate,"body"),controllers.create)
    /**
     * @swagger
     * /payments:
     *   get:
     *     summary: read all user plan
     *     tags:
     *        - payment
     *     security:
     *        - authorization: []
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
    .get(auth,grantAccess(resource, roles),validator(validateRead,"query"),controllers.read)
    /**
     * @swagger
     * /payments:
     *   put:
     *     summary: update custom payment
     *     tags:
     *        - payment
     *     parameters:
     *      - name : body
     *        in : body
     *        description : body for payment
     *        schema:
     *          type: object
     *          required:
     *            - payment_id
     *            - plan
     *            - url
     *            - status
     *          properties:
     *            payment_id:
     *              type: string
     *            plan:
     *              type: number
     *            url:
     *              type: string
     *            status:
     *              type: string
     *              enum: ['pending','done']
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
    .put(auth,grantAccess(resource, roles),validator(validateUpdate,"body"),controllers.update)
    /**
     * @swagger
     * /payments:
     *   delete:
     *     summary: delete specific payment
     *     tags:
     *        - payment
     *     parameters:
     *      - name : body
     *        in : body
     *        description : body for payment
     *        schema:
     *          type: object
     *          required:
     *            - payment_id
     *          properties:
     *            payment_id:
     *              type: string
     *
     *     security:
     *        - authorization: []
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               payment_id:
     *                   type: string
     *                   description: id of payment
     *
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
    .delete(auth,grantAccess(resource, roles),validator(validateDelete,"body"),controllers.remove)

module.exports = router;
