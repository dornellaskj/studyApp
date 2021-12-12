import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  getSkills() {
    return [
        {
            "title": "Management",
            "skills" : [
                {
                    "label": "Agile Development",
                    "power": 100,
                    "message": "My teams give accurate estimates and continuously improve every iteration.",
                    "tooltip": "Expert"
                },
                {
                    "label": "Leadership",
                    "power": 90,
                    "message": "I have successfully built and led some pretty fantastic dev teams. I believe in creating T-shaped developers. I currently lead 3 of the most successful development teams at IHSM.",
                    "tooltip": "Expert"
                },
                {
                    "label": "Mentoring",
                    "power": 90,
                    "message": "I have been mentoring and growing developer's careers for over 7 years, I help them engineer their career path and their education. Constant learning is extremely important to me.",
                    "tooltip": "Expert"
                },
                {
                    "label": "Hiring/Recruiting",
                    "power": 90,
                    "message": "I have successfully interviewed 100+ developers from Associate to Principal level.",
                    "tooltip": "Expert"
                }
            ]
        },
        {
            "title": "Cyber Security",
            "skills": [
                {
                    "label": "Network Security",
                    "power": 85,
                    "message": "I have been working with AWS for about 8 years now. I have been primarily in charge of account security and financial management.",
                    "tooltip": "Advanced"
                },
                {
                    "label": "Auth",
                    "power": 90,
                    "message": "I have been working with others to build out an authN application base on the NGAC standard.",
                    "tooltip": "Expert"
                },
                {
                    "label": "Cloud Security",
                    "power": 80,
                    "message": "I have been working with AWS for about 3 years now. I have build full server setups with load balancers, I know how to keep costs low.",
                    "tooltip": "Advanced"
                }
            ]
        },
        {
            "title": "Cloud Services",
            "skills": [
                {
                    "label": "Amazon Web Services",
                    "power": 85,
                    "message": "I have been working with AWS for about 8 years now. I have been primarily in charge of account security and financial management.",
                    "tooltip": "Advanced"
                },
                {
                    "label": "Azure",
                    "power": 60,
                    "message": "I have been working with AWS for about 3 years now. I have build full server setups with load balancers, I know how to keep costs low.",
                    "tooltip": "Intermediate"
                }
            ]
        },
        {
            "title": "Architecture",
            "skills" : [
                {
                    "label": "Patterns",
                    "power": 70,
                    "message": "I understand the trade-offs in choosing patterns and I have successfully implemented and worked in many.",
                    "tooltip": "Intermediate"
                },                
            ]
        },
        {
            "title": "DEVOPS",
            "skills": [
                {
                    "label": "CI/CD",
                    "power": 90,
                    "message": "I have implemented true continuous integration and delivery at multiple organizations.",
                    "tooltip": "Expert"
                },
                {
                    "label": "Docker",
                    "power": 60,
                    "message": "I have been containerizing and deploying cintainers for many years.",
                    "tooltip": "Intermediate"
                },
                {
                    "label": "Kubernetes",
                    "power": 60,
                    "message": "I have experience deploying and managing clusters.",
                    "tooltip": "Intermediate"
                },
                {
                    "label": "Confluent Kafka",
                    "power": 50,
                    "message": "I have trained in Kafka, and srchitected microservice architectures utilizing Kafka.",
                    "tooltip": "Intermediate"
                }
            ]
        },
        {
            "title": "Web",
            "skills" : [
                {
                    "label": "HTML",
                    "power": 100,
                    "message": "I have been using HTML for over a decade. Writing HTML is second nature to me.",
                    "tooltip": "Expert"
                },
                {
                    "label": "CSS",
                    "power": 100,
                    "message": "I have been using CSS for over a decade. I am an expert in CSS.",
                    "tooltip": "Expert"
                },
                {
                    "label": "Javascript",
                    "power": 100,
                    "message": "I have been working with Javascript professionally for over 10 years. I am extremely well versed in Javascript.",
                    "tooltip": "Expert"
                },
                {
                    "label": "C#.NET",
                    "power": 90,
                    "message": "I have been working with C# professionally for about 5 years. Most of my C# experience is in .NET and WPF.",
                    "tooltip": "Advanced"
                }
            ]
        },
        {
            "title": "Client Side Technologies",
            "skills": [
                {
                    "label": "Angular",
                    "power": 90,
                    "message": "I have worked with Angular from version 1-10. I am a very experienced Angular developer. I have experience with PWAs as well.",
                    "tooltip": "Expert"
                },
                {
                    "label": "JQuery",
                    "power": 90,
                    "message": "I have over 7 years experience working with JQuery. I have implemented many APIs and built many front end compoenents.",
                    "tooltip": "Expert"
                },
                {
                    "label": "React JS",
                    "power": 60,
                    "message": "I have 1 year of experience with React.",
                    "tooltip": "Intermediate"
                }
            ]
        },
        {
            "title": "Database Technologies",
            "skills": [
                {
                    "label": "SQL",
                    "power": 95,
                    "message": "I have 5 years profesional experience. I have experience builidng stored proceedures, views, and complicated querys.",
                    "tooltip": "Expert"
                }
            ]
        },
        {
            "title": "Testing",
            "skills": [
                {
                    "label": "Unit Testing",
                    "power": 90,
                    "message": "I have extensive experience with unit testing and keeping high code coverage. I have worked with sinon, chai, mocha, jasmine, junit, C# and I am comfortable with unit testing concepts.",
                    "tooltip": "Expert"
                }
            ]
        }, 
        {
            "title": "Source Control",
            "skills" : [
                {
                    "label": "Git",
                    "power": 90,
                    "message": "I have been working with Git for many years. I am very familiar with this tool, I use it daily.",
                    "tooltip": "Expert"
                }
            ]
        }, 
        
    ]
  }
}
