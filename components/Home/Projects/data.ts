import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "nl2sql-rag",
    title: "NL2SQL with Retrieval-Augmented Generation",
    blurb: "Fine-tuned T5 with schema-aware RAG for SQL query generation.",
    description:
      "Developed a natural language to SQL pipeline using T5-small fine-tuned on Spider dataset, enhanced with schema retrieval via FAISS and SentenceTransformers to reduce hallucinations and improve execution accuracy.",
    tags: ["NLP", "Machine Learning", "RAG"],
    stack: ["PyTorch", "Hugging Face Transformers", "T5", "RAG", "FAISS", "SentenceTransformers"],
    highlights: [
      "Achieved 44.96% execution match accuracy and 31.13% exact match accuracy on Spider test set.",
      "Improved simple query execution match accuracy to 63.34% using RAG for schema retrieval.",
      "Validated generated SQL against SQLite3 database for syntactic and execution correctness.",
    ],
    repo: "https://github.com/harish2412/NL2SQL-RAG",
    images: ["/images/NL2SQL.png", "/images/NL2SQL2.png"],
  },
  {
    id: "stroke-risk",
    title: "Predicting Stroke Risk from Health Data",
    blurb: "ML models to detect early stroke risk with visualized insights.",
    description:
      "Built classification models using Scikit-learn to identify early indicators of stroke risk from health datasets, with feature engineering, scaling, and dimensionality reduction.",
    tags: ["Machine Learning", "Healthcare", "Analytics"],
    stack: ["Python", "Scikit-learn", "Pandas", "Tableau"],
    highlights: [
      "Performed preprocessing including handling missing values, scaling, and PCA.",
      "Visualized key features influencing predictions via interactive Tableau dashboards.",
    ],
    repo: "https://github.com/harish2412/StrokeRiskPrediction",
    images: ["/images/StrokeRisk.png"],
  },
  {
    id: "ev-charging",
    title: "EV Vehicle Charging Analysis",
    blurb: "Analyzed EV charging session data to forecast demand.",
    description:
      "Designed optimized SQL Server schema and real-time ingestion pipelines for EV charging station data. Applied statistical analysis to detect patterns and forecast energy demand.",
    tags: ["Data Engineering", "Analytics"],
    stack: ["SQL Server", "Python", "Pandas", "Matplotlib", "Tableau"],
    highlights: [
      "Identified station utilization rates and peak usage times.",
      "Developed Tableau dashboards for geographical utilization insights.",
    ],
    repo: "https://github.com/harish2412/EVChargingAnalysis",
    images: ["/images/EVCharging.png"],
  }
];
