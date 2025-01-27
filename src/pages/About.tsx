import { Code, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        About Me
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Hello! My name is Hannah Mojirade. I am currently a student at Yaba
          Collge of Technology, pursuing my studies with dedication and passion.
          I am also a creaive and innovative Graphic Designer with a flair for
          transforming ideas into visually stunning designs
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Technologies
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Corel Draw, Photoshop, Illustrator
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Graphics Design
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Education
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              <p>
                <strong>Name:</strong> Hannah Mojirade
              </p>
              <p>
                <strong>Matric No:</strong> F/HD/23/3210048
              </p>
              <p>
                <strong>Department:</strong> Computer Science
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
