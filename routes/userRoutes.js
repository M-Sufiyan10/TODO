import {Router } from "express"
const userRouter= Router()

userRouter.get('/', (req,res) => 
{
    res.send("get all the users")
})

userRouter.get("/:id" , (req, res) =>
{
    res.send(`get the user with the id ${req.params.id}`)
})

userRouter.post("/", (req, res) =>
{
    res.send("create a new user")
})

userRouter.put("/:id", (req, res) =>
{
    res.send(`update the user with the id ${req.params.id}`)
})

userRouter.delete("/:id", (req, res) =>
{
    res.send(`delete a user with the id ${req.params.id}`)
}
)

export default userRouter;