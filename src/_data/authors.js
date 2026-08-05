// Single source of truth for the team.
// Consumed by: src/index.html (team cards) and src/articles/article-page.njk
// (author bio + schema.org sameAs). Update a person here and both update.
// Key must exactly match the author names in src/admin/config.yml.
module.exports = {
  "Angie Coleman": {
    title: "Organizational Development & Executive Coach",
    credentials: "MSIOP, ICF-Certified Coach",
    bio: "Industrial-organizational psychology practitioner with 10+ years partnering with CEOs, boards, and senior executives on talent strategy, succession, and culture.",
    strengths: ["Harmony", "Relator", "Responsibility", "Individualization", "Learner"],
    linkedin: "https://www.linkedin.com/in/angie-coleman-coach"
  },
  "Scott Coleman": {
    title: "Strategic & Commercial Advisor",
    credentials: "MBA, Certified Pricing Professional",
    bio: "Decades of senior leadership experience in pricing strategy, commercial optimization, and organizational growth, built across major logistics and rail organizations.",
    strengths: ["Futuristic", "Learner", "Ideation", "Belief", "Deliberative", "Strategic", "Relator"],
    linkedin: "https://www.linkedin.com/in/scoleman-1"
  },
  "Emma Coleman": {
    title: "Brand & Content",
    credentials: "Marketing Communications & Multimedia",
    bio: "Design-minded and detail-driven, Emma brings brand consistency and creative execution to how The Effort Group shows up, from content to visual identity.",
    strengths: ["Discipline", "Input", "Intellection", "Learner", "Achiever"],
    portfolio: "/emma/",
    linkedin: "https://www.linkedin.com/in/emma-coleman-design"
  }
};
