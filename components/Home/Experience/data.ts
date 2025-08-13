import type { Exp } from "./types";

export const EXPERIENCE: Exp[] = [
  {
    company: "Infosys Limited",
    role: "Data Engineer",
    period: "Aug 2022 – Aug 2024",
    location: "Chennai, India",
    logo: "/images/InfosysLogo.png",
    bullets: [
      "Built scalable data pipelines with Apache Airflow, AWS Glue, and S3—processing 200M+ records monthly with 40% lower ingestion latency.",
      "Optimized SQL models in PostgreSQL/Redshift with indexing and partitioning, reducing query time by 55%.",
      "Developed Tableau dashboards integrated with ETL workflows, improving decision-making speed by 25%.",
      "Automated anomaly detection workflows with PySpark and AWS Lambda, reducing manual validation time by 70%.",
    ],
    tech: ["Airflow", "AWS Glue", "S3", "PostgreSQL", "Redshift", "PySpark", "Tableau"],
  },
  {
    company: "Infosys Limited",
    role: "Data Engineer Intern",
    period: "Aug 2022 – Jan 2023",
    location: "Chennai, India",
    logo: "/images/InfosysLogo.png",
    bullets: [
      "Migrated on-prem ETL workflows to AWS Glue and Snowflake, cutting infrastructure costs by 35%.",
      "Developed Python automation scripts to process multi-format API data (CSV, JSON, XML) into PostgreSQL, reducing upload time from 4 hours to 15 minutes.",
      "Implemented data validation pipelines with Pandas and Great Expectations, ensuring 98% accuracy before production loads.",
    ],
    tech: ["AWS Glue", "Snowflake", "PostgreSQL", "Python", "Pandas", "Great Expectations"],
  }
];
