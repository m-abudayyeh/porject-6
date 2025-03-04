const { projectDetailes } = require('../models');

exports.createProject = async (req, res) => {
  try {
    const project = await projectDetailes.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'فشل إنشاء المشروع', details: error.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await projectDetailes.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'فشل جلب المشاريع', details: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await projectDetailes.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'المشروع غير موجود' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'فشل جلب المشروع', details: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await projectDetailes.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'المشروع غير موجود' });

    await project.update(req.body);
    res.status(200).json({ message: 'تم تحديث المشروع بنجاح', project });
  } catch (error) {
    res.status(500).json({ error: 'فشل تحديث المشروع', details: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await projectDetailes.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'المشروع غير موجود' });

    await project.destroy();
    res.status(200).json({ message: 'تم حذف المشروع بنجاح' });
  } catch (error) {
    res.status(500).json({ error: 'فشل حذف المشروع', details: error.message });
  }
};
