import re

with open("src/app/projects/projects.component.ts", "r") as f:
    content = f.read()

new_content = """import { Component } from '@angular/core';

interface ProjectOverview {
    objective: string;
    methodology: string[];
    features?: string[];
    results: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    overview?: ProjectOverview;
}

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    selectedProject: Project | null = null;

    openOverview(project: Project) {
        this.selectedProject = project;
        document.body.style.overflow = 'hidden';
    }

    closeOverview() {
        this.selectedProject = null;
        document.body.style.overflow = '';
    }

    projects: Project[] = [
        {
            id: 1,
            title: 'Intelligent Resume Scanner & ATS Optimizer',
            description: 'AI-driven NLP tool for automated candidate screening and skill-gap analysis using PyMuPDF and Scikit-learn. Achieved 85%+ accuracy in skill matching.',
            image: 'assets/bg1.png',
            technologies: ['Python', 'NLP', 'NLTK', 'Scikit-learn', 'Streamlit', 'PyMuPDF'],
            link: 'https://resumescaner.streamlit.app/',
            overview: {
                objective: 'To streamline the recruitment process by automating the initial screening of resumes against specific job descriptions (JD) using Natural Language Processing.',
                methodology: [
                    'Data Extraction: Leveraged PyMuPDF to parse unstructured text from PDF resumes, handling varying layouts and metadata.',
                    'Text Preprocessing: Engineered a pipeline using Regex for data cleaning and NLTK for tokenization and stop-word removal to isolate high-value keywords.',
                    'Feature Engineering: Implemented CountVectorizer to convert text into numerical vectors, emphasizing technical skills and domain expertise.',
                    'Matching Algorithm: Calculated compatibility scores using Cosine Similarity to measure the distance between resume vectors and job description requirements.'
                ],
                features: [
                    'Interactive Streamlit dashboard for real-time resume-JD matching.',
                    'Skill-Gap Analysis: Identifies and displays "Actually Missing Skills" to help candidates optimize resumes for Applicant Tracking Systems (ATS).'
                ],
                results: 'Automated 90% of manual screening tasks while achieving an 85%+ accuracy rate in skill matching.'
            }
        },
        {
            id: 2,
            title: 'Fashion Image Similarity Search Engine',
            description: 'Deep learning-based visual search system for fashion product discovery using ResNet50 Transfer Learning and Cosine Similarity to find visually similar items.',
            image: 'assets/bg2.png',
            technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Keras', 'ResNet50', 'Computer Vision'],
            link: '#',
            overview: {
                objective: 'To enable users to find visually similar fashion items within a large dataset (10,000+ images) using computer vision.',
                methodology: [
                    'Transfer Learning: Utilized a pre-trained ResNet50 architecture (trained on ImageNet) as a feature extractor.',
                    'Feature Embedding: Integrated a GlobalMaxPooling2D layer to condense the convolutional outputs into a unique 2048-dimensional feature embedding for every product image.',
                    'Similarity Computation: Applied Cosine Similarity on the extracted embeddings to rank and retrieve the top-5 most visually similar items from the database.'
                ],
                features: [
                    'Visual representation of fashion items using high-dimensional feature vectors.',
                    'Optimized search pipeline that reduced query latency by ~40%.'
                ],
                results: 'Successfully implemented a "search by image" capability, significantly enhancing product discovery and user experience.'
            }
        },
        {
            id: 3,
            title: 'Multi-Class Emotion Detection (NLP)',
            description: 'Textual sentiment analysis system for classifying human emotions into Sadness, Anger, Love, Joy, Surprise, and Fear using Logistic Regression & TF-IDF.',
            image: 'assets/bg3.png',
            technologies: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'NLTK', 'Logistic Regression', 'Streamlit'],
            link: '#',
            overview: {
                objective: 'To classify text samples into six distinct emotional categories: Sadness, Anger, Love, Joy, Surprise, and Fear.',
                methodology: [
                    'Advanced Preprocessing: Developed a modular cleaning script to handle lowercasing, punctuation, number removal, emoji filtering, and NLTK-based stop-word elimination.',
                    'Vectorization: Employed TF-IDF (Term Frequency-Inverse Document Frequency) to transform refined text into numerical features, capturing the importance of specific emotional keywords.',
                    'Model Selection: Trained and fine-tuned a Logistic Regression classifier on a robust dataset of 16,000 samples.'
                ],
                features: [
                    'Real-time prediction via a Streamlit web app.',
                    'Persistence of models using Joblib for fast inference and deployment.'
                ],
                results: 'Achieved a high classification accuracy of 86.28%.'
            }
        },
        {
            id: 4,
            title: 'E-Commerce Vendor Reliability Prediction Model',
            description: 'End-to-end machine learning pipeline predicting vendor reliability and identifying "At-Risk" sellers using XGBoost and Random Forest on transaction data.',
            image: 'assets/bg4.png',
            technologies: ['Python', 'MySQL', 'SQLAlchemy', 'Machine Learning', 'XGBoost', 'Random Forest', 'Pandas'],
            link: '#',
            overview: {
                objective: 'To predict vendor reliability and identify "At-Risk" or "Unreliable" sellers based on delivery performance and historical transaction data.',
                methodology: [
                    'Data Integration: Automated extraction from multiple relational tables (Orders, Sellers, Items, Reviews) using SQLAlchemy and MySQL.',
                    'Feature Engineering: Architected critical performance metrics using complex SQL CTEs, including Cancellation Rate, Average Shipping Delay, and Dispute Frequency.',
                    'Predictive Modeling: Compared ensemble methods, specifically Random Forest and XGBoost, to handle non-linear relationships in vendor behavior.'
                ],
                features: [
                    'Automated data transformation and multi-class labeling (Reliable, At-Risk, Unreliable).',
                    'Scalable monitoring system for e-commerce risk management.'
                ],
                results: 'Attained ~90% accuracy in identifying high-risk vendors, enabling proactive intervention by platform administrators.'
            }
        },
        {
            id: 5,
            title: 'Predictive Real Estate Valuation',
            description: 'Regression model for precision rental price estimation handling property-specific parameters with XGBoost Regression and logarithmic target transformations.',
            image: 'assets/bg5.png',
            technologies: ['Python', 'XGBoost', 'Scikit-learn', 'NumPy'],
            link: 'https://renthousing.streamlit.app/',
            overview: {
                objective: 'To estimate house rental prices with high accuracy based on property features like size, city, and furnishing status.',
                methodology: [
                    'Target Transformation: Applied logarithmic transformations (np.log1p) to the rental price variable to normalize skewed data and improve model convergence.',
                    'Advanced Regression: Utilized XGBoost Regression for its efficiency in handling tabular data and categorical variables like "BHK" and "City".',
                    'Optimization: Fine-tuned the model to ensure high predictive performance measured by a strong R-squared (R2) score.'
                ],
                features: [
                    'Handles property-specific parameters (size, bathroom count, furnishing status) to provide granular valuations.'
                ],
                results: 'Delivered a reliable valuation tool for real estate listings, effectively minimizing the error margin in price predictions.'
            }
        },
        {
            id: 6,
            title: 'Clinical Health Indicator (Heart Stroke Prediction)',
            description: 'Machine learning application predicting the probability of heart stroke using patient health metrics evaluated across Logistic Regression and SVM models.',
            image: 'assets/bg1.png',
            technologies: ['Python', 'Scikit-learn', 'Logistic Regression', 'SVM', 'Decision Tree', 'StandardScaler'],
            link: 'https://heartdiseasespredictor.streamlit.app/',
            overview: {
                objective: 'To predict the probability of heart stroke using patient health metrics such as age, BMI, and glucose levels.',
                methodology: [
                    'Feature Scaling: Implemented StandardScaler to normalize varying scales of clinical data (e.g., Blood Pressure vs. Age), which is critical for distance-based algorithms.',
                    'Model Benchmarking: Evaluated multiple classifiers, finding Logistic Regression and SVM to be top performers with an accuracy of 0.8478.',
                    'Model Deployment: Exported the final Logistic Regression model and scaler for production use.'
                ],
                features: [],
                results: 'Created a high-performing diagnostic aid capable of predicting stroke risk with ~85% accuracy.'
            }
        },
        {
            id: 7,
            title: 'Movie Recommendation System',
            description: 'Content-based filtering system providing personalized movie suggestions by analyzing the relationship between user ratings and film attributes.',
            image: 'assets/bg2.png',
            technologies: ['Python', 'Pandas', 'Scikit-learn'],
            link: '#',
            overview: {
                objective: 'To provide personalized movie suggestions by analyzing the relationship between user ratings and film attributes.',
                methodology: [
                    'Processed large-scale datasets to build user-item interaction matrices.',
                    'Implemented similarity metrics to identify movies most aligned with a user\'s historical preferences.'
                ],
                features: [],
                results: 'Developed an intuitive engine that enhances user engagement by surfacing relevant content.'
            }
        },
        {
            id: 8,
            title: 'Kokan Community App',
            description: 'A community app for Kokan.',
            image: 'assets/bg4.png',
            technologies: ['Angular', 'django', 'nosql', 'nodejs', 'typescript', 'python'],
            link: 'https://aplakokan.cloud'
        },
        {
            id: 9,
            title: 'Invoice Generator Website',
            description: 'A website for generating invoices.',
            image: 'assets/bg5.png',
            technologies: ['Angular', 'typescript', 'bootstrap', 'html', 'css'],
            link: 'https://zentrobill.netlify.app/'
        }
    ];
}
"""

with open("src/app/projects/projects.component.ts", "w") as f:
    f.write(new_content)

