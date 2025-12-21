const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const MONGO_URI = "mongodb+srv://beastboyjr047:Sonisharma1@cluster0.vgzcjzw.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error(' Connection error:', err));

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  batch: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).send("Student not found");
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    res.status(200).send({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});