module.exports = {
  docs: [
    "index",
    {
      type: "category",
      label: "Générateurs de site statique",
      items: [
        {
          type: "autogenerated", dirName: "ssg"
        }
      ]
    },
    {
      type: "category",
      label: "Outils",
      items: [
        {
          type: "autogenerated", dirName: "tool"
        }
      ]
    },
    {
      type: "category",
      label: "Node.js",
      items: [
        {
          type: "autogenerated", dirName: "node"
        }
      ]
    },
  ]
};