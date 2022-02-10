const asyncHandler = require('express-async-handler')

// @desc  Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHanlder(async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

// @desc  Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHanlder(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add text field')
  }
  res.status(200).json({message:'Set goal'})
})

// @desc  Update goala
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHanlder(async (req, res) => {
  res.status(200).json({message:`Update goal ${req.params.id}`})
})

// @desc  Deete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHanlder(async (req, res) => {
  res.status(200).json({message:`Delete goal ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}